import react from "react";
import CandidateLogin from "../features/auth/pages/CandidateLogin";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import jobRoutes from "@/features/jobs/routes";
import publicRoutes from "@/features/publics/routes";
function App() {
  // Logic

  // UI
  return (
    <BrowserRouter>
      <Routes>
        {/* Define your routes here */}
        <Route path="/login" element={<CandidateLogin />} />
        <Route path="/register" element={<CandidateLogin />} />
        {jobRoutes}
      
        {publicRoutes}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
