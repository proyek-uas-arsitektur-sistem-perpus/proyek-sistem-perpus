import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditDataPengguna.css";

const EditPengguna = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama: "Contoh Nama",
    nik: "320123456789",
    email: "contoh@email.com",
    telp: "08123456789",
    alamat: "Contoh Alamat",
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
    alert(`Pengguna dengan ID ${id} berhasil diubah!`);
    navigate("/data-pengguna"); // Kembali ke halaman data pengguna
  };

  const handleBack = () => {
    navigate("/data-pengguna"); // Navigasi kembali ke halaman sebelumnya
  };

  return (
    <div className="form-container">
      <h2>Edit Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama"
          value={formData.nama}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nik"
          value={formData.nik}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="telp"
          value={formData.telp}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="alamat"
          value={formData.alamat}
          onChange={handleChange}
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

export default EditPengguna;
