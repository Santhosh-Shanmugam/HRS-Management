import React, { useState, useEffect } from "react";

const LeaveManagement = () => {
  // Sample Leave Requests Data
  const [leaveRequests, setLeaveRequests] = useState([]);
  const [newLeave, setNewLeave] = useState({ name: "", type: "", startDate: "", endDate: "", status: "Pending" });

  // Fetch leave requests from backend (Placeholder)
  useEffect(() => {
    // Replace with actual API call
    setLeaveRequests([
      { id: 1, name: "Alice Johnson", type: "Sick Leave", startDate: "2025-03-01", endDate: "2025-03-03", status: "Pending" },
      { id: 2, name: "Bob Williams", type: "Annual Leave", startDate: "2025-03-10", endDate: "2025-03-15", status: "Approved" },
    ]);
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewLeave({ ...newLeave, [e.target.name]: e.target.value });
  };

  // Add Leave Request
  const handleSubmit = (e) => {
    e.preventDefault();
    setLeaveRequests([...leaveRequests, { ...newLeave, id: Date.now() }]);
    setNewLeave({ name: "", type: "", startDate: "", endDate: "", status: "Pending" });
  };

  // Approve/Reject Leave Request
  const handleStatusChange = (id, status) => {
    setLeaveRequests(leaveRequests.map((leave) => (leave.id === id ? { ...leave, status } : leave)));
  };

  // Delete Leave Request
  const handleDelete = (id) => {
    setLeaveRequests(leaveRequests.filter((leave) => leave.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Leave Management</h2>
      <p className="text-gray-600 mb-6">Manage employee leave requests efficiently.</p>

      {/* Leave Request Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Add Leave Request</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Employee Name"
            value={newLeave.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <select
            name="type"
            value={newLeave.type}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Leave Type</option>
            <option value="Sick Leave">Sick Leave</option>
            <option value="Annual Leave">Annual Leave</option>
            <option value="Maternity Leave">Maternity Leave</option>
            <option value="Casual Leave">Casual Leave</option>
          </select>
          <input
            type="date"
            name="startDate"
            value={newLeave.startDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="date"
            name="endDate"
            value={newLeave.endDate}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Submit Request
          </button>
        </form>
      </div>

      {/* Leave Requests Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Leave Requests</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Employee</th>
              <th className="p-2 border">Leave Type</th>
              <th className="p-2 border">Start Date</th>
              <th className="p-2 border">End Date</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {leaveRequests.map((leave) => (
              <tr key={leave.id} className="text-center">
                <td className="p-2 border">{leave.name}</td>
                <td className="p-2 border">{leave.type}</td>
                <td className="p-2 border">{leave.startDate}</td>
                <td className="p-2 border">{leave.endDate}</td>
                <td className={`p-2 border font-semibold ${leave.status === "Approved" ? "text-green-600" : "text-yellow-600"}`}>
                  {leave.status}
                </td>
                <td className="p-2 border flex justify-center space-x-2">
                  {leave.status === "Pending" && (
                    <>
                      <button onClick={() => handleStatusChange(leave.id, "Approved")} className="bg-green-500 text-white px-3 py-1 rounded-md">
                        Approve
                      </button>
                      <button onClick={() => handleStatusChange(leave.id, "Rejected")} className="bg-red-600 text-white px-3 py-1 rounded-md">
                        Reject
                      </button>
                    </>
                  )}
                  <button onClick={() => handleDelete(leave.id)} className="bg-gray-500 text-white px-3 py-1 rounded-md">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default LeaveManagement;
