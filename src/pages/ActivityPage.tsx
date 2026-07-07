import AppHeader from '../components/AppHeader.tsx'
import Activity from '../components/Activity.tsx'
import NavigationBar from '../components/NavigationBar.tsx'
import { useActivities } from '../hooks/useActivities.ts';

function ActivityPage() {
  const { data: activities, isLoading } = useActivities();

  if (isLoading) return <p>Loading...</p>;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start gap-6 px-6 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <AppHeader
          title="Activities"
        />

        <div className="grid gap-4">
          {activities?.map((activity) => (
            <Activity
              key={activity.id}
              activity={activity}
            />
          ))}
        </div>
      </section>
      <NavigationBar />
    </main>
  )
}

export default ActivityPage
