import { Bell, UserCircle } from "lucide-react";

const AdminHeader = () => {
  return (
    <div className="flex justify-between items-center bg-white p-4 shadow-md rounded-md mb-6">
      <h2 className="text-xl font-semibold text-gray-700">Welcome, Admin</h2>
      <div className="flex items-center space-x-4">
        <Bell className="text-gray-500 cursor-pointer hover:text-gray-700" size={24} />
        <UserCircle className="text-gray-500 cursor-pointer hover:text-gray-700" size={30} />
      </div>
    </div>
  );
};

export default AdminHeader;
