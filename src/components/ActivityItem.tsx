interface ActivityItemProps {
  label: string;
  value: string;
}

export default function ActivityItem({ label, value }: ActivityItemProps) {

    return (
        <div className="flex justify-between items-baseline rounded-2xl border border-white/10 bg-slate-950/55 px-6 py-3 shadow-[inset_0_1px_0_rgba(255,255,255,0.04)]">
            <p className="shrink-0 text-[0.7rem] font-medium uppercase tracking-[0.4em] text-slate-400">{label}</p>
            <p className="min-w-0 text-base font-semibold leading-none text-white">{value}</p>
        </div>
    )
}