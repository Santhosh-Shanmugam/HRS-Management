import React, { useState, useEffect } from "react";

const EmployeeManagement = () => {
  // Sample Employees Data
  const [employees, setEmployees] = useState([]);
  const [newEmployee, setNewEmployee] = useState({ name: "", email: "", position: "" });
  const [editingEmployee, setEditingEmployee] = useState(null);

  // Fetch employees from backend (Placeholder)
  useEffect(() => {
    // Replace with actual API call
    setEmployees([
      { id: 1, name: "Alice Johnson", email: "alice@example.com", position: "Software Engineer" },
      { id: 2, name: "Bob Williams", email: "bob@example.com", position: "HR Manager" },
    ]);
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewEmployee({ ...newEmployee, [e.target.name]: e.target.value });
  };

  // Add or Update Employee
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingEmployee) {
      setEmployees(employees.map((emp) => (emp.id === editingEmployee.id ? newEmployee : emp)));
      setEditingEmployee(null);
    } else {
      setEmployees([...employees, { ...newEmployee, id: Date.now() }]);
    }
    setNewEmployee({ name: "", email: "", position: "" });
  };

  // Edit Employee
  const handleEdit = (employee) => {
    setEditingEmployee(employee);
    setNewEmployee(employee);
  };

  // Delete Employee
  const handleDelete = (id) => {
    setEmployees(employees.filter((emp) => emp.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Employee Management</h2>
      <p className="text-gray-600 mb-6">Manage employee records efficiently.</p>

      {/* Employee Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">{editingEmployee ? "Edit Employee" : "Add New Employee"}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={newEmployee.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={newEmployee.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Enter Position"
            value={newEmployee.position}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            {editingEmployee ? "Update Employee" : "Add Employee"}
          </button>
        </form>
      </div>

      {/* Employee List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Employee List</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Position</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((employee) => (
              <tr key={employee.id} className="text-center">
                <td className="p-2 border">{employee.name}</td>
                <td className="p-2 border">{employee.email}</td>
                <td className="p-2 border">{employee.position}</td>
                <td className="p-2 border flex justify-center space-x-2">
                  <button onClick={() => handleEdit(employee)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(employee.id)} className="bg-red-600 text-white px-3 py-1 rounded-md">
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

export default EmployeeManagement;
