const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const ts = require('typescript');
require.extensions['.ts'] = (module, filename) => {
  const compiled = ts.transpileModule(fs.readFileSync(filename, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020, esModuleInterop: true } });
  module._compile(compiled.outputText, filename);
};
const { parseIntake, emailIntake } = require('../app/lib/contact.ts');
const { POST } = require('../app/api/contact/route.ts');
const valid = { name: 'Test Visitor', message: 'A sample project inquiry.', replyType: 'email', reply: 'visitor@example.com', website: '', submissionId: '9d8024de-2445-4ec1-9aa6-5c35cb180f49' };

test('validates phone and email replies and rejects header injection / oversized input', () => {
  assert.equal(parseIntake(valid).reply, 'visitor@example.com');
  assert.ok(parseIntake({ ...valid, replyType: 'phone', reply: '+1 (555) 123-4567' }));
  for (const bad of [{ name: 'Joe\r\nBcc: someone' }, { reply: 'invalid' }, { message: 'a'.repeat(4001) }, { replyType: 'phone', reply: '-------' }, { submissionId: 'anything' }]) assert.equal(parseIntake({ ...valid, ...bad }), null);
});

const smtpEnv = { GMAIL_USER: 'owner@gmail.com', GMAIL_APP_PASSWORD: 'abcd efgh ijkl mnop' };
test('Gmail uses encrypted SMTP, fixed recipient, plain text and visitor reply-to', async () => {
  let closed = false;
  await emailIntake(valid, smtpEnv, (options) => {
    assert.equal(options.host, 'smtp.gmail.com');
    assert.equal(options.port, 465);
    assert.equal(options.secure, true);
    assert.equal(options.auth.pass, 'abcdefghijklmnop');
    return {
      async sendMail(body) {
        assert.equal(body.from, 'owner@gmail.com');
        assert.equal(body.to, 'Joseph.Ward@Outlook.com');
        assert.equal(body.replyTo, valid.reply);
        assert.ok(body.text.includes(valid.message));
        assert.ok(body.text.includes(valid.submissionId));
        assert.equal(body.html, undefined);
        assert.equal(body.disableFileAccess, true);
        assert.equal(body.disableUrlAccess, true);
        return { accepted: [body.to], rejected: [] };
      }, close() { closed = true; },
    };
  });
  assert.equal(closed, true);
});
test('SMTP errors and recipient rejection fail and close the connection', async () => {
  for (const scenario of ['throw', 'rejected', 'empty']) {
    let closed = false;
    await assert.rejects(emailIntake(valid, smtpEnv, () => ({
      async sendMail() {
        if (scenario === 'throw') throw new Error('SMTP failed');
        return scenario === 'rejected' ? { accepted: [], rejected: ['Joseph.Ward@Outlook.com'] } : {};
      }, close() { closed = true; },
    })));
    assert.equal(closed, true);
  }
});
test('missing or invalid credentials never create an SMTP connection', async () => {
  for (const env of [{}, { ...smtpEnv, GMAIL_USER: 'bad\r\naddress@gmail.com' }, { ...smtpEnv, GMAIL_APP_PASSWORD: 'bad' }]) {
    await assert.rejects(emailIntake(valid, env, () => { throw new Error('Must not connect'); }), /configuration/);
  }
});
test('phone replies stay in message body without an invalid Reply-To', async () => {
  await emailIntake({ ...valid, replyType: 'phone', reply: '+15551234567' }, smtpEnv, () => ({
    async sendMail(body) {
      assert.equal(body.replyTo, undefined);
      assert.ok(body.text.includes('+15551234567'));
      return { accepted: [body.to] };
    }, close() {},
  }));
});
test('API rejects cross-origin and malformed requests before sending', async () => {
  const request = (body, origin) => new Request('https://joeward.me/api/contact', { method: 'POST', headers: { origin, 'content-type': 'application/json' }, body: JSON.stringify(body) });
  assert.equal((await POST(request(valid, 'https://other.example'))).status, 403);
  assert.equal((await POST(request({ ...valid, reply: 'bad' }, 'https://joeward.me'))).status, 400);
});

test('API checks the public Host when Next rewrites the internal URL', async () => {
  const request = (origin) => new Request('http://localhost:3001/api/contact', { method: 'POST', headers: { host: '127.0.0.1:3001', origin, 'content-type': 'application/json' }, body: '{}' });
  assert.equal((await POST(request('http://127.0.0.1:3001'))).status, 400);
  assert.equal((await POST(request('https://other.example'))).status, 403);
  assert.equal((await POST(request('not-an-origin'))).status, 403);
});

test('missing services produce honest dev preview and production unavailable', async () => {
  const saved = { key: process.env.GMAIL_USER, from: process.env.GMAIL_APP_PASSWORD, mode: process.env.NODE_ENV };
  const originalFetch = global.fetch;
  global.fetch = () => { throw new Error('No external calls allowed in preview test'); };
  delete process.env.GMAIL_USER;
  delete process.env.GMAIL_APP_PASSWORD;
  const request = () => new Request('https://joeward.me/api/contact', { method: 'POST', headers: { origin: 'https://joeward.me', 'content-type': 'application/json', 'x-forwarded-for': 'test-preview' }, body: JSON.stringify(valid) });
  try {
    process.env.NODE_ENV = 'development';
    assert.deepEqual(await (await POST(request())).json(), { preview: true });
    process.env.NODE_ENV = 'production';
    assert.equal((await POST(request())).status, 503);
  } finally {
    global.fetch = originalFetch;
    for (const [key, value] of [['GMAIL_USER', saved.key], ['GMAIL_APP_PASSWORD', saved.from], ['NODE_ENV', saved.mode]]) { if (value === undefined) delete process.env[key]; else process.env[key] = value; }
  }
});


