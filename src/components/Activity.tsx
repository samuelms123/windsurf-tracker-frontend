import { useId, useState } from 'react'

export type ActivityStat = {
  date: string
  place: string
  details?: Array<{ label: string; value: string }>
}

const mockDetails = [
  { label: 'Duration', value: '1h 42m' },
  { label: 'Distance', value: '24.8 km' },
  { label: 'Average speed', value: '14.6 km/h' },
  { label: 'Max speed', value: '32.1 km/h' },
  { label: 'Elevation gain', value: '218 m' },
  { label: 'Calories', value: '612 kcal' },
  { label: 'Weather', value: 'Clear, 22°C' },
  { label: 'Heart rate', value: '148 bpm' },
  { label: 'Training load', value: '72' },
  { label: 'Effort', value: 'Strong' },
]

export default function Activity({ date, place, details = mockDetails }: ActivityStat) {
  const [isOpen, setIsOpen] = useState(false)
  const panelId = useId()

  return (
    <article className="overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur">
      <button
        type="button"
        aria-expanded={isOpen}
        aria-controls={panelId}
        onClick={() => setIsOpen((current) => !current)}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors hover:bg-white/5"
      >
        <div className="min-w-0">
          <p className="text-sm font-medium text-slate-400">{date}</p>
          <p className="mt-1 truncate text-lg font-semibold tracking-tight text-white">{place}</p>
        </div>

        <span
          className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/10 bg-slate-900/80 text-slate-200 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : 'rotate-0'
          }`}
          aria-hidden="true"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current stroke-[2.5]">
            <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
      </button>

      <div
        id={panelId}
        className={`grid overflow-hidden transition-[grid-template-rows,opacity] duration-300 ease-out ${
          isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <div className="min-h-0">
          <div className="border-t border-white/10 px-5 py-5">
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {details.map((detail) => (
                <div key={detail.label} className="rounded-2xl border border-white/10 bg-slate-950/50 p-3">
                  <p className="text-xs uppercase tracking-[0.2em] text-slate-400">{detail.label}</p>
                  <p className="mt-2 text-sm font-semibold text-white">{detail.value}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}