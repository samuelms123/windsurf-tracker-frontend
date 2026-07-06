import AppHeader from '../components/AppHeader.tsx'
import Activity from '../components/Activity.tsx'
import NavigationBar from '../components/NavigationBar.tsx'

const mockActivities = [
  { date: 'Mon, Jul 1', place: 'Riverside Loop' },
  { date: 'Wed, Jul 3', place: 'Harbor Trail' },
  { date: 'Sat, Jul 6', place: 'Summit Route' },
]


function ActivityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start gap-6 px-6 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <AppHeader
          title="Activities"
        />

        <div className="grid gap-4">
          {mockActivities.map((activity) => (
            <Activity key={`${activity.date}-${activity.place}`} date={activity.date} place={activity.place} />
          ))}
        </div>
      </section>
      <NavigationBar />
    </main>
  )
}

export default ActivityPage
