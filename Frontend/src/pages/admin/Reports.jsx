import React, { useState } from "react";

const Reports = () => {
  const [filter, setFilter] = useState("All");

  const reportsData = [
    { id: 1, title: "Attendance Report", date: "2025-03-10", type: "Attendance" },
    { id: 2, title: "Employee Performance", date: "2025-03-09", type: "Performance" },
    { id: 3, title: "Payroll Summary", date: "2025-03-08", type: "Finance" },
    { id: 4, title: "Leave Records", date: "2025-03-07", type: "HR" },
  ];

  const filteredReports =
    filter === "All" ? reportsData : reportsData.filter((report) => report.type === filter);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Reports</h2>
      <p className="text-gray-600 mb-6">Generate and manage reports efficiently.</p>

      {/* Filter Options */}
      <div className="flex space-x-4 mb-6">
        {["All", "Attendance", "Performance", "Finance", "HR"].map((category) => (
          <button
            key={category}
            onClick={() => setFilter(category)}
            className={`px-4 py-2 rounded-md font-semibold transition ${
              filter === category ? "bg-blue-600 text-white" : "bg-gray-200 text-gray-700"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Reports Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-700 mb-4">Available Reports</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 p-3 text-left">Title</th>
              <th className="border border-gray-300 p-3 text-left">Date</th>
              <th className="border border-gray-300 p-3 text-left">Category</th>
            </tr>
          </thead>
          <tbody>
            {filteredReports.length > 0 ? (
              filteredReports.map((report) => (
                <tr key={report.id} className="hover:bg-gray-100">
                  <td className="border border-gray-300 p-3">{report.title}</td>
                  <td className="border border-gray-300 p-3">{report.date}</td>
                  <td className="border border-gray-300 p-3">{report.type}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="border border-gray-300 p-3 text-center text-gray-500">
                  No reports available.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Reports;
