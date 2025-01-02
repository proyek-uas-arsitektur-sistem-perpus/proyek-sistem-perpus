import { useState } from "react";
import "./SidebarStaff.css"; // Tambahkan CSS untuk styling
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faUser,
  faBook,
  faExchangeAlt,
  faMoneyBill,
  faClipboardList,
  faCogs,
  faChevronDown,
  faSignOutAlt,
  faUserCircle, // Tambahkan ikon untuk Profile Pengguna
} from "@fortawesome/free-solid-svg-icons";

const SidebarStaff = () => {
  // State untuk dropdown
  const [showDataDropdown, setShowDataDropdown] = useState(false);
  const [showTransaksiDropdown, setShowTransaksiDropdown] = useState(false);
  const [showStockDropdown, setShowStockDropdown] = useState(false);

  return (
    <div className="sidebar">
      <h2>PERPUSTAKAAN</h2>
      <ul>
        {/* Profile Pengguna */}
        <li>
          <FontAwesomeIcon icon={faUserCircle} className="icon" /> Profile Pengguna
        </li>

        {/* Dashboard */}
        <li>
          <FontAwesomeIcon icon={faTachometerAlt} className="icon" /> Dashboard
        </li>

        {/* Data Pengguna */}
        <li>
          <FontAwesomeIcon icon={faUser} className="icon" /> Data Pengguna
        </li>

        {/* Data dengan Dropdown */}
        <li
          onClick={() => setShowDataDropdown(!showDataDropdown)}
          className={`dropdown ${showDataDropdown ? "open" : ""}`}
        >
          <FontAwesomeIcon icon={faBook} className="icon" /> Data
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          {showDataDropdown && (
            <ul className="dropdown-menu">
              <li>Data Buku</li>
              <li>Kategori</li>
              <li>Rak Buku</li>
            </ul>
          )}
        </li>

        {/* Transaksi dengan Dropdown */}
        <li
          onClick={() => setShowTransaksiDropdown(!showTransaksiDropdown)}
          className={`dropdown ${showTransaksiDropdown ? "open" : ""}`}
        >
          <FontAwesomeIcon icon={faExchangeAlt} className="icon" /> Transaksi
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          {showTransaksiDropdown && (
            <ul className="dropdown-menu">
              <li>Peminjaman</li>
              <li>Pengembalian</li>
            </ul>
          )}
        </li>

        {/* Denda */}
        <li>
          <FontAwesomeIcon icon={faMoneyBill} className="icon" /> Denda
        </li>

        {/* Stock Opname dengan Dropdown */}
        <li
          onClick={() => setShowStockDropdown(!showStockDropdown)}
          className={`dropdown ${showStockDropdown ? "open" : ""}`}
        >
          <FontAwesomeIcon icon={faClipboardList} className="icon" /> Stock Opname
          <FontAwesomeIcon icon={faChevronDown} className="chevron-icon" />
          {showStockDropdown && (
            <ul className="dropdown-menu">
              <li>Input Data Buku Masuk</li>
              <li>Input Data Buku Keluar</li>
              <li>Laporan Stock Buku</li>
            </ul>
          )}
        </li>

        {/* Logout */}
        <li className="logout">
          <FontAwesomeIcon icon={faSignOutAlt} className="icon" /> Logout
        </li>
      </ul>
    </div>
  );
};

export default SidebarStaff;
