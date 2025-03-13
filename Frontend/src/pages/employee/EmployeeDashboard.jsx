import React from "react";
import Sidebar from "../../components/Sidebar";
import { User, Calendar, FileText } from "lucide-react";

const EmployeeDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        {/* Header */}
        <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
          <h2 className="text-xl font-semibold text-gray-700">Welcome, Employee</h2>
        </div>

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Employee Dashboard</h2>
        <p className="text-gray-600">View your profile, attendance, and payslip here.</p>

        {/* Employee Dashboard Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-lg shadow-lg text-white bg-blue-500 flex items-center space-x-4">
            <User size={40} />
            <div>
              <h3 className="text-lg font-semibold">Profile</h3>
              <p className="text-md">View and edit your personal details</p>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-green-500 flex items-center space-x-4">
            <Calendar size={40} />
            <div>
              <h3 className="text-lg font-semibold">Attendance</h3>
              <p className="text-md">Track your attendance records</p>
            </div>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-yellow-500 flex items-center space-x-4">
            <FileText size={40} />
            <div>
              <h3 className="text-lg font-semibold">Payslip</h3>
              <p className="text-md">Download your salary slips</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EmployeeDashboard;
