import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeminjamanStaff.css';

const PeminjamanStaff = () => {
  const [borrowings, setBorrowings] = useState([]);
  const [filters, setFilters] = useState({
    bulan: '',
    tahun: '',
  });

  useEffect(() => {
    fetchBorrowings();
  }, []);

  const fetchBorrowings = () => {
    axios.get('http://localhost:5000/api/borrowing')
      .then((res) => setBorrowings(res.data))
      .catch((err) => console.error(err));
  };

  const handleFilterChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  const handleSearch = () => {
    // Implement API filter if backend supports it
    console.log('Filters applied:', filters);
  };

  const handleReturn = (id) => {
    axios.put(`http://localhost:5000/api/borrowing/${id}/return`, { tgl_pengembalian: new Date() })
      .then(() => {
        alert('Buku berhasil dikembalikan!');
        fetchBorrowings();
      })
      .catch((err) => console.error(err));
  };

  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/api/borrowing/${id}`)
      .then(() => {
        alert('Data peminjaman berhasil dihapus!');
        fetchBorrowings();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="peminjaman-staff">
      <h1>Data Peminjaman Buku</h1>
      <div className="filter-section">
        <select name="bulan" onChange={handleFilterChange}>
          <option value="">Pilih Bulan</option>
          <option value="01">Januari</option>
          <option value="02">Februari</option>
          {/* Tambahkan opsi bulan lainnya */}
        </select>
        <select name="tahun" onChange={handleFilterChange}>
          <option value="">Pilih Tahun</option>
          <option value="2024">2024</option>
          <option value="2023">2023</option>
          {/* Tambahkan opsi tahun lainnya */}
        </select>
        <button onClick={handleSearch}>Cari</button>
      </div>
      <table className="peminjaman-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Pinjam</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Pinjam</th>
            <th>Balik</th>
            <th>Status</th>
            <th>Denda</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {borrowings.map((borrow, index) => (
            <tr key={borrow.id_peminjaman}>
              <td>{index + 1}</td>
              <td>PJ{borrow.id_peminjaman.toString().padStart(5, '0')}</td>
              <td>{borrow.id_anggota_perpustakaan}</td>
              <td>{borrow.nama || 'N/A'}</td>
              <td>{borrow.tgl_pinjam}</td>
              <td>{borrow.tgl_kembali}</td>
              <td>{borrow.status_kembali ? 'Kembali' : 'Dipinjam'}</td>
              <td>{borrow.denda ? `Rp${borrow.denda}` : 'Rp0,-'}</td>
              <td>
                <button onClick={() => handleReturn(borrow.id_peminjaman)}>Kembalikan</button>
                <button onClick={() => handleDelete(borrow.id_peminjaman)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeminjamanStaff;
