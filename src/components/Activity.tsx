// src/components/Activity.tsx
import { useState, useId } from 'react';
import { ChevronDown } from 'lucide-react';
import { type FormattedActivity } from '../hooks/useActivities';
import ActivityItem from './ActivityItem';

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
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors focus:outline-none focus-visible:bg-white/5"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-400">{activity.date}</p>
          <p className="mt-1 truncate text-lg font-semibold tracking-tight text-white">{activity.place_main}</p>
          {activity.place_secondary && (
            <p className="mt-1 truncate text-sm font-medium text-slate-400">{activity.place_secondary}</p>
          )}
        </div>

        <ChevronDown
          className={`h-5 w-5 shrink-0 text-slate-300 transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`}
          aria-hidden="true"
        />
      </button>

      <div
        id={panelId}
        aria-labelledby={triggerId}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}
      >
        <div className="min-h-0 border-t border-white/10">
          <div className="grid gap-1 px-5 py-5 sm:grid-cols-2 lg:grid-cols-3">

            <ActivityItem label="Duration" value={activity.duration} />
            <ActivityItem label="Distance" value={activity.distance} />
            <ActivityItem label="Top Speed" value={activity.maxSpeed} />
            <ActivityItem label="Average Speed" value={activity.averageSpeed} />
            <ActivityItem label="Max Speed (5s)" value={activity.maxSpeed5s} />
            <ActivityItem label="Max Speed (10s)" value={activity.maxSpeed10s} />
            <ActivityItem label="Fastest 100m" value={activity.fastest100} />
            <ActivityItem label="Fastest 500m" value={activity.fastest500} />
            <ActivityItem label="Fastest 1000m" value={activity.fastest1000} />

          </div>
        </div>
      </div>
    </article>
  );
}