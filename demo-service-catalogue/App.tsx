import { Routes, Route, Navigate } from "react-router-dom"
import ServiceOrderPage from "./pages/ServiceOrderPage/ServiceOrderPage"
import ServiceDetailsPage from "./pages/ServiceDetailsPage/ServiceDetailsPage"
import HomePage from "./pages/HomePage/HomePage"
import ServicesProvider from "./data/ServicesProvider"

const App = () => (
  <ServicesProvider>
    <Routes>
      <Route path="/service/:id/order" Component={ServiceOrderPage} />
      <Route path="/service/:id" Component={ServiceDetailsPage} />
      <Route path="/" Component={HomePage} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  </ServicesProvider>
)
export default App
