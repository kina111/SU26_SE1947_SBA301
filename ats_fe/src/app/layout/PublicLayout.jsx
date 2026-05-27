import React from "react";
import PublicFooter from "../../shared/components/PublicFooter";
import PublicSidebar from "../../shared/components/PublicSidebar";
import ViewJobListPage from "@/features/jobs/pages/ViewJobListPage.jsx";
import { Outlet } from "react-router-dom";

const PublicLayout = () => {
  return (
    <>
      <PublicSidebar />
      <main>
        <Outlet />
      </main>
      <PublicFooter />
    </>
  );
};

export default PublicLayout;
