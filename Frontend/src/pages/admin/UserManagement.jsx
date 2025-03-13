import React, { useState, useEffect } from "react";

const UserManagement = () => {
  // Sample Users Data
  const [users, setUsers] = useState([]);
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "" });
  const [editingUser, setEditingUser] = useState(null);

  // Fetch users from backend (Placeholder)
  useEffect(() => {
    // Replace with actual API call
    setUsers([
      { id: 1, name: "John Doe", email: "john@example.com", role: "Admin" },
      { id: 2, name: "Jane Smith", email: "jane@example.com", role: "HR" },
    ]);
  }, []);

  // Handle Input Change
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  // Add or Update User
  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingUser) {
      setUsers(users.map((user) => (user.id === editingUser.id ? newUser : user)));
      setEditingUser(null);
    } else {
      setUsers([...users, { ...newUser, id: Date.now() }]);
    }
    setNewUser({ name: "", email: "", role: "" });
  };

  // Edit User
  const handleEdit = (user) => {
    setEditingUser(user);
    setNewUser(user);
  };

  // Delete User
  const handleDelete = (id) => {
    setUsers(users.filter((user) => user.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">User Management</h2>
      <p className="text-gray-600 mb-6">Manage users efficiently with CRUD operations.</p>

      {/* User Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">{editingUser ? "Edit User" : "Add New User"}</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            value={newUser.name}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            value={newUser.email}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <select
            name="role"
            value={newUser.role}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          >
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="HR">HR</option>
            <option value="Employee">Employee</option>
          </select>
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            {editingUser ? "Update User" : "Add User"}
          </button>
        </form>
      </div>

      {/* User List Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">User List</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Role</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="text-center">
                <td className="p-2 border">{user.name}</td>
                <td className="p-2 border">{user.email}</td>
                <td className="p-2 border">{user.role}</td>
                <td className="p-2 border flex justify-center space-x-2">
                  <button onClick={() => handleEdit(user)} className="bg-yellow-500 text-white px-3 py-1 rounded-md">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(user.id)} className="bg-red-600 text-white px-3 py-1 rounded-md">
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

export default UserManagement;
