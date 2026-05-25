import { createRoot } from 'react-dom/client'
import App from './app/App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from './app/providers/AuthProvider.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ViewJobListPage from './features/jobs/pages/ViewJobListPage.jsx';
import CandidateLogin from './features/auth/pages/CandidateLogin.jsx';
import PublicLayout from './app/layout/PublicLayout.jsx';

createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path='/' element={<CandidateLogin />} />
        <Route path='/view-job-list-posting' element={<PublicLayout />} />
      </Routes>
    </BrowserRouter>
    {/* Composition */}
  </AuthProvider>,
)
