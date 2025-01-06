import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './PeminjamanStaff.css';

const PeminjamanStaff = () => {
  const [borrowings, setBorrowings] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchBorrowings();
  }, []);

  const fetchBorrowings = () => {
    axios.get('http://localhost:5000/api/borrowing')
      .then((res) => setBorrowings(res.data))
      .catch((err) => console.error(err));
  };

  const handleReturn = (id) => {
    axios.put(`http://localhost:5000/api/borrowing/${id}/return`, { tanggal_kembali: new Date().toISOString().split('T')[0] })
      .then(() => {
        alert('Buku berhasil dikembalikan!');
        fetchBorrowings(); // Refresh data setelah pengembalian
      })
      .catch((err) => console.error(err));
  };

  const handleDetail = (id) => {
    navigate(`/peminjaman-staff/${id}`);
  };

  const handleAddBorrowing = () => {
    navigate('/peminjaman-staff/tambah');
  };

  return (
    <div className="peminjaman-staff">
      <h1>Daftar Peminjaman</h1>
      <button className="btn-tambah" onClick={handleAddBorrowing}>Tambah Peminjaman</button>
      <table className="peminjaman-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Pinjam</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Tgl Pinjam</th>
            <th>Tgl Kembali</th>
            <th>Status</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {borrowings.map((borrow, index) => (
            <tr key={borrow.id_peminjaman}>
              <td>{index + 1}</td>
              <td>PJ{borrow.id_peminjaman.toString().padStart(5, '0')}</td>
              <td>{borrow.id_anggota_perpustakaan}</td>
              <td>{borrow.nama_anggota || 'N/A'}</td>
              <td>{borrow.tgl_pinjam ? new Date(borrow.tgl_pinjam).toLocaleDateString('id-ID') : 'N/A'}</td>
              <td>{borrow.tgl_kembali ? new Date(borrow.tgl_kembali).toLocaleDateString('id-ID') : 'N/A'}</td>
              <td>{borrow.status_kembali ? 'Kembali' : 'Dipinjam'}</td>
              <td>
                <button className="btn-detail" onClick={() => handleDetail(borrow.id_peminjaman)}>👁️</button>
                <button className="btn-kembalikan" onClick={() => handleReturn(borrow.id_peminjaman)}>Kembalikan</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeminjamanStaff;
