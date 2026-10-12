'use client';

import { useState } from 'react';
import { careerEntries } from './careerEntries';

export default function CareerTimeline({ detailsEnabled = false }: { detailsEnabled?: boolean }) {
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);
  const selected = careerEntries.find((entry) => entry.id === selectedEntryId);

  return (
    <section id="experience" aria-labelledby="experience-heading" className="my-8 text-neutral-900 dark:text-white">
      <div className="flex items-center justify-between gap-4 pb-1">
        <h2 id="experience-heading" className="text-sm font-medium tracking-tight text-cyan-950 dark:text-cyan-200">The journey so far</h2>
        {detailsEnabled && <p className="text-[10px] text-neutral-500 dark:text-neutral-400">Select a milestone</p>}
      </div>

      <div className="overflow-x-auto pb-2 pt-3" aria-label="Career milestones">
        <ol className="relative flex min-w-[600px] pb-2">
          <li aria-hidden="true" className="absolute left-10 right-10 top-11 h-px portfolio-divider" />
          {careerEntries.map((entry) => {
            const active = entry.id === selectedEntryId;
            return (
              <li key={entry.id} className="relative flex-1 px-1">
                <button
                  type="button"
                  disabled={!detailsEnabled}
                  id={`milestone-${entry.id}`}
                  aria-label={`${entry.company}${entry.role ? `, ${entry.role}` : ''}, ${entry.month ? `${entry.month} ` : ''}${entry.year}`}
                  aria-expanded={active}
                  aria-controls="career-detail"
                  onClick={() => detailsEnabled && setSelectedEntryId(entry.id)}
                  onDoubleClick={() => setSelectedEntryId(null)}
                  onKeyDown={(event) => {
                    if (event.key === 'Escape') setSelectedEntryId(null);
                  }}
                  className={`group disabled:cursor-default flex w-full flex-col items-center rounded-lg px-1 py-1 text-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-500 ${active ? 'text-cyan-800 dark:text-cyan-200' : 'text-neutral-600 hover:text-cyan-800 dark:text-neutral-300 dark:hover:text-cyan-200'}`}
                >
                  <span className={`mb-3 text-xs font-medium ${active ? 'text-cyan-800 dark:text-cyan-200' : 'text-neutral-500 dark:text-neutral-400'}`}>{entry.year}</span>
                  <span className={`relative flex h-10 w-10 items-center justify-center rounded-full border bg-white transition-shadow ${active ? 'border-cyan-700 ring-4 ring-cyan-50 dark:ring-cyan-950' : 'border-neutral-200 group-hover:border-cyan-600 group-hover:shadow-sm dark:border-neutral-700'}`}>
                    {entry.logo ? <img src={entry.logo} alt="" className="h-7 w-7 rounded-full object-contain" /> : <span className="text-lg font-semibold" aria-hidden="true">a</span>}
                  </span>
                  <span className="mt-2 text-[11px] font-medium leading-4">{entry.company}</span>
                </button>
              </li>
            );
          })}
        </ol>
      </div>

      <div id="career-detail" hidden={!selected} className="pt-4">
        {selected && <article aria-labelledby={`milestone-${selected.id} career-role`} className="border-l-2 border-amber-200 bg-white py-2 pl-5 text-neutral-900 dark:bg-black dark:text-white sm:pl-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="text-xs font-semibold text-cyan-700 dark:text-cyan-400">{selected.company}</p>
              <h3 id="career-role" className="mt-1 text-xl font-medium tracking-tight">{selected.role || selected.company}</h3>
            </div>
            <span className="shrink-0 rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-800 dark:bg-amber-950 dark:text-amber-200">{selected.month ? `${selected.month} ` : ''}{selected.year}</span>
          </div>
          <p className="mt-4 text-sm leading-6 text-neutral-600 dark:text-neutral-300">{selected.summary}</p>
          {selected.achievements.length > 0 && <>
          <div className="my-5 h-px bg-neutral-100 dark:bg-neutral-800" />
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-neutral-500 dark:text-neutral-400">Selected contributions</p>
          <ul className="space-y-3 text-sm leading-6 [&_b]:font-semibold [&_b]:text-cyan-800 dark:[&_b]:text-cyan-300">
            {selected.achievements.map((achievement, index) => (
              <li key={`${selected.id}-${index}`} className="flex gap-3">
                <span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-amber-500" />
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
          </>}
          <button type="button" onClick={() => setSelectedEntryId(null)} className="mt-4 rounded px-2 py-1 text-xs text-neutral-500 hover:text-cyan-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyan-500 dark:text-neutral-400 dark:hover:text-cyan-300">Close details</button>
        </article>}
      </div>
    </section>
  );
}
