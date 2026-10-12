import { createHash } from 'node:crypto';
import { emailIntake, parseIntake } from '../../lib/contact';

export const runtime = 'nodejs';
export const maxDuration = 60;
const attempts = new Map<string, { count: number; expires: number }>();
const json = (body: object, status = 200) => Response.json(body, { status, headers: { 'Cache-Control': 'no-store' } });

export async function POST(request: Request) {
  const origin = request.headers.get('origin');
  // Next.js may rewrite the internal URL host; Host retains the visitor-facing host.
  const host = request.headers.get('host') || new URL(request.url).host;
  let sameOrigin = false;
  try {
    const parsed = new URL(origin || '');
    sameOrigin = parsed.host === host && ['http:', 'https:'].includes(parsed.protocol) && parsed.origin === origin;
  } catch { /* A missing or malformed origin is rejected. */ }
  if (!sameOrigin) return json({ error: 'Please send your message from the portfolio contact form.' }, 403);
  if (!request.headers.get('content-type')?.startsWith('application/json')) return json({ error: 'Invalid request.' }, 415);
  const now = Date.now();
  attempts.forEach((entry, key) => { if (entry.expires <= now) attempts.delete(key); });
  const ip = request.headers.get('x-forwarded-for')?.split(',')[0]?.trim() || 'local';
  const key = createHash('sha256').update(ip).digest('hex');
  const entry = attempts.get(key) || { count: 0, expires: now + 10 * 60 * 1000 };
  if (entry.count >= 5 || attempts.size > 10000) return json({ error: 'A few too many attempts. Please try again later or email Joe directly.' }, 429);
  entry.count++;
  attempts.set(key, entry);
  let intake;
  try {
    const text = await request.text();
    if (text.length > 24000) return json({ error: 'Your message is too long.' }, 413);
    intake = parseIntake(JSON.parse(text));
  } catch { return json({ error: 'Please check your message and try again.' }, 400); }
  if (!intake) return json({ error: 'Please check your name, message, and reply details.' }, 400);
  if (intake.website) return json({ accepted: true });
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    if (process.env.NODE_ENV === 'development') return json({ preview: true });
    return json({ error: 'The contact form is temporarily unavailable. Please use the email link below.' }, 503);
  }
  try { await emailIntake(intake); }
  catch { return json({ error: 'Your message could not be sent. Your answers are still here—try again or use email below.' }, 502); }
  return json({ accepted: true });
}



