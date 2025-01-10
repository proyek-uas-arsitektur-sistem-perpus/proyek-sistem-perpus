import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./HapusDataPengguna.css";

const HapusDataPengguna = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const handleDelete = () => {
    fetch(`http://localhost:5000/api/user/users/${id}`, {
      method: "DELETE",
    })
      .then((response) => {
        if (response.ok) {
          alert(`Pengguna dengan ID ${id} berhasil dihapus.`);
          navigate("/data-pengguna"); // Kembali ke halaman data pengguna
        } else {
          alert("Gagal menghapus data pengguna. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error deleting user:", error);
        alert("Terjadi kesalahan saat menghapus data pengguna.");
      });
  };

  const handleCancel = () => {
    navigate("/data-pengguna"); // Kembali ke halaman data pengguna tanpa menghapus
  };

  return (
    <div className="hapus-container">
      <h2>Konfirmasi Hapus</h2>
      <p>Apakah Anda yakin ingin menghapus pengguna dengan ID {id}?</p>
      <div className="button-group">
        <button className="action-button delete" onClick={handleDelete}>
          Hapus
        </button>
        <button className="action-button cancel" onClick={handleCancel}>
          Batal
        </button>
      </div>
    </div>
  );
};

export default HapusDataPengguna;