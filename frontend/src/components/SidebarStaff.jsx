import React from 'react';
import './SidebarStaff.css'; // Tambahkan CSS untuk styling

const SidebarStaff = () => {
  return (
    <div className="sidebar">
      <h2>PERPUSTAKAAN</h2>
      <ul>
        <li>Dashboard</li>
        <li>Data Pengunjung</li>
        <li>Data Pengguna</li>
        <li>Data</li>
        <li>Transaksi</li>
        <li>Denda</li>
        <li>Atur Perpustakaan</li>
      </ul>
    </div>
  );
};

export default SidebarStaff;
