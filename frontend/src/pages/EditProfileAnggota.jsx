import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./EditProfileAnggota.css";

const EditProfileAnggota = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "Violet",
    nik: "2206080090",
    tanggalLahir: "28/01/2006",
    telepon: "082147296580",
    email: "fauzan1892@codekop.com",
    alamat: "Mars",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Data berhasil diperbarui!");
    navigate("/profile-anggota"); // Navigasi kembali ke halaman Profile Anggota
  };

  const handleBack = () => {
    navigate("/profile-anggota"); // Navigasi kembali ke halaman Profile Anggota
  };

  return (
    <div className="form-container">
      <h2>Edit Profile Anggota</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          placeholder="Nama"
          required
        />
        <input
          type="text"
          name="nik"
          value={formData.nik}
          onChange={handleChange}
          placeholder="NIK"
          required
        />
        <input
          type="text"
          name="tanggalLahir"
          value={formData.tanggalLahir}
          onChange={handleChange}
          placeholder="Tanggal Lahir"
          required
        />
        <input
          type="text"
          name="telepon"
          value={formData.telepon}
          onChange={handleChange}
          placeholder="Telepon"
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
          placeholder="Alamat"
          required
        />
        <div className="button-group">
          <button type="submit" className="action-button save-button">
            Simpan Perubahan
          </button>
          <button type="button" className="action-button back-button" onClick={handleBack}>
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfileAnggota;
