

export type ActivityRowProps = {
  label: string;
  value: string;
  highlight?: boolean;
}

export default function ActivityRow({ label, value, highlight }: ActivityRowProps) {
  return (
    <div className="flex items-center justify-between gap-1 py-0.5">
      <span className="text-sm text-slate-400 font-medium truncate">{label}</span>
      <span className={`text-base font-bold tracking-tight shrink-0 ${highlight ? 'text-emerald-400 font-black' : 'text-white'}`}>
        {value || '—'}
      </span>
    </div>
  );
} 