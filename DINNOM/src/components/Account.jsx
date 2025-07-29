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
        <div className="flex items-center justify-center h-72 bg-white">
          <p className="text-gray-700 text-lg">Loading profile...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (error) {
    return (
      <>
        <Navbar />
        <div className="flex items-center justify-center h-72 bg-white">
          <p className="text-red-700 text-lg font-semibold">{error}</p>
        </div>
        <Footer />
      </>
    );
  }

  // Card hover handlers for scaling and shadow
  const handleMouseEnter = (e) => {
    e.currentTarget.style.transform = "scale(1.02)";
    e.currentTarget.style.boxShadow = "0 12px 40px rgba(0, 0, 0, 0.2)";
  };

  const handleMouseLeave = (e) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.boxShadow = "0 8px 24px rgba(0, 0, 0, 0.12)";
  };

  return (
    <>
      <Navbar />
      <main className="flex-grow min-h-screen bg-white px-6 sm:px-12 lg:px-20 py-20 flex flex-col items-center">
        <div
          className="w-full max-w-4xl p-12 rounded-2xl transition-transform duration-300 ease-in-out cursor-default"
          style={{
            backgroundColor: "#ffffff",
            border: "1px solid rgba(0, 0, 0, 0.15)",
            boxShadow: "0 8px 24px rgba(0, 0, 0, 0.12)",
          }}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <h2 className="text-4xl font-extrabold text-black mb-12 tracking-wide select-none text-center">
            Login &amp; Security
          </h2>

          {/* Profile Section */}
          <section className="flex flex-col md:flex-row items-center md:items-start mb-12 md:space-x-12 space-y-8 md:space-y-0">
            <img
              src={user.photoURL && user.photoURL !== "" ? user.photoURL : defaultPhoto}
              alt="Profile"
              className="w-40 h-40 rounded-full border-4 border-black object-cover shadow-md transition-transform duration-300 ease-in-out hover:scale-110 hover:shadow-[0_0_25px_6px_rgba(0,0,0,0.3)]"
            />
            <div className="flex-1">
              <p className="text-3xl font-semibold text-black break-words">{user.displayName || "No Name"}</p>
              <p className="text-gray-800 text-xl mt-3 break-words">{user.email || "No Email"}</p>
            </div>
          </section>

          {/* Name Field */}
          <div className="mb-12 max-w-3xl mx-auto">
            <label className="block text-black font-semibold text-xl mb-4 select-none">Name</label>
            {editMode ? (
              <input
                type="text"
                value={updatedUser.displayName}
                onChange={(e) => setUpdatedUser({ ...updatedUser, displayName: e.target.value })}
                className="w-full p-4 bg-white border border-black rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                placeholder="Enter your name"
                autoFocus
              />
            ) : (
              <div className="flex justify-between items-center mt-2 max-w-3xl mx-auto">
                <span className="text-black text-xl select-text">{user.displayName || "No Name"}</span>
                <AiOutlineEdit
                  className="text-2xl cursor-pointer text-black hover:text-gray-700 transition"
                  onClick={() => setEditMode(true)}
                  title="Edit Name"
                />
              </div>
            )}
          </div>

          {/* Email Field */}
          <div className="mb-12 max-w-3xl mx-auto">
            <label className="block text-black font-semibold text-xl mb-4 select-none">Email</label>
            {editMode ? (
              <input
                type="email"
                value={updatedUser.email}
                onChange={(e) => setUpdatedUser({ ...updatedUser, email: e.target.value })}
                className="w-full p-4 bg-white border border-black rounded-xl text-black placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-black focus:border-black transition"
                placeholder="Enter your email"
              />
            ) : (
              <div className="flex justify-between items-center mt-2 max-w-3xl mx-auto">
                <span className="text-black text-xl select-text">{user.email || "No Email"}</span>
                <AiOutlineEdit
                  className="text-2xl cursor-pointer text-black hover:text-gray-700 transition"
                  onClick={() => setEditMode(true)}
                  title="Edit Email"
                />
              </div>
            )}
          </div>

          {/* Buttons */}
          {editMode && (
            <div className="flex justify-center space-x-8 max-w-3xl mx-auto">
              <button
                className="px-10 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 transition"
                onClick={() => {
                  setEditMode(false);
                  setUpdatedUser({ displayName: user.displayName, email: user.email });
                }}
              >
                Cancel
              </button>
              <button
                className="px-10 py-3 rounded-xl bg-black text-white font-semibold hover:bg-gray-900 shadow-md transition"
                onClick={handleUpdate}
              >
                Save
              </button>
            </div>
          )}
        </div>
      </main>

      <div className="mt-16 bg-white">
        <Footer />
      </div>
    </>
  );
};

export default Account;
