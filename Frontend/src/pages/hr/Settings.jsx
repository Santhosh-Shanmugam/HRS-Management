import React, { useState } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Settings</h2>
      <p className="text-gray-600 mb-6">Configure system preferences and user settings.</p>

      {/* Settings Sections */}
      <div className="bg-white p-6 rounded-lg shadow-md space-y-6">
        {/* Theme Settings */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Dark Mode</h3>
            <p className="text-gray-500 text-sm">Enable or disable dark mode for better visibility.</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              darkMode ? "bg-blue-600" : "bg-gray-300"
            }`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                darkMode ? "translate-x-6" : "translate-x-0"
              } transition duration-300`}
            ></div>
          </button>
        </div>

        {/* Notification Settings */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700">Notifications</h3>
            <p className="text-gray-500 text-sm">Enable or disable email and system notifications.</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition ${
              notifications ? "bg-green-500" : "bg-gray-300"
            }`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform ${
                notifications ? "translate-x-6" : "translate-x-0"
              } transition duration-300`}
            ></div>
          </button>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700">Account Settings</h3>
          <p className="text-gray-500 text-sm">Update password and manage security settings.</p>
          <button className="mt-3 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Manage Account
          </button>
        </div>

        {/* Logout Button */}
        <div className="text-right">
          <button className="px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition">
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
