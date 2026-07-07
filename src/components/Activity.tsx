// src/components/Activity.tsx
import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { type FormattedActivity } from '../hooks/useActivities';

interface ActivityCardProps {
  activity: FormattedActivity;
}

export default function Activity({ activity }: ActivityCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerId = `${panelId}-trigger`;

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur">
      <button
        id={triggerId}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5 focus:outline-none focus-visible:bg-white/5"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-400">{activity.date}</p>
          <p className="mt-1 truncate text-lg font-semibold tracking-tight text-white">{activity.place}</p>
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0 border-t border-white/10 px-5 py-5">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">

            // TODO: make into component
            <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Duration</p>
              <p className="mt-2 text-base font-semibold text-white">{activity.duration}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Distance</p>
              <p className="mt-2 text-base font-semibold text-white">{activity.distance}</p>
            </div>

            <div className="rounded-2xl border border-white/10 bg-slate-950/55 p-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">Top Speed</p>
              <p className="mt-2 text-base font-semibold text-white">{activity.maxSpeed}</p>
            </div>

          </div>
        </div>
      </div>
    </article>
  );
}