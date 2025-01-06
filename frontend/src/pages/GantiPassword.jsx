import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./GantiPassword.css";

const GantiPassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Password baru dan konfirmasi password tidak cocok.");
    } else {
      alert("Password berhasil diubah!");
      navigate("/login");
    }
  };

  const handleBack = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
  };

  return (
    <div className="ganti-password-page">
      <div className="ganti-password-container">
        <h1>GANTI PASSWORD</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <input
              type="password"
              name="currentPassword"
              placeholder="Password Lama"
              value={passwords.currentPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="newPassword"
              placeholder="Password Baru"
              value={passwords.newPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="input-group">
            <input
              type="password"
              name="confirmPassword"
              placeholder="Konfirmasi Password Baru"
              value={passwords.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-group">
            <button type="submit" className="action-button">
              Ganti Password
            </button>
            <button type="button" className="action-button back-button" onClick={handleBack}>
              Kembali
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default GantiPassword;
