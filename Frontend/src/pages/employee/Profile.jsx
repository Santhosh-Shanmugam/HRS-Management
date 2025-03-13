import React, { useState } from "react";

const Profile = () => {
  // Dummy user data (Replace with actual API data)
  const [profile, setProfile] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    department: "Software Engineering",
    role: "Employee",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Handle form changes
  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  // Simulate saving to backend
  const handleSave = () => {
    setIsEditing(false);
    console.log("Profile updated:", profile);
    // TODO: Send data to backend API
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen flex flex-col items-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Profile</h2>
      <p className="text-gray-600 mb-6">View and update your profile details.</p>

      {/* Profile Card */}
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <div className="flex flex-col items-center">
          {/* Profile Picture */}
          <div className="w-24 h-24 bg-gray-300 rounded-full mb-4"></div>

          {/* Profile Info */}
          <div className="w-full">
            <label className="block font-semibold">Name:</label>
            {isEditing ? (
              <input
                type="text"
                name="name"
                value={profile.name}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mb-2"
              />
            ) : (
              <p className="p-2 bg-gray-100 rounded-md">{profile.name}</p>
            )}

            <label className="block font-semibold">Email:</label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                value={profile.email}
                onChange={handleChange}
                className="border p-2 rounded-md w-full mb-2"
              />
            ) : (
              <p className="p-2 bg-gray-100 rounded-md">{profile.email}</p>
            )}

            <label className="block font-semibold">Department:</label>
            <p className="p-2 bg-gray-100 rounded-md">{profile.department}</p>

            <label className="block font-semibold">Role:</label>
            <p className="p-2 bg-gray-100 rounded-md">{profile.role}</p>

            {/* Edit/Save Button */}
            {isEditing ? (
              <button
                onClick={handleSave}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-md w-full hover:bg-green-600"
              >
                Save
              </button>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md w-full hover:bg-blue-600"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
