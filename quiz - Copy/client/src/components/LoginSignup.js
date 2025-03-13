// LoginSignup.js
import React, { useState } from 'react';
import { auth } from './firebase'; 
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import '../styles/LoginSignup.css'; 

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(true); // toggle between login and signup
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      if (isLogin) {
        // Logging in
        await signInWithEmailAndPassword(auth, email, password);
      } else {
        // Signing up
        await createUserWithEmailAndPassword(auth, email, password);
      }
      // After successful login/signup, redirect to quiz
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-container">
         <div className="auth-box">
      <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="auth-form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password (min 6 characters)"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">{isLogin ? 'Login' : 'Sign Up'}</button>
      </form>
      <button className="toggle-btn" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? "Don't have an account? Sign Up" : "Already have an account? Login"}
      </button>
      </div>
    </div>
  );
};

export default LoginSignup;
