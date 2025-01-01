import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import file CSS

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Login successful!");
    navigate('/dashboard');
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label>Email/Username:</label>
          <input type="text" placeholder="Enter email or username" required />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input type="password" placeholder="Enter password" required />
        </div>
        <button type="submit">Login</button>
      </form>
      <p>
        Belum punya akun?{" "}
        <span
          className="register-link"
          onClick={() => navigate('/register')}
        >
          Buat Akun
        </span>
      </p>
    </div>
  );
};

export default Login;
