import AppHeader from '../components/AppHeader.tsx'
import StatsGrid, { type HomeStat } from '../components/StatsGrid.tsx'
import StravaSyncButton from '../components/StravaSyncButton.tsx'
import NavigationBar from '../components/NavigationBar.tsx'
import { useStravaSync } from '../hooks/useStravaSync.ts';

const stats: HomeStat[] = [
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


    return (
        <main className="min-h-screen bg-slate-950 text-slate-100">
            <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start gap-6 px-6 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
                <AppHeader
                    title="Summary"
                    action={<StravaSyncButton isLoading={isPending} isSuccess={isSuccess} onClick={() => mutate()} />}
                />


                <StatsGrid stats={stats} />
            </section>
            <NavigationBar />
        </main>
    )
}

export default HomePage