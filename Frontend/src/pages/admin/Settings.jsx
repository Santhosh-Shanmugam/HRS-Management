import React, { useState, useEffect } from "react";

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  // Load settings from localStorage
  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem("darkMode"));
    const savedNotifications = JSON.parse(localStorage.getItem("notifications"));
    if (savedDarkMode !== null) setDarkMode(savedDarkMode);
    if (savedNotifications !== null) setNotifications(savedNotifications);
  }, []);

  // Save settings to localStorage
  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));
    localStorage.setItem("notifications", JSON.stringify(notifications));
  }, [darkMode, notifications]);

  // Apply dark mode to the entire page
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="p-6 min-h-screen bg-gray-100 transition-all">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-gray mb-4">Settings</h2>
      <p className="text-gray-600mb-6 pb-6">Configure system preferences and user settings.</p>

      {/* Settings Sections */}
      <div className="bg-white dark:bg-gray-800 p-6 pt-3 rounded-lg shadow-md space-y-6">
        {/* Theme Settings */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Dark Mode</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Enable or disable dark mode.</p>
          </div>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${darkMode ? "bg-blue-600" : "bg-gray-300"}`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform transition duration-300 ${darkMode ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </button>
        </div>

        {/* Notification Settings */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Notifications</h3>
            <p className="text-gray-500 dark:text-gray-400 text-sm">Enable or disable notifications.</p>
          </div>
          <button
            onClick={() => setNotifications(!notifications)}
            className={`w-12 h-6 flex items-center rounded-full p-1 transition duration-300 ${notifications ? "bg-green-500" : "bg-gray-300"}`}
          >
            <div
              className={`h-4 w-4 bg-white rounded-full shadow-md transform transition duration-300 ${notifications ? "translate-x-6" : "translate-x-0"}`}
            ></div>
          </button>
        </div>

        {/* Account Settings */}
        <div>
          <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">Account Settings</h3>
          <p className="text-gray-500 dark:text-gray-400 text-sm">Update password and manage security settings.</p>
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