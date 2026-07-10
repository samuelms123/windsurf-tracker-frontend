import AppHeader from '../components/AppHeader.tsx'
import Activity from '../components/Activity.tsx'
import NavigationBar from '../components/NavigationBar.tsx'
import { useActivities } from '../hooks/useActivities.ts';
import Loader from '../components/Loader.tsx';

function ActivityPage() {
  const { data: activities, isLoading } = useActivities();

  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <AppHeader title="Activities" />
      <main className="flex-1 overflow-y-scroll px-6 pb-24 pt-8">
        <div className="mx-auto w-full max-w-6xl">
          <div className="grid gap-2">
            {isLoading ? (
              <Loader />
            ) : (
              activities?.map((activity) => (
                <Activity key={activity.id} activity={activity} />
              ))
            )}
          </div>
        </div>
      </main>

      <NavigationBar />
    </div>
  );
}

export default ActivityPage;