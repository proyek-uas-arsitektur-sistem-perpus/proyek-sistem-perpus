import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PengembalianStaff.css';

const PengembalianStaff = () => {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    fetchReturns();
  }, []);

  const fetchReturns = () => {
    axios.get('http://localhost:5000/api/borrowing/returns')
      .then((res) => setReturns(res.data))
      .catch((err) => console.error(err));
  };

  return (
    <div className="pengembalian-staff">
      <h1>Daftar Pengembalian</h1>
      <table className="pengembalian-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Pinjam</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Tanggal Pengembalian</th>
          </tr>
        </thead>
        <tbody>
          {returns.map((item, index) => (
            <tr key={item.id_peminjaman}>
              <td>{index + 1}</td>
              <td>PJ{item.id_peminjaman.toString().padStart(5, '0')}</td>
              <td>{item.id_anggota_perpustakaan}</td>
              <td>{item.nama}</td>
              <td>{new Date(item.tgl_pinjam).toLocaleDateString('id-ID')}</td>
              <td>{new Date(item.tgl_kembali).toLocaleDateString('id-ID')}</td>
              <td>{new Date(item.tgl_pengembalian).toLocaleDateString('id-ID')}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PengembalianStaff;
