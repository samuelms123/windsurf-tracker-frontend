export type SummaryStat = {
  label: string
  value: string
}

type StatsGridProps = {
  stats: SummaryStat[]
}

function StatsGrid({ stats }: StatsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2">
      {stats.map((stat) => (
        <article
          key={stat.label}
          className="rounded-3xl border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur"
        >
          <p className="text-sm font-medium text-slate-400">{stat.label}</p>
          <p className="mt-4 text-2xl font-semibold tracking-tight text-white">{stat.value}</p>
        </article>
      ))}
    </div>
  )
}

export default StatsGrid