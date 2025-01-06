import React from "react";
import './Dashboardpengguna.css'; // Mengimpor file CSS untuk styling Dashboard Pengguna
import SidebarPengguna from "../components/SidebarPengguna";
import { useNavigate } from "react-router-dom";


// Komponen utama Dashboard Pengguna
const Dashboardpengguna = () => {
    const navigate = useNavigate(); // Inisialisasi navigate
  return (
    <div>
      <SidebarPengguna /> {/* Menyisipkan SidebarStaff */}

      <div className="dashboardpengguna">
        {/* Header dari Dashboard Pengguna */}
        <header className="dashboardpengguna-header">
          <h1>Dashboard Pengguna</h1> {/* Judul utama Dashboard Pengguna */}
          <h3>Selamat datang di panel kontrol pengguna</h3> {/* Deskripsi singkat tentang dashboard */}
        </header>

        {/* Bagian Cards */}
        <div className="dashboardpengguna-cards">
          <div className="card-pengguna blue-pengguna">
            <div className="card-pengguna-content">
              <h3>Cari Buku</h3>
              <p>Temukan buku yang Anda inginkan</p>
            </div>
            <i className="fas fa-search card-pengguna-icon"></i> {/* Ikon Cari Buku */}
            <div className="card-pengguna-footer"
            onClick={() => navigate("/cari-buku")} // Navigasi ke halaman CariBuku.jsx
              style={{ cursor: "pointer" }} // Tambahkan kursor pointer untuk menunjukkan bahwa bisa diklik
            >
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card-pengguna teal-pengguna">
            <div className="card-pengguna-content">
              <h3>Transaksi</h3>
              <p>Lihat riwayat transaksi Anda</p>
            </div>
            <i className="fas fa-history card-pengguna-icon"></i> {/* Ikon Transaksi */}
            <div className="card-pengguna-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card-pengguna orange-pengguna">
            <div className="card-pengguna-content">
              <h3>Profil Anggota</h3>
              <p>Kelola informasi profil Anda</p>
            </div>
            <i className="fas fa-user card-pengguna-icon"></i> {/* Ikon Profil Anggota */}
            <div className="card-pengguna-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboardpengguna;
