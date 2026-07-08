import AppHeader from '../components/AppHeader.tsx'
import StatsGrid, { type SummaryStat } from '../components/StatsGrid.tsx'
import StravaSyncButton from '../components/StravaSyncButton.tsx'
import NavigationBar from '../components/NavigationBar.tsx'
import { useStravaSync } from '../hooks/useStravaSync.ts';
import { useSummary } from '../hooks/useSummary.ts';
import Loader from '../components/Loader.tsx';

const loadingStats: SummaryStat[] = [
    { label: 'Session Count', value: '0' },
    { label: 'Time Spent', value: '0h 0m' },
    { label: 'Time Spent Planing', value: '0h 0m' },
    { label: 'Total distance travelled', value: '0 km' },
    { label: 'Top Speed', value: '0' },
    { label: 'Fastest 100m', value: '--' },
    { label: 'Fastest 500m', value: '--' },
    { label: 'Fastest 1000m', value: '--' },
]

function HomePage() {
  const { mutate, isPending, isSuccess } = useStravaSync();
  const { data: liveStats, isPending: isSummaryPending } = useSummary();
  const currentStats = liveStats ?? loadingStats;

  return (
    <div className="flex h-screen w-full flex-col bg-slate-950 text-slate-100 overflow-hidden">
      <AppHeader
        title="Summary"
        action={
          <StravaSyncButton 
            isLoading={isPending} 
            isSuccess={isSuccess} 
            onClick={() => mutate()} 
          />
        }
      />
      <main className="flex-1 overflow-y-scroll px-6 pb-24 pt-6">
        <div className="mx-auto w-full max-w-6xl">
          {isSummaryPending ? <Loader /> : <StatsGrid stats={currentStats} />}
        </div>
      </main>

      <NavigationBar />
    </div>
  );
}

export default HomePage;