import React, { useState, useEffect } from "react";

const Attendance = () => {
  const [attendanceRecords, setAttendanceRecords] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState(new Date().toISOString().slice(0, 7)); // Default to current month

  // Fetch attendance records from backend (Placeholder)
  useEffect(() => {
    // Replace with actual API call
    setAttendanceRecords([
      { date: "2025-03-01", status: "Present" },
      { date: "2025-03-02", status: "Absent" },
      { date: "2025-03-03", status: "Late" },
      { date: "2025-03-04", status: "Present" },
    ]);
  }, []);

  // Filter records by selected month
  const filteredRecords = attendanceRecords.filter((record) =>
    record.date.startsWith(selectedMonth)
  );

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Attendance</h2>
      <p className="text-gray-600 mb-6">Track your attendance records.</p>

      {/* Month Filter */}
      <div className="mb-4">
        <label className="font-semibold">Select Month: </label>
        <input
          type="month"
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className="border p-2 rounded-md"
        />
      </div>

      {/* Attendance Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Attendance Records</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Date</th>
              <th className="p-2 border">Status</th>
            </tr>
          </thead>
          <tbody>
            {filteredRecords.length > 0 ? (
              filteredRecords.map((record, index) => (
                <tr key={index} className="text-center">
                  <td className="p-2 border">{record.date}</td>
                  <td
                    className={`p-2 border font-semibold ${
                      record.status === "Present"
                        ? "text-green-600"
                        : record.status === "Absent"
                        ? "text-red-600"
                        : "text-yellow-600"
                    }`}
                  >
                    {record.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="text-center p-4 text-gray-500">
                  No records found for this month.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Attendance;
