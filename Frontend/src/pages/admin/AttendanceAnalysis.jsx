import React from "react";

const AttendanceAnalysis = () => {
  const attendanceData = [
    { id: 1, name: "John Doe", date: "2025-03-12", status: "Present" },
    { id: 2, name: "Jane Smith", date: "2025-03-12", status: "Absent" },
    { id: 3, name: "Mike Johnson", date: "2025-03-12", status: "Late" },
    { id: 4, name: "Emily Davis", date: "2025-03-12", status: "Present" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Attendance Analysis</h2>
      <p className="text-gray-600 mb-6">Monitor attendance trends and generate reports.</p>

      {/* Attendance Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-blue-600">Total Employees</h3>
          <p className="text-3xl font-bold mt-2">150</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-green-600">Present Today</h3>
          <p className="text-3xl font-bold mt-2">120</p>
        </div>
        <div className="bg-white p-6 rounded-lg shadow-md text-center">
          <h3 className="text-xl font-semibold text-red-600">Absent Today</h3>
          <p className="text-3xl font-bold mt-2">30</p>
        </div>
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Recent Attendance Records</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">Employee Name</th>
              <th className="border border-gray-300 p-3 text-left">Date</th>
              <th className="border border-gray-300 p-3 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            {attendanceData.map((record) => (
              <tr key={record.id} className="hover:bg-gray-100">
                <td className="border border-gray-300 p-3">{record.name}</td>
                <td className="border border-gray-300 p-3">{record.date}</td>
                <td
                  className={`border border-gray-300 p-3 font-semibold ${
                    record.status === "Present" ? "text-green-600" :
                    record.status === "Absent" ? "text-red-600" : "text-yellow-600"
                  }`}
                >
                  {record.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AttendanceAnalysis;
