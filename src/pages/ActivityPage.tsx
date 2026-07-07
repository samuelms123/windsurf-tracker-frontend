import AppHeader from '../components/AppHeader.tsx'
import Activity from '../components/Activity.tsx'
import NavigationBar from '../components/NavigationBar.tsx'
import { useActivities } from '../hooks/useActivities.ts';

function ActivityPage() {
  const { data: activities, isLoading } = useActivities();

  if (isLoading) return <p>Loading...</p>;

  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <AppHeader title="Activities" />
      <main className="flex-1 overflow-y-auto px-6 pb-24 pt-6">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-4">
            {activities?.map((activity) => (
              <Activity key={activity.id} activity={activity} />
            ))}
          </div>
        </div>
      </main>

      <NavigationBar />
    </div>
  );
}

export default ActivityPage;
