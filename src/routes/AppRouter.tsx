import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from '../pages/HomePage'
import ActivityPage from '../pages/ActivityPage'

function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/activities" element={<ActivityPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRouter