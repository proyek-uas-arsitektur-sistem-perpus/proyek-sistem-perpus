import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate untuk navigasi
import "./SidebarPengguna.css"; // Ganti dengan file CSS yang sesuai
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUserCircle, // Ikon untuk Profile Anggota
  faSearch, // Ikon untuk Cari Buku
  faExchangeAlt, // Ikon untuk Transaksi
  faSignOutAlt, // Ikon untuk Logout
} from "@fortawesome/free-solid-svg-icons";

const SidebarPengguna = () => {
  const navigate = useNavigate(); // Hook untuk navigasi

  const handleLogout = () => {
    // Hapus token atau data autentikasi lainnya
    localStorage.removeItem("authToken"); // Menghapus token dari localStorage (atau sessionStorage)
    alert("Anda telah berhasil logout!"); // Tambahkan alert sebagai konfirmasi logout
    navigate("/login"); // Setelah logout, arahkan ke halaman login
  };

  const handleProfileClick = () => {
    navigate("/profile"); // Navigasi ke halaman Profile Pengguna
  };

  return (
    <div className="sidebarpengguna">
      <h2>PERPUSTAKAAN</h2>
      <ul>
        {/* Profil Anggota */}
        <li onClick={handleProfileClick}>
          <FontAwesomeIcon icon={faUserCircle} className="icon" /> Profil Anggota
        </li>

        {/* Cari Buku */}
        <li onClick={() => navigate("/cari-buku")}>
          <FontAwesomeIcon icon={faSearch} className="icon" /> Cari Buku
        </li>

        {/* Transaksi */}
        <li onClick={() => navigate("/transaksi")}>
          <FontAwesomeIcon icon={faExchangeAlt} className="icon" /> Transaksi
        </li>

        {/* Logout */}
        <li className="logout" onClick={handleLogout}>
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default SidebarPengguna;
