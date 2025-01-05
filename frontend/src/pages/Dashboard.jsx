import React from "react";
import './Dashboard.css'; // Mengimpor file CSS untuk styling Dashboard
import SidebarStaff from '../components/SidebarStaff'; // Mengimpor SidebarStaff
import { useNavigate } from "react-router-dom";


// Komponen utama Dashboard
const Dashboard = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  return (
    <div>
      <SidebarStaff /> {/* Menyisipkan SidebarStaff */}

      <div className="dashboard">
        {/* Header dari Dashboard */}
        <header className="dashboard-header">
          <h1>Dashboard</h1> {/* Judul utama Dashboard */}
          <p>Control Panel</p> {/* Deskripsi singkat tentang dashboard */}
        </header>

        {/* Bagian Cards */}
        <div className="dashboard-cards">
          <div className="card blue">
            <div className="card-content">
              <h3>121</h3>
              <p>Anggota</p>
            </div>
            <i className="fas fa-users card-icon"></i> {/* Ikon Anggota */}
            <div className="card-footer"
            onClick={() => navigate("/data-pengguna")} // Navigasi ke halaman DataPengguna.jsx
              style={{ cursor: "pointer" }} // Tambahkan kursor pointer untuk menunjukkan bahwa bisa diklik
            >
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card teal">
            <div className="card-content">
              <h3>22</h3>
              <p>Jenis Buku</p>
            </div>
            <i className="fas fa-book card-icon"></i> {/* Ikon Buku */}
            <div className="card-footer"
            onClick={() => navigate("/data-buku")} // Navigasi ke halaman DataBuku.jsx
              style={{ cursor: "pointer" }} // Tambahkan kursor pointer untuk menunjukkan bahwa bisa diklik
            >
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card orange">
            <div className="card-content">
              <h3>10</h3>
              <p>Kategori</p>
            </div>
            <i className="fas fa-tags card-icon"></i> {/* Ikon Kategori */}
            <div className="card-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card green">
            <div className="card-content">
              <h3>1</h3>
              <p>Dipinjamkan</p>
            </div>
            <i className="fas fa-hand-holding card-icon"></i> {/* Ikon Dipinjam */}
            <div className="card-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card purple">
            <div className="card-content">
              <h3>1</h3>
              <p>Dikembalikan</p>
            </div>
            <i className="fas fa-undo card-icon"></i> {/* Ikon Dikembalikan */}
            <div className="card-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>

          <div className="card red">
            <div className="card-content">
              <h3>1</h3>
              <p>Denda</p>
            </div>
            <i className="fas fa-money-bill-wave card-icon"></i> {/* Ikon Denda */}
            <div className="card-footer">
              <span>More info</span> <i className="fas fa-arrow-circle-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
