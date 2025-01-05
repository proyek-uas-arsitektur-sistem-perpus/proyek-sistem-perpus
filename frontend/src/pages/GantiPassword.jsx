import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Gunakan useNavigate untuk navigasi
import "./GantiPassword.css";

const GantiPassword = () => {
  const [passwords, setPasswords] = useState({
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  const navigate = useNavigate(); // Inisialisasi fungsi navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPasswords({
      ...passwords,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi: cek apakah password baru dan konfirmasi cocok
    if (passwords.newPassword !== passwords.confirmPassword) {
      alert("Password baru dan konfirmasi password tidak cocok.");
    } else {
      alert("Password berhasil diubah!");
      navigate("/login"); // Navigasi ke halaman login
    }
  };

  return (
    <div className="ganti-password-page">
      <div className="ganti-password-container">
        <h1>UBAH PASSWORD</h1>
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
          <button type="submit">Ubah Password</button>
        </form>
      </div>
    </div>
  );
};

export default GantiPassword;
