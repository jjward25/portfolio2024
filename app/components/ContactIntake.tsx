'use client';

import { FormEvent, useEffect, useRef, useState } from 'react';
import { ArrowUp, Check, ChevronLeft, Pencil, Send } from 'lucide-react';

const prompts = ['Hi! What should I call you?', 'Nice to meet you. What’s on your mind?', 'Where can I get back to you?', 'Looking good. Ready to send?'];
const bubble = 'rounded-2xl rounded-bl-sm bg-neutral-100 px-4 py-3 text-sm leading-6 text-neutral-700 dark:bg-neutral-800 dark:text-neutral-200';

export default function ContactIntake() {
  const [step, setStep] = useState(0);
  const [values, setValues] = useState(['', '', '']);
  const [replyType, setReplyType] = useState<'email' | 'phone'>('email');
  const [sending, setSending] = useState(false);
  const [result, setResult] = useState<'sent' | 'preview' | null>(null);
  const [error, setError] = useState('');
  const [website, setWebsite] = useState('');
  const requestId = useRef<string | null>(null);
  const input = useRef<HTMLInputElement | HTMLTextAreaElement | null>(null);
  const bottom = useRef<HTMLDivElement>(null);

  useEffect(() => {
    input.current?.focus({ preventScroll: true });
    bottom.current?.scrollIntoView({ block: 'nearest', behavior: 'auto' });
  }, [step, result]);

  function update(value: string) {
    setValues((previous) => previous.map((item, index) => index === step ? value : item));
    requestId.current = null;
    setError('');
  }

  async function next(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (sending) return;
    if (step < 3) {
      const value = values[step].trim();
      if (!value) { setError('Add your answer before continuing.'); return; }
      if (step === 2 && replyType === 'phone' && !/^\+?[\d\s().-]{7,30}$/.test(value)) { setError('Please enter a phone number, including your country code.'); return; }
      setValues((previous) => previous.map((item, index) => index === step ? value : item));
      setError('');
      setStep(step + 1);
      return;
    }
    setSending(true);
    setError('');
    requestId.current ||= crypto.randomUUID();
    try {
      const response = await fetch('/api/contact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: values[0], message: values[1], reply: values[2], replyType, website, submissionId: requestId.current }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Your message could not be sent. Please try again.');
      setResult(data.preview ? 'preview' : 'sent');
    } catch (problem) {
      setError(problem instanceof Error ? problem.message : 'Please try again or use email below.');
    } finally { setSending(false); }
  }

  return (
    <div className="mt-3" style={{ marginTop: 12 }}>
      <div className="max-h-[min(380px,45dvh)] space-y-3 overflow-y-auto pr-1" role="region" aria-label="Your conversation with Joe">
        {prompts.slice(0, result ? 4 : step + 1).map((prompt, index) => (
          <div key={index} className="space-y-3">
            <div className="flex items-end gap-2.5">
              {index === 0 ? <img src="/prof.jpg" alt="Joe Ward" className="mb-1 h-7 w-7 shrink-0 rounded-full object-cover" /> : <span className="w-7 shrink-0" />}
              <div><p className={bubble}>{prompt}</p></div>
            </div>
            {index < 3 && (index < step || result) && <div className="flex justify-end pl-9">
              <div style={{ backgroundColor: '#007AFF', color: 'white' }} className="max-w-full rounded-2xl rounded-br-sm px-4 py-3 text-white">
                <p className="whitespace-pre-wrap break-words text-sm leading-6">{values[index]}</p>
                {!result && <button type="button" disabled={sending} onClick={() => { setStep(index); setError(''); }} className="mt-1 inline-flex items-center gap-1 rounded text-[10px] text-white hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-white disabled:opacity-50"><Pencil size={10} aria-hidden="true" /> Edit {['name', 'message', 'reply info'][index]}</button>}
              </div>
            </div>}
          </div>
        ))}
        {result && <div className="pl-9" role="status"><p className={bubble}><Check size={15} className="mb-1 text-cyan-700" aria-hidden="true" />{result === 'preview' ? 'Preview complete — nothing was sent. Message delivery hasn’t been connected yet.' : 'Thanks! Your message is on its way to my inbox. I’ll get back to you using the details you shared.'}</p></div>}
        <div ref={bottom} />
      </div>

      {!result && <form onSubmit={next} className="mt-5">
        <div hidden style={{ display: 'none' }} aria-hidden="true"><label>Website<input tabIndex={-1} autoComplete="off" value={website} onChange={(event) => setWebsite(event.target.value)} /></label></div>
        {step === 2 && <fieldset className="mb-2 flex gap-3 text-xs"><legend className="sr-only">How should Joe reply?</legend>{(['email', 'phone'] as const).map((type) => <label key={type} className="flex items-center gap-1.5 text-neutral-600 dark:text-neutral-300"><input type="radio" name="replyType" value={type} checked={replyType === type} onChange={() => { setReplyType(type); setError(''); requestId.current = null; }} className="accent-cyan-700" />{type === 'email' ? 'Email' : 'Phone'}</label>)}</fieldset>}
        {step < 3 ? <div style={{ backgroundColor: '#083344', borderColor: '#083344', display: 'flex', alignItems: 'center', gap: 8, padding: '4px 8px' }} className="contact-input-bubble flex items-center gap-2 rounded-2xl border focus-within:ring-2 focus-within:ring-blue-200">
          <label htmlFor="intake-answer" className="sr-only" style={{ position: 'absolute', width: 1, height: 1, padding: 0, margin: -1, overflow: 'hidden', clipPath: 'inset(50%)', whiteSpace: 'nowrap', border: 0 }}>{['Your name', 'Your message', replyType === 'email' ? 'Your email address' : 'Your phone number'][step]}</label>
          {step === 1 ? <textarea ref={(element) => { input.current = element; }} id="intake-answer" style={{ background: 'transparent', color: '#FFF', minWidth: 0, flex: '1 1 0', padding: '6px 8px', lineHeight: '20px', border: 0 }} required rows={3} maxLength={4000} value={values[step]} onChange={(event) => update(event.target.value)} placeholder="Tell me a little about it…" aria-describedby={error ? 'intake-error' : undefined} aria-invalid={!!error} className="min-w-0 flex-1 resize-y bg-transparent px-2 py-1 text-sm text-neutral-900 outline-none dark:text-white" /> : <input ref={(element) => { input.current = element; }} id="intake-answer" style={{ background: 'transparent', color: '#FFF', minWidth: 0, flex: '1 1 0', padding: '6px 8px', lineHeight: '20px', border: 0 }} required type={step === 2 ? (replyType === 'email' ? 'email' : 'tel') : 'text'} autoComplete={step === 0 ? 'name' : replyType === 'email' ? 'email' : 'tel'} maxLength={step === 0 ? 100 : 254} value={values[step]} onChange={(event) => update(event.target.value)} placeholder={step === 0 ? 'Your name' : replyType === 'email' ? 'you@example.com' : '+1 (555) 123-4567'} aria-describedby={error ? 'intake-error' : undefined} aria-invalid={!!error} className="min-w-0 flex-1 bg-transparent px-2 py-2 text-sm text-neutral-900 outline-none dark:text-white" />}
          <button type="submit" aria-label="Continue to next question" style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flex: '0 0 32px', width: 32, height: 32, padding: 0 }} className="contact-action flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-cyan-700 text-white hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600"><ArrowUp size={18} style={{ display: 'block', flexShrink: 0 }} /></button>
        </div> : <button type="submit" disabled={sending} className="contact-action flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-700 py-3 text-sm font-medium text-white hover:bg-cyan-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-600 disabled:cursor-wait disabled:opacity-60"><Send size={15} aria-hidden="true" />{sending ? 'Sending…' : 'Send message'}</button>}
        {error && <p id="intake-error" role="alert" className="mt-2 text-xs text-red-700 dark:text-red-300">{error}</p>}
        <div className="mt-2 flex items-center justify-between gap-2 text-[10px] text-neutral-500 dark:text-neutral-400">
          {step > 0 && <button type="button" disabled={sending} onClick={() => { setStep(step - 1); setError(''); }} className="inline-flex items-center gap-1 rounded hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600"><ChevronLeft size={12} /> Back</button>}
          <span style={{ marginLeft: 'auto' }}>{step < 3 ? `${step + 1} of 3` : 'Ready to email Joe'}</span>
        </div>
      </form>}
    </div>
  );
}



