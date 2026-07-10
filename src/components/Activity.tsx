import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { type FormattedActivity } from '../hooks/useActivities';
import ActivitySection from './ActivitySection';

interface ActivityCardProps {
  activity: FormattedActivity;
}

export default function Activity({ activity }: ActivityCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const panelId = useId();
  const triggerId = `${panelId}-trigger`;

  const generalStats = [
    { label: "Distance", value: activity.distance },
    { label: "Duration", value: activity.duration },
    { label: "Avg Speed", value: activity.averageSpeed },
  ];

  const speedStats = [
    { label: "Peak", value: activity.maxSpeed, highlight: true },
    { label: "Average 5s", value: activity.maxSpeed5s },
    { label: "Average 10s", value: activity.maxSpeed10s },
  ];

  const runStats = [
    { label: "100m", value: activity.fastest100 },
    { label: "500m", value: activity.fastest500 },
    { label: "1000m", value: activity.fastest1000 },
    { label: "Nautical Mile", value: activity.fastest1852 },
  ];

  return (
    <article className="overflow-hidden rounded-2xl border border-white/10 bg-white/5 shadow-xl backdrop-blur">
      <button
        id={triggerId}
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus:outline-none focus-visible:bg-white/5"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-400">{activity.date}</p>
          <p className="mt-1 truncate text-base font-semibold tracking-tight text-white">{activity.place_main}</p>
          {activity.place_secondary && (
            <p className="mt-1 truncate text-sm font-medium text-slate-400">{activity.place_secondary}</p>
          )}
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      <div id={panelId} className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="min-h-0 border-t border-white/5 bg-slate-950/40">
          <div className="flex flex-col gap-2 p-3 text-xs">

            <ActivitySection
              title="General"
              activities={generalStats}
              titleColorClass="text-slate-400"
            />

            <ActivitySection
              title="Speeds"
              activities={speedStats}
              titleColorClass="text-emerald-400/80"
            />

            <ActivitySection
              title="Runs"
              activities={runStats}
              titleColorClass="text-blue-400"
            />

          </div>
        </div>
      </div>
    </article>
  );
}