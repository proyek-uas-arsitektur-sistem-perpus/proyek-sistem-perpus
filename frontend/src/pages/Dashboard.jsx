import React from "react";
import './Dashboard.css'; // Mengimpor file CSS untuk styling Dashboard
import SidebarStaff from '../components/SidebarStaff'; // Mengimpor SidebarStaff

// Komponen utama Dashboard
const Dashboard = () => {
  return (
    <div>
      <SidebarStaff /> {/* Menyisipkan SidebarStaff */}

      <div className="dashboard">
        {/* Header dari Dashboard */}
        <header className="dashboard-header">
          <h1>Dashboard</h1> {/* Judul utama Dashboard */}
          <p>Control Panel</p> {/* Deskripsi singkat tentang dashboard */}
        </header>

        {/* Bagian kartu informasi */}
        <div className="dashboard-cards">
          {/* Kartu untuk jumlah anggota */}
          <div className="card blue">
            <i className="fas fa-users"></i> {/* Ikon pengguna (Anggota) */}
            43 Anggota
          </div>

          {/* Kartu untuk jenis buku */}
          <div className="card green">
            <i className="fas fa-book"></i> {/* Ikon buku (Jenis Buku) */}
            5 Jenis Buku
          </div>

          {/* Kartu untuk jumlah buku yang dipinjamkan */}
          <div className="card purple">
            <i className="fas fa-book-reader"></i> {/* Ikon buku yang dipinjam */}
            2 Dipinjamkan
          </div>

          {/* Kartu untuk jumlah buku yang dikembalikan bulan ini */}
          <div className="card orange">
            <i className="fas fa-undo-alt"></i> {/* Ikon pengembalian buku */}
            10 Dikembalikan (Bulan Ini)
          </div>

          {/* Kartu untuk jumlah denda yang belum dibayar */}
          <div className="card red">
            <i className="fas fa-credit-card"></i> {/* Ikon denda */}
            1 Denda
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
