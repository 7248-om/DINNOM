import React, { useState } from 'react';

const LoginForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with phone: ${phone}`);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center">
      <div className="bg-black p-8 rounded shadow-md w-96 border border-white">
        <h2 className="text-center font-semibold text-lg mb-4 text-white">
          Login with <span className="text-white font-bold">Your Brand</span>
        </h2>

        <div className="flex border rounded overflow-hidden mb-6 border-white">
          <button className="w-1/2 py-2 bg-black text-white font-medium border-r border-white">LOGIN</button>
          <button className="w-1/2 py-2 bg-black text-white font-medium">REGISTER</button>
        </div>

        <div className="flex justify-between mb-4">
          <button className="border rounded px-4 py-2 flex items-center w-1/2 mr-2 border-white text-white bg-black">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/facebook-new.png"
              alt="fb"
              className="w-5 h-5 mr-2"
            />
            Facebook
          </button>
          <button className="border rounded px-4 py-2 flex items-center w-1/2 ml-2 border-white text-white bg-black">
            <img
              src="https://img.icons8.com/ios-filled/50/ffffff/google-logo.png"
              alt="google"
              className="w-5 h-5 mr-2"
            />
            Google
          </button>
        </div>

        <div className="text-center text-sm text-white mb-3">— OR —</div>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            className="w-full border rounded px-4 py-2 mb-3 bg-black text-white placeholder-white focus:outline-none focus:ring-2 focus:ring-white"
          />
          <button
            type="submit"
            className="w-full bg-black border border-white text-white py-2 rounded font-semibold hover:bg-white hover:text-black transition"
          >
            PROCEED
          </button>
        </form>

        <div className="mt-4 text-sm text-center text-white">
          New User? <a href="#" className="text-white font-medium underline">Create Account</a>
        </div>
      </div>

      <footer className="mt-8 bg-black text-white w-full text-center py-2 text-lg font-semibold">
        India’s First Monochrome Fashion Revolution
      </footer>
    </div>
  );
};

export default LoginForm;
