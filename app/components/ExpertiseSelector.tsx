'use client';

import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowUpRight, ChevronDown, Lightbulb, TrendingUp, Users, Compass } from 'lucide-react';

const specialties = [
  { id: 'operations', label: 'Operational Excellence', icon: Lightbulb, company: 'TD Ameritrade · Procurement',
    headline: 'Give people their time back.',
    detail: 'Led spend-channel improvements that reduced Category Manager work on roughly 10% of purchases. Built a vendor-request app to automate tracking and give partners visibility into the process.',
    link: '/#experience', linkLabel: 'Explore my experience', metric: '~10%', metricLabel: 'of purchases streamlined' },
  { id: 'intelligence', label: 'Business Intelligence & Growth', icon: TrendingUp, company: 'Vercel · GTM Analytics',
    headline: 'Turn scattered signals into decisions.',
    detail: 'Built analytics for lead scoring, conversions, pricing, territory performance, and account health. Supported the April 2024 pricing revamp with forecasts and analysis of customer impact.',
    link: '/blog/projects/forecasting', linkLabel: 'See a forecasting project', metric: 'GTM', metricLabel: 'from signals to strategy' },
  { id: 'people', label: 'People & Project Manager', icon: Users, company: 'Vercel · Customer Success Operations',
    headline: 'Make the change work for the people.',
    detail: 'Led the CSM migration to Salesforce, from design and testing through enablement and launch, followed by post-launch support. Later led a team of three GTM analysts.',
    link: '/#experience', linkLabel: 'Explore my experience', metric: '30 days', metricLabel: 'to migrate CSMs to Salesforce' },
  { id: 'partner', label: 'Executive Partner', icon: Compass, company: 'Vercel · Charles Schwab',
    headline: 'Connect the detail to the bigger picture.',
    detail: 'Supported board meetings, quarterly planning, and pipeline reviews at Vercel. At Schwab, partnered on vendor-synergy analysis and automated reporting across the combined procurement organization.',
    link: '/#experience', linkLabel: 'Explore my experience', metric: 'Strategy', metricLabel: 'grounded in the operating detail' },
];

export default function ExpertiseSelector({ detailsEnabled = false }: { detailsEnabled?: boolean }) {
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const selected = specialties.find((item) => item.id === selectedId);
  const reduceMotion = useReducedMotion();
  const selectedIndex = specialties.findIndex((item) => item.id === selectedId);
  const signalX = selectedIndex === 0 ? 23 : selectedIndex === 1 ? 73 : 50;
  const signalY = selectedIndex < 2 ? 18 : selectedIndex === 2 ? 57 : 87;

  return (
    <div className="w-full min-w-0">
      <div className="home-expertise-grid expertise-funnel grid grid-cols-2 gap-2.5" aria-label="Explore my expertise">
        {selected && !reduceMotion && <svg key={selected.id} className="expertise-signal" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <motion.path d={selectedIndex < 2 ? `M ${signalX} ${signalY} L ${signalX} 35 Q ${signalX} 42 50 42 L 50 100` : `M 50 ${signalY} L 50 100`} fill="none" stroke="#e9ce78" strokeWidth="1" vectorEffect="non-scaling-stroke" initial={{ opacity: 0 }} animate={{ opacity: [0, .6, 0] }} transition={{ duration: .8 }} />
          <motion.circle r="2" fill="#ffe8a0" initial={{ cx: signalX, cy: signalY, opacity: 0 }} animate={{ cx: [signalX, signalX, 50, 50], cy: [signalY, Math.max(signalY, 38), Math.max(signalY, 57), 100], opacity: [0, 1, 1, 0] }} transition={{ duration: .75, times: [0, .25, .6, 1], ease: 'easeInOut' }} />
        </svg>}
        {specialties.map((item, index) => {
          const active = selectedId === item.id;
          const Icon = item.icon;
          return (
            <motion.button key={item.id} type="button" disabled={!detailsEnabled} aria-expanded={detailsEnabled ? active : undefined} aria-controls="expertise-detail" onClick={() => detailsEnabled && setSelectedId(active ? null : item.id)}
              animate={selected && index >= Math.max(2, selectedIndex) && !reduceMotion ? { boxShadow: ['inset 0 1px 0 rgba(255,255,255,.16), 0 4px 12px rgba(8,51,68,.1)', 'inset 0 0 18px rgba(233,206,120,.2), 0 0 12px rgba(233,206,120,.25)', 'inset 0 1px 0 rgba(255,255,255,.16), 0 4px 12px rgba(8,51,68,.1)'] } : {}}
              transition={{ duration: .45, delay: index === 2 ? .2 : .45 }}
              onPointerMove={(event) => {
                if (reduceMotion || event.pointerType === 'touch') return;
                const bounds = event.currentTarget.getBoundingClientRect();
                event.currentTarget.style.setProperty('--light-x', `${event.clientX - bounds.left}px`);
                event.currentTarget.style.setProperty('--light-y', `${event.clientY - bounds.top}px`);
              }}
              className={`expertise-control ${index > 1 ? 'expertise-wide' : ''} relative flex items-center gap-2.5 overflow-hidden rounded-lg border bg-cyan-950 px-3 text-left text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-cyan-500 ${active ? 'border-amber-200' : 'border-cyan-800'}`}>
              <Icon size={index > 1 ? 16 : 21} strokeWidth={1.5} aria-hidden="true" className={`relative shrink-0 ${active ? 'text-amber-200' : 'text-cyan-200'}`} />
              <span className="relative flex-1 text-xs font-medium leading-5">{item.label}</span>
              {detailsEnabled && <ChevronDown size={13} aria-hidden="true" className={`expertise-chevron relative shrink-0 ${active ? 'rotate-180 text-amber-200' : 'text-cyan-200/60'}`} />
            }
            </motion.button>
          );
        })}
      </div>
      <div id="expertise-detail">
        <AnimatePresence initial={false}>
          {selected && <motion.div key="expertise-panel" initial={{ height: reduceMotion ? 'auto' : 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: reduceMotion ? 'auto' : 0, opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .3, ease: [.22, 1, .36, 1] }} className="overflow-hidden">
            <div className="mt-3 rounded-xl border border-cyan-900/10 bg-gradient-to-br from-cyan-50/70 via-white to-amber-50/60 p-4 text-neutral-900 dark:border-cyan-800/50 dark:from-cyan-950/50 dark:via-neutral-950 dark:to-neutral-950">
              <AnimatePresence mode="wait" initial={false}>
                <motion.div key={selected.id} initial={{ opacity: 0, y: reduceMotion ? 0 : 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0 }} transition={{ duration: reduceMotion ? 0 : .15 }}>
                  <p className="text-[10px] font-medium text-cyan-700 dark:text-cyan-300">{selected.company}</p>
                  <h2 className="mt-1.5 text-base font-medium tracking-tight dark:text-white">{selected.headline}</h2>
                  <p className="mt-2 text-xs leading-5 text-neutral-600 dark:text-neutral-300">{selected.detail}</p>
                  <div className="mt-4 flex flex-wrap items-end justify-between gap-3 border-t border-cyan-900/10 pt-3 dark:border-cyan-800/40">
                    <div><p className="text-lg font-medium tracking-tight text-cyan-950 dark:text-cyan-100">{selected.metric}</p><p className="text-[10px] text-neutral-500 dark:text-neutral-400">{selected.metricLabel}</p></div>
                    <a href={selected.link} className="inline-flex items-center gap-1 text-[11px] font-medium text-cyan-700 underline-offset-4 hover:underline focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-600 dark:text-cyan-200">{selected.linkLabel}<ArrowUpRight size={12} aria-hidden="true" /></a>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>}
        </AnimatePresence>
      </div>
    </div>
  );
}
