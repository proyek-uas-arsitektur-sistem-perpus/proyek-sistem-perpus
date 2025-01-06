import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PengembalianStaff.css';

const PengembalianStaff = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/borrowing')
      .then((res) => setBorrowings(res.data.filter((b) => !b.status_kembali)))
      .catch((err) => console.error(err));
  };

  const handleReturn = (id) => {
    axios.put(`http://localhost:5000/api/borrowing/${id}/return`, { tgl_pengembalian: new Date() })
      .then(() => {
        alert('Buku berhasil dikembalikan!');
        fetchData();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="pengembalian-staff">
      <h1>Pengembalian Buku</h1>
      <table className="pengembalian-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Pinjam</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Pinjam</th>
            <th>Balik</th>
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
              <td>
                <button onClick={() => handleReturn(borrow.id_peminjaman)}>Kembalikan</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PengembalianStaff;
