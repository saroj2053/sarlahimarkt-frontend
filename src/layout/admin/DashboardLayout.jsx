import React from "react";
import Sidebar from "../../components/admin/Sidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 min-h-[calc(100vh-304px)] pl-80 my-8">
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
