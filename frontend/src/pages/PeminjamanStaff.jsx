import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PeminjamanStaff.css';

const PeminjamanStaff = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(() => {
    fetchBorrowings();
  }, []);

  const fetchBorrowings = () => {
    axios.get('http://localhost:5000/api/borrowing')
      .then((res) => setBorrowings(res.data))
      .catch((err) => console.error(err));
  };

  const handleReturn = (id) => {
    axios.put(`http://localhost:5000/api/borrowing/${id}/return`, { tgl_pengembalian: new Date().toISOString().split('T')[0] })
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
      <h1>Daftar Peminjaman</h1>
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
              <td>{borrow.nama || 'N/A'}</td>
              <td>{new Date(borrow.tgl_pinjam).toLocaleDateString('id-ID')}</td>
              <td>{new Date(borrow.tgl_kembali).toLocaleDateString('id-ID')}</td>
              <td>{borrow.status_kembali ? 'Kembali' : 'Dipinjam'}</td>
              <td>
                <button className="btn-detail">👁️</button>
                <button className="btn-kembalikan" onClick={() => handleReturn(borrow.id_peminjaman)}>Kembalikan</button>
                <button className="btn-delete" onClick={() => handleDelete(borrow.id_peminjaman)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeminjamanStaff;
 