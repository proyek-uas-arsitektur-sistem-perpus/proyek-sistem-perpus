import React from 'react';
import { Link } from 'react-router-dom'; // Mengimpor Link untuk navigasi
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
          {/* Kartu untuk jumlah anggota, dengan ikon 'users' */}
          <div className="card blue">
            <i className="fas fa-users"></i> {/* Ikon pengguna (Anggota) */}
            43 Anggota {/* Menampilkan jumlah anggota */}
          </div>

          {/* Kartu untuk jenis buku, dengan ikon 'book' */}
          <div className="card green">
            <i className="fas fa-book"></i> {/* Ikon buku (Jenis Buku) */}
            5 Jenis Buku {/* Menampilkan jumlah jenis buku */}
          </div>

          {/* Kartu untuk jumlah buku yang dipinjamkan, dengan ikon 'book-reader' */}
          <div className="card purple">
            <i className="fas fa-book-reader"></i> {/* Ikon buku yang dipinjam */}
            2 Dipinjamkan {/* Menampilkan jumlah buku yang dipinjam */}
          </div>

          {/* Kartu untuk jumlah buku yang dikembalikan bulan ini, dengan ikon 'undo-alt' */}
          <div className="card orange">
            <i className="fas fa-undo-alt"></i> {/* Ikon pengembalian buku */}
            10 Dikembalikan (Bulan Ini) {/* Menampilkan jumlah buku yang dikembalikan bulan ini */}
          </div>

          {/* Kartu untuk jumlah denda yang belum dibayar, dengan ikon 'credit-card' */}
          <div className="card red">
            <i className="fas fa-credit-card"></i> {/* Ikon denda */}
            1 Denda {/* Menampilkan jumlah denda yang harus dibayar */}
          </div>
        </div>

        {/* Link untuk Profile Pengguna */}
        <div className="profile-link">
          <Link to="/dashboard/profile">
            <div className="profile-image">
              <img src="Profile.jpg" alt="Profile" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; // Menyimpan komponen Dashboard agar bisa digunakan di bagian lain aplikasi
