import React, { useEffect, useState } from "react";
import axios from "axios";
import { AiOutlineEdit } from "react-icons/ai";
import Navbar from "./navbar";
import Footer from "./Footer";

const defaultPhoto = "/images/default-profile.png";

const Account = () => {
  const [user, setUser] = useState({ displayName: "", email: "", photoURL: "" });
  const [editMode, setEditMode] = useState(false);
  const [updatedUser, setUpdatedUser] = useState({ displayName: "", email: "" });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          setError("No auth token found. Please log in.");
          setLoading(false);
          return;
        }

        const res = await axios.get("/api/users/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setUser(res.data);
        setUpdatedUser({
          displayName: res.data.displayName || "",
          email: res.data.email || "",
        });
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch user:", err);
        setError("Failed to load profile. Please try again.");
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleUpdate = async () => {
    try {
      const token = localStorage.getItem("token");
      if (!token) {
        alert("No auth token found. Please log in.");
        return;
      }

      const res = await axios.put(
        "/api/users/me",
        {
          displayName: updatedUser.displayName,
          email: updatedUser.email,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setUser(res.data);
      setEditMode(false);
    } catch (err) {
      console.error("Failed to update profile:", err);
      alert("Error updating profile. Please try again.");
    }
  };

  if (loading) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-64 bg-black">
          <p className="text-gray-400 text-lg">Loading profile...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-64 bg-black">
          <p className="text-red-600 text-lg font-semibold">{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-black py-16 px-4 sm:px-6 lg:px-8 flex justify-center items-start">
        <div
          className="max-w-3xl w-full p-12 rounded-3xl shadow-lg"
          style={{
            backgroundColor: "rgba(20, 20, 20, 0.85)",
            backdropFilter: "blur(8px)",
            border: "1px solid rgba(255, 255, 255, 0.1)",
          }}
        >
          <h2 className="text-4xl font-extrabold text-white mb-10 tracking-wider select-none">
            Login &amp; Security
          </h2>

          {/* Profile Section */}
          <section className="flex items-center mb-12 space-x-12">
            <img
              src={user.photoURL && user.photoURL !== "" ? user.photoURL : defaultPhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-gray-700 object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:shadow-[0_0_20px_5px_rgba(200,200,255,0.5)]"
            />
            <div>
              <p className="text-4xl font-semibold text-gray-300">{user.displayName || "No Name"}</p>
              <p className="text-gray-500 text-xl mt-2">{user.email || "No Email"}</p>
            </div>
          </section>

          {/* Name Field */}
          <div className="mb-10">
            <label className="block text-gray-400 font-semibold text-xl mb-3 select-none">Name</label>
            {editMode ? (
              <input
                type="text"
                value={updatedUser.displayName}
                onChange={(e) => setUpdatedUser({ ...updatedUser, displayName: e.target.value })}
                className="w-full p-4 bg-transparent border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 transition"
                placeholder="Enter your name"
                autoFocus
              />
            ) : (
              <div className="flex justify-between items-center mt-2">
                <span className="text-white text-xl select-text">{user.displayName || "No Name"}</span>
                <AiOutlineEdit
                  className="text-3xl cursor-pointer text-gray-400 hover:text-indigo-500 transition"
                  onClick={() => setEditMode(true)}
                  title="Edit Name"
                />
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-10">
            <label className="block text-gray-400 font-semibold text-xl mb-3 select-none">Email</label>
            {editMode ? (
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                className="w-full p-4 bg-transparent border border-gray-600 rounded-2xl text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-indigo-500 transition"
                placeholder="Enter your email"
              />
            ) : (
              <div className="flex justify-between items-center mt-2">
                <span className="text-white text-xl select-text">{user.email || "No Email"}</span>
                <AiOutlineEdit
                  className="text-3xl cursor-pointer text-gray-400 hover:text-indigo-500 transition"
                  onClick={() => setEditMode(true)}
                  title="Edit Email"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          {editMode && (
            <div className="flex justify-end space-x-6">
              <button
                className="px-8 py-3 rounded-3xl bg-gray-700 text-gray-300 font-semibold hover:bg-gray-600 transition"
                onClick={() => {
                  setEditMode(false);
                  setUpdatedUser({ displayName: user.displayName, email: user.email });
                }}
              >
                Cancel
              </button>
              <button
                className="px-8 py-3 rounded-3xl bg-indigo-600 text-white font-semibold hover:bg-indigo-700 shadow-lg transition"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </main>

      <div className="mt-20 bg-black">
        <Footer />
      </div>
    </>
  );
};

export default Account;
