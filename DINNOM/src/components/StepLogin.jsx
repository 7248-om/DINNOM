import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, provider, signInWithPopup } from '../firebase';
import { useAuth } from '../context/AuthContext';
import Stepper from './Stepper';
import styles from './StepLogin.module.css';

const StepLogin = () => {
  const [step, setStep] = useState(0);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleGoogleLogin = async () => {
    setLoading(true);
    try {
      const result = await signInWithPopup(auth, provider);
      const firebaseUser = result.user;
      const idToken = await firebaseUser.getIdToken();

      const response = await fetch('/api/auth/google', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ idToken }),
      });

      if (!response.ok) throw new Error('Authentication failed');

      const { token, user } = await response.json();
      login(user, token);
      setStep(3);
    } catch (error) {
      alert(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (step === 3) {
      const timeout = setTimeout(() => navigate('/'), 2500);
      return () => clearTimeout(timeout);
    }
  }, [step, navigate]);

  const stepLabels = ['Welcome', 'About', 'Login', 'Done'];

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-black via-zinc-900 to-black px-4 sm:px-6 lg:px-12 py-12 sm:py-16 text-white">
      <div className="w-full max-w-5xl border border-white/20 rounded-3xl p-8 sm:p-12 backdrop-blur-2xl bg-white/5 shadow-[0_0_80px_rgba(255,255,255,0.1)]">
        <Stepper steps={stepLabels} activeStep={step} />

        <div className={`min-h-[300px] flex flex-col items-center justify-center text-center space-y-10 ${styles.fadeInUp}`}>
          {step === 0 && (
            <div className="space-y-6">
              <h1 className={`text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight ${styles.fontLux}`}>
                Welcome to <span className={styles.fontLuxSerif}>Noiré</span>
              </h1>
              <p className="text-gray-300 text-base sm:text-lg">A monochrome experience—curated in luxury.</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setStep(1)}
                  className={`px-8 py-3 bg-white text-black text-lg rounded-full font-semibold transition ${styles.glowBtn}`}
                >
                  Enter →
                </button>
              </div>
            </div>
          )}

          {step === 1 && (
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-light">India’s First Monochrome Brand</h2>
              <p className="text-gray-300 text-base sm:text-lg">Click next to begin your journey</p>
              <div className="flex justify-center">
                <button
                  onClick={() => setStep(2)}
                  className={`px-8 py-3 bg-white text-black text-lg rounded-full font-semibold transition ${styles.glowBtn}`}
                >
                  Proceed →
                </button>
              </div>
            </div>
          )}

          {step === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-medium">Luxury, meet simplicity.</h2>
              <div className="flex justify-center">
                <button
                  onClick={handleGoogleLogin}
                  disabled={loading}
                  className={`flex items-center gap-3 px-8 py-3 bg-white text-black text-lg rounded-full font-medium transition ${styles.glowBtn} disabled:opacity-50`}
                >
                  <img src="https://img.icons8.com/ios-filled/24/000000/google-logo.png" alt="Google" />
                  {loading ? 'Authenticating...' : 'Sign in with Google'}
                </button>
              </div>
            </div>
          )}

          {step === 3 && (
            <div className="space-y-6">
              <h2 className="text-4xl sm:text-5xl font-semibold tracking-wide">Logged In</h2>
              <p className="text-gray-300 text-base sm:text-lg">You're being taken to your homepage...</p>
              <div className="flex justify-center mt-6">
                <div className={styles.loader} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StepLogin;
