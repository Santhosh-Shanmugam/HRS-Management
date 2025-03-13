import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const DashboardLayout = ({ role }) => {
  return (
    <div className="flex h-screen bg-gray-100 ">
      {/* Sidebar */}
      <Sidebar role={role} />

      {/* Main Content */}
      <div className="flex-1 p-6">
        <Outlet /> {/* This will render nested components */}
      </div>
    </div>
  );
};

export default DashboardLayout;
