'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, Check, Copy, Github, Linkedin, Mail, X } from 'lucide-react';
import ContactIntake from './ContactIntake';

const email = 'Joseph.Ward@Outlook.com';
const action = 'contact-action flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600';

export default function ContactButton() {
  const dialog = useRef<HTMLDialogElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [copyState, setCopyState] = useState<'idle' | 'copied' | 'error'>('idle');

  useEffect(() => {
    if (!open) return;
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.showModal();
    return () => {
      document.body.style.overflow = overflow;
      dialog.current?.close();
      trigger.current?.focus();
    };
  }, [open]);

  useEffect(() => {
    if (copyState !== 'copied') return;
    const timer = window.setTimeout(() => setCopyState('idle'), 2500);
    return () => window.clearTimeout(timer);
  }, [copyState]);

  async function copyEmail() {
    try { await navigator.clipboard.writeText(email); setCopyState('copied'); }
    catch { setCopyState('error'); }
  }

  return (
    <>
      <button ref={trigger} type="button" onClick={() => { setCopyState('idle'); setOpen(true); }} aria-haspopup="dialog" className="contact-trigger group relative inline-flex shrink-0 overflow-hidden rounded-lg px-3 py-1 text-sm font-semibold text-cyan-700 hover:text-cyan-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-600" style={{ color: '#FFF', border: '2px solid #42798b', background: 'linear-gradient(180deg, rgba(255,255,255,.22), transparent 55%), linear-gradient(135deg, #366b7d, #0b3544 65%, #195369)', backgroundClip: 'padding-box', boxShadow: '0 3px 10px rgba(8,51,68,.18)' }}>
        <span className="relative">Contact Me</span>
      </button>
      <dialog ref={dialog} onCancel={() => setOpen(false)} onClose={() => setOpen(false)} onClick={(event) => { if (event.target === event.currentTarget) setOpen(false); }} aria-labelledby="contact-title"  className="contact-dialog fixed inset-0 m-auto max-h-[calc(100dvh-2rem)] w-[calc(100%-2rem)] max-w-md overflow-y-auto rounded-2xl border border-neutral-200 bg-white p-0 text-neutral-900 shadow-2xl dark:border-neutral-700 dark:bg-neutral-950 dark:text-white">
        <div className="relative p-6 sm:p-7">
          <button type="button" autoFocus onClick={() => setOpen(false)} aria-label="Close contact dialog" className="contact-action absolute right-4 top-4 flex h-8 w-8 items-center justify-center rounded-full text-neutral-500 hover:bg-neutral-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 dark:hover:bg-neutral-800"><X size={18} /></button>
          <h2 id="contact-title" className="pr-8 text-xl font-medium tracking-tight">Let’s connect.</h2>
          <p className="mt-1 text-xs text-neutral-500 dark:text-neutral-400">A quick introduction, then we can connect.</p>
          <ContactIntake />
          <section aria-label="Other ways to connect" style={{ marginTop: 24, paddingTop: 20, borderTop: '1px solid rgba(128,128,128,.18)' }}>
          <div className="rounded-xl border border-neutral-200 bg-neutral-50 dark:border-neutral-800 dark:bg-neutral-900" style={{ borderRadius: 14, overflow: 'hidden' }}>
          <div className="contact-email-row" style={{ display: 'flex', flexWrap: 'nowrap', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '8px 12px' }}>
              <a href={`mailto:${email}`} style={{ minWidth: 0, flex: '0 1 auto', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', fontSize: 14, fontWeight: 500, lineHeight: '20px' }} className="text-xs font-medium text-cyan-800 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-cyan-200">{email}</a>
              <button type="button" onClick={copyEmail} aria-label={copyState === 'copied' ? 'Email copied' : 'Copy email address'} style={{ display: 'inline-flex', flex: '0 0 32px', width: 32, height: 32, padding: 0, alignItems: 'center', justifyContent: 'center' }} className="contact-action rounded-lg text-cyan-800 hover:bg-cyan-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-cyan-200 dark:hover:bg-cyan-950">{copyState === 'copied' ? <Check size={16} /> : <Copy size={16} />}</button>
          </div>
          {copyState !== 'idle' && <p role="status" className="mt-1 text-[11px] text-neutral-500 dark:text-neutral-400">{copyState === 'copied' ? 'Email copied.' : 'Please select and copy the address above.'}</p>}
          <div style={{ margin: '0 12px', borderTop: '1px solid rgba(128,128,128,.15)' }}>
            <a href={`mailto:${email}?subject=${encodeURIComponent('I saw your site')}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '12px 8px', fontSize: 14, fontWeight: 500, lineHeight: '20px' }} className="contact-action text-cyan-800 hover:text-cyan-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-cyan-200"><Mail size={16} aria-hidden="true" /> Send an email <ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          </div>
          <div className="contact-socials grid grid-cols-2 gap-3" style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: 10, paddingTop: 12 }}>
            <a href="https://www.linkedin.com/in/joe-ward1/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className={`${action} text-neutral-600 hover:bg-neutral-50 hover:text-cyan-800 dark:text-neutral-300 dark:hover:bg-neutral-900`}><Linkedin size={15} aria-hidden="true" /> LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
            <a href="https://github.com/jjward25" target="_blank" rel="noopener noreferrer" aria-label="GitHub (opens in a new tab)" className={`${action} text-neutral-600 hover:bg-neutral-50 hover:text-cyan-800 dark:text-neutral-300 dark:hover:bg-neutral-900`}><Github size={15} aria-hidden="true" /> GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
          </div>
          </section>
        </div>
      </dialog>
    </>
  );
}
