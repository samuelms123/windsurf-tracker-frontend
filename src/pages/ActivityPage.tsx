import AppHeader from '../components/AppHeader.tsx'
import NavigationBar from '../components/NavigationBar.tsx'


function ActivityPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100">
      <section className="mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-start gap-6 px-6 pb-10 pt-4 sm:px-8 sm:pt-6 lg:px-12 lg:pt-8">
        <AppHeader
          title="Activities"
        />
      </section>
      <NavigationBar />
    </main>
  )
}

export default ActivityPage
