import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TambahDataPengguna.css";

const TambahPengguna = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nama_anggota: "",
    nik: "",
    email: "",
    no_telepon: "",
    alamat: "",
  });

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Fungsi untuk mengirim data ke API
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/user/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert("Pengguna berhasil ditambahkan!");
          navigate("/data-pengguna"); // Kembali ke halaman data pengguna
        } else {
          alert("Gagal menambahkan pengguna. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error adding user:", error);
        alert("Terjadi kesalahan saat menambahkan pengguna.");
      });
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate("/data-pengguna");
  };

  return (
    <div className="form-container">
      <h2>Tambah Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="nama_anggota"
          placeholder="Nama"
          value={formData.nama_anggota}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="nik"
          placeholder="NIK"
          value={formData.nik}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="no_telepon"
          placeholder="Nomor Telepon"
          value={formData.no_telepon}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="alamat"
          placeholder="Alamat"
          value={formData.alamat}
          onChange={handleChange}
          required
        />
        <div className="button-group">
          <button type="submit" className="action-button add">
            Tambah
          </button>
          <button type="button" className="action-button back" onClick={handleBack}>
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahPengguna;