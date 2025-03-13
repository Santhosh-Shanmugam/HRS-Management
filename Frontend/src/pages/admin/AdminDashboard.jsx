import Sidebar from "../../components/Sidebar";
import AdminHeader from "../../components/AdminHeader";
const AdminDashboard = () => {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}

      {/* Main Content */}
      <div className="flex-1 p-6">
        <AdminHeader />

        <h2 className="text-3xl font-bold text-gray-800 mb-4">Admin Dashboard</h2>
        <p className="text-gray-600">Manage users, reports, and attendance efficiently.</p>

        {/* Stats Cards - Direct Implementation */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          <div className="p-6 rounded-lg shadow-lg text-white bg-blue-500">
            <h3 className="text-lg font-semibold">Total Users</h3>
            <p className="text-3xl font-bold">150</p>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-green-500">
            <h3 className="text-lg font-semibold">Active Employees</h3>
            <p className="text-3xl font-bold">120</p>
          </div>

          <div className="p-6 rounded-lg shadow-lg text-white bg-red-500">
            <h3 className="text-lg font-semibold">Pending Approvals</h3>
            <p className="text-3xl font-bold">30</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
