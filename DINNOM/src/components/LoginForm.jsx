import React, { useState } from 'react';
import { Link,useNavigate } from 'react-router-dom';
import Particles from './Particles';
import Tilt from 'react-parallax-tilt';
import { auth, provider, signInWithPopup } from '../firebase';
import { useAuth } from '../context/AuthContext';

const LoginForm = () => {
  const [phone, setPhone] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate(); // This line was duplicated

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Logging in with phone: ${phone}`);
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;

      // 1. Get the idToken from Firebase to send to the backend
      const idToken = await firebaseUser.getIdToken();

      // 2. Send the token to your backend
      const response = await fetch('http://localhost:5050/api/auth/google', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Authentication failed on the server.');
      }

      // 3. Get your custom app token and user data from your backend
      const { token: appToken, user: userData } = await response.json();
      console.log('User data received from backend:', userData); // DEBUG: Check if photoURL is in the user object
      login(userData, appToken);
      navigate('/');
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-black">
      {/* Particles Background */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Particles
          particleColors={["#ffffff", "#ffffff"]}
          particleCount={350}
          particleSpread={5}
          speed={0.05}
          particleBaseSize={100}
          moveParticlesOnHover={true}
          alphaParticles={true}
          disableRotation={false}
        />
      </div>

      {/* Tilted Login Card */}
      <div className="relative z-10 flex justify-center items-center min-h-screen px-4 pointer-events-none">
        <Tilt tiltMaxAngleX={10} tiltMaxAngleY={10} glareEnable={true} glareMaxOpacity={0.2} className="pointer-events-auto">
          <div className="bg-white/10 backdrop-blur-md border border-white/30 shadow-2xl p-10 rounded-3xl w-[22rem] text-white">
            <h2 className="text-center font-semibold text-2xl mb-6">
              Login with <span className="font-bold">Your Brand</span>
            </h2>

            <div className="flex border border-white/40 rounded mb-6 overflow-hidden">
              <button className="w-1/2 py-2 bg-white/10 hover:bg-white/20 transition font-medium border-r border-white/30">LOGIN</button>
              <button className="w-1/2 py-2 bg-white/10 hover:bg-white/20 transition font-medium">REGISTER</button>
            </div>

            <div className="flex justify-between mb-4 gap-2">
              <button className="flex-1 border border-white/30 rounded px-4 py-2 flex items-center justify-center bg-white/5 hover:bg-white/10 transition">
                <img src="https://img.icons8.com/ios-filled/24/ffffff/facebook-new.png" alt="fb" className="mr-2" />
                Facebook
              </button>
              <button
                type="button"
                onClick={handleGoogleLogin}
                className="flex-1 border border-white/30 rounded px-4 py-2 flex items-center justify-center bg-white/5 hover:bg-white/10 transition"
              >
                <img src="https://img.icons8.com/ios-filled/24/ffffff/google-logo.png" alt="google" className="mr-2" />
                Google
              </button>
            </div>

            <div className="text-center text-sm text-white/70 mb-4">— OR —</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                placeholder="Enter Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full border border-white/30 rounded px-4 py-2 bg-transparent text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded font-semibold hover:bg-black hover:text-white border border-white transition"
              >
                PROCEED
              </button>
              <Link
                to="/"
                className="w-full block py-2 rounded font-semibold border border-white bg-white text-black hover:bg-black hover:text-white transition text-center"
                style={{ textDecoration: "none" }}
              >
                Go back to Home
              </Link>
            </form>

            <div className="mt-4 text-sm text-center text-white/70">
              New User? <a href="#" className="text-white underline font-medium">Create Account</a>
            </div>
          </div>
        </Tilt>
      </div>
    </div>
  );
};

export default LoginForm;