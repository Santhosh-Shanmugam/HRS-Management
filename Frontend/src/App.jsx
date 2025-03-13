import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardLayout from "./components/DashboardLayout";
import AdminDashboard from "./pages/admin/AdminDashboard";
import UserManagement from "./pages/admin/UserManagement";
import AttendanceAnalysis from "./pages/admin/AttendanceAnalysis";
import Reports from "./pages/admin/Reports";
import Settings from "./pages/admin/Settings";

import HRDashboard from "./pages/hr/HRDashboard";
import EmployeeManagement from "./pages/hr/EmployeeManagement";
import Recruitment from "./pages/hr/Recruitment";
import LeaveManagement from "./pages/hr/LeaveManagement";

import EmployeeDashboard from "./pages/employee/EmployeeDashboard";
// import DashBoard from "./pages/employee/DashBoard";
import Profile from "./pages/employee/Profile";
import Attendance from "./pages/employee/Attendance";
import Payslip from "./pages/employee/Payslip";
// import SettingsPage from "./pages/SettingsPage";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin" element={<DashboardLayout role="admin" />}>
          <Route index element={<AdminDashboard />} />
          <Route path="users" element={<UserManagement />} />
          <Route path="attendance" element={<AttendanceAnalysis />} />
          <Route path="reports" element={<Reports />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* HR Routes */}
        <Route path="/hr" element={<DashboardLayout role="hr" />}>
          <Route index element={<HRDashboard />} />
          <Route path="employees" element={<EmployeeManagement />} />
          <Route path="recruitment" element={<Recruitment />} />
          <Route path="leave" element={<LeaveManagement />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Employee Routes */}
        <Route path="/employee" element={<DashboardLayout role="employee" />}>
          <Route index element={<EmployeeDashboard />} />
          {/* <Route path="dashboard" element={<DashBoard />} /> */}
          <Route path="profile" element={<Profile />} />
          <Route path="attendance" element={<Attendance />} />
          <Route path="payslip" element={<Payslip />} />
          <Route path="settings" element={<Settings />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
