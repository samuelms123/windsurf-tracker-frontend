import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SummaryPage from '../pages/SummaryPage'
import ActivityPage from '../pages/ActivityPage'
import BlockedPage from '../pages/BlockedPage'
import VpnGuard from '../components/VpnGuard'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/blocked" element={<BlockedPage />} />

        <Route element={<VpnGuard />}>
          <Route path="/" element={<SummaryPage />} />
          <Route path="/activities" element={<ActivityPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter