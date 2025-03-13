import { Link } from "react-router-dom";
import { Home, Users, ClipboardList, FileText, Briefcase, User, Calendar, DollarSign, Settings } from "lucide-react";

const Sidebar = ({ role }) => {
  const menuItems = {
    admin: [
      { name: "Dashboard", path: "/admin", icon: <Home size={20} /> },
      { name: "User Management", path: "/admin/users", icon: <Users size={20} /> },
      { name: "Attendance Analysis", path: "/admin/attendance", icon: <ClipboardList size={20} /> },
      { name: "Reports", path: "/admin/reports", icon: <FileText size={20} /> },
      { name: "Settings", path: "/admin/settings", icon: <Settings size={20} /> },
    ],
    hr: [
      { name: "Dashboard", path: "/hr", icon: <Home size={20} /> },
      { name: "Employee Management", path: "/hr/employees", icon: <Users size={20} /> },
      { name: "Recruitment", path: "/hr/recruitment", icon: <Briefcase size={20} /> },
      { name: "Leave Management", path: "/hr/leave", icon: <Calendar size={20} /> },
      { name: "Settings", path: "/hr/settings", icon: <Settings size={20} /> },
    ],
    employee: [
      { name: "Dashboard", path: "/employee", icon: <Home size={20} /> },
      { name: "Profile", path: "/employee/profile", icon: <User size={20} /> },
      { name: "Attendance", path: "/employee/attendance", icon: <ClipboardList size={20} /> },
      { name: "Payslip", path: "/employee/payslip", icon: <DollarSign size={20} /> },
      { name: "Settings", path: "/employee/settings", icon: <Settings size={20} /> },
    ],
  };

  return (
    <div className="w-64 bg-gray-900 text-white h-screen p-5 shadow-lg">
      <h2 className="text-xl font-bold mb-6 text-gray-200">{role.toUpperCase()} Dashboard</h2>
      <ul>
        {menuItems[role].map((item, index) => (
          <li key={index} className="mb-2">
            <Link
              to={item.path}
              className="flex items-center p-3 rounded-md hover:bg-gray-700 transition duration-200"
            >
              <span className="mr-3">{item.icon}</span>
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
