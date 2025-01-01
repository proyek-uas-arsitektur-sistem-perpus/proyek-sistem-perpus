import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Register.css'; // CSS untuk styling halaman Register

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = (e) => {
    e.preventDefault(); // Mencegah reload halaman
    console.log("Account created:", formData);
    // Setelah membuat akun berhasil, arahkan ke halaman login
    navigate('/');
  };

  return (
    <div className="register-container">
      <h1>Buat Akun</h1>
      <form onSubmit={handleRegister}>
        <div className="form-group">
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Masukkan username"
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Masukkan email"
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Masukkan password"
            required
          />
        </div>
        <button type="submit">Buat Akun</button>
      </form>
    </div>
  );
};

export default Register;
