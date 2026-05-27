import ManagementLayout from '@/app/layout/ManagementLayout'
import { Route } from 'react-router-dom'
import ManagementDashBoardPage from './pages/ManagementDashBoardPage'

const jobRoutes = (
    <Route path="/management" element={<ManagementLayout />} >
        <Route index element={<ManagementDashBoardPage />} />
    </Route>
  )

export default jobRoutes;