import React, { useState } from 'react';
import Particles from './Particles';

const LoginForm = () => {
  const [phone, setPhone] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with phone: ${phone}`);
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black text-white">
      {/* Background Particles Layer */}
      <div className="absolute inset-0 z-0">
        <Particles
          particleColors={['#ffffff', '#ffffff']}
          particleCount={350}
          particleSpread={5}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Login Form Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4">
        <div className="bg-black bg-opacity-70 p-8 rounded shadow-md w-96 border border-white">
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
      </div>
    </div>
  );
};

export default LoginForm;
