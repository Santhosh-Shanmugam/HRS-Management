import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ username: "", password: "", role: "employee" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const handleSignup = (e) => {
    e.preventDefault();

    if (!user.username || !user.password) {
      setError("All fields are required.");
      return;
    }

    // Store user in localStorage (Replace with a backend API call)
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/login");
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h2 className="text-2xl font-bold mb-4 text-center">Signup</h2>

        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

        <form onSubmit={handleSignup}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={user.username}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={user.password}
            onChange={handleChange}
            className="w-full p-2 border rounded mb-3"
          />
          <select name="role" value={user.role} onChange={handleChange} className="w-full p-2 border rounded mb-4">
            <option value="admin">Admin</option>
            <option value="hr">HR</option>
            <option value="employee">Employee</option>
          </select>
          <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
