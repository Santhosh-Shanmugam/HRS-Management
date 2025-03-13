import React, { useState, useEffect } from "react";

const Recruitment = () => {
  // Sample job listings data
  const [jobListings, setJobListings] = useState([]);
  const [newJob, setNewJob] = useState({ title: "", department: "", location: "", status: "Open" });

  // Fetch job postings from backend (Placeholder)
  useEffect(() => {
    // Replace with actual API call
    setJobListings([
      { id: 1, title: "Software Engineer", department: "IT", location: "Chennai", status: "Open" },
      { id: 2, title: "HR Manager", department: "HR", location: "Bangalore", status: "Closed" },
    ]);
  }, []);

  // Handle input change
  const handleInputChange = (e) => {
    setNewJob({ ...newJob, [e.target.name]: e.target.value });
  };

  // Add new job
  const handleSubmit = (e) => {
    e.preventDefault();
    setJobListings([...jobListings, { ...newJob, id: Date.now() }]);
    setNewJob({ title: "", department: "", location: "", status: "Open" });
  };

  // Delete job
  const handleDelete = (id) => {
    setJobListings(jobListings.filter((job) => job.id !== id));
  };

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-gray-800 mb-4">Recruitment</h2>
      <p className="text-gray-600 mb-6">Manage job postings and hiring processes.</p>

      {/* Add Job Posting Form */}
      <div className="bg-white p-6 rounded-lg shadow-md mb-6">
        <h3 className="text-lg font-semibold mb-4">Add Job Opening</h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            name="title"
            placeholder="Enter Job Title"
            value={newJob.title}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Enter Department"
            value={newJob.department}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <input
            type="text"
            name="location"
            placeholder="Enter Location"
            value={newJob.location}
            onChange={handleInputChange}
            className="w-full p-2 border rounded-md"
            required
          />
          <button type="submit" className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700 transition">
            Add Job
          </button>
        </form>
      </div>

      {/* Job Listings Table */}
      <div className="bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold mb-4">Job Openings</h3>
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Title</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Location</th>
              <th className="p-2 border">Status</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {jobListings.map((job) => (
              <tr key={job.id} className="text-center">
                <td className="p-2 border">{job.title}</td>
                <td className="p-2 border">{job.department}</td>
                <td className="p-2 border">{job.location}</td>
                <td className={`p-2 border font-semibold ${job.status === "Open" ? "text-green-600" : "text-red-600"}`}>
                  {job.status}
                </td>
                <td className="p-2 border flex justify-center space-x-2">
                  <button onClick={() => handleDelete(job.id)} className="bg-gray-500 text-white px-3 py-1 rounded-md">
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

export default Recruitment;
