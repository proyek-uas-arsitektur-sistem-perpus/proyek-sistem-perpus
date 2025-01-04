import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import "./ProfilePengguna.css"; // Pastikan Anda memiliki file CSS untuk styling

const ProfilePengguna = () => {
  const [formData, setFormData] = useState({
    name: "",
    nim: "",
    phone: "",
    email: "",
  });

  const navigate = useNavigate(); // Hook untuk navigasi

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Data form:", formData);
  };

  const handleBack = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
  };

  return (
    <div className="profile-form">
      <h2>Profile Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Nama:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>NIM:</label>
          <input
            type="text"
            name="nim"
            value={formData.nim}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>No Telepon:</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Simpan</button>
      </form>

      {/* Tombol Kembali */}
      <button className="back-button" onClick={handleBack}>
        Kembali
      </button>
    </div>
  );
};

export default ProfilePengguna;
