import { BrowserRouter, Routes, Route } from 'react-router-dom'
import SummaryPage from '../pages/SummaryPage'
import ActivityPage from '../pages/ActivityPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SummaryPage />} />
        <Route path="/activities" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter