import React from "react";
import { useNavigate } from "react-router-dom";
import "./TambahDataPengguna.css";

const TambahPengguna = () => {
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Pengguna berhasil ditambahkan!");
    navigate("/data-pengguna"); // Kembali ke halaman data pengguna
  };

  return (
    <div className="form-container">
      <h2>Tambah Pengguna</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Nama" required />
        <input type="text" placeholder="NIK" required />
        <input type="email" placeholder="Email" required />
        <input type="text" placeholder="Nomor Telepon" required />
        <input type="text" placeholder="Alamat" required />
        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default TambahPengguna;
