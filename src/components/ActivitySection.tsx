import ActivityRow, { type ActivityRowProps } from "./ActivityRow";

interface ActivitySectionProps {
  title: string;
  activities: ActivityRowProps[];
  titleColorClass?: string;
}

export default function ActivitySection({ 
  title, 
  activities, 
  titleColorClass = "text-slate-400" 
}: ActivitySectionProps) {

  return (
    <div className="rounded-xl p-3 border border-white/5">
      <p className={`text-sm font-black uppercase tracking-widest mb-2 border-b border-white/5 pb-1.5 ${titleColorClass}`}>
        {title}
      </p>
      <div className="flex flex-col divide-y divide-white/[0.04]">
        {activities.map((item) => (
          <div key={item.label} className="py-1 first:pt-0 last:pb-0">
            <ActivityRow 
              label={item.label} 
              value={item.value} 
              highlight={item.highlight} 
            />
          </div>
        ))}
      </div>
    </div>
  );
}