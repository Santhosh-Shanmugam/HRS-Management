import React from "react";
import Sidebar from "../../components/Sidebar"
import { Briefcase, CalendarCheck, Users } from "lucide-react";

const HRDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">+
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Welcome, HR Manager</h2>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">HR Dashboard</h2>
        <p className="text-gray-600">Manage employees, recruitment, and leave requests efficiently.</p>

        {/* HR Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-lg shadow-lg text-white bg-blue-500 flex items-center space-x-4">
            <Briefcase size={40} />
            <div>
              <h3 className="text-lg font-semibold">Total Employees</h3>
              <p className="text-3xl font-bold">250</p>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-green-500 flex items-center space-x-4">
            <CalendarCheck size={40} />
            <div>
              <h3 className="text-lg font-semibold">Leave Requests</h3>
              <p className="text-3xl font-bold">18</p>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-red-500 flex items-center space-x-4">
            <Users size={40} />
            <div>
              <h3 className="text-lg font-semibold">New Hires</h3>
              <p className="text-3xl font-bold">5</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HRDashboard;
