import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DendaStaff.css';

const DendaStaff = () => {
  const [penalties, setPenalties] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios.get('http://localhost:5000/api/borrowing')
      .then((res) => setPenalties(res.data.filter((b) => b.denda > 0)))
      .catch((err) => console.error(err));
  };

  const handlePayment = (id) => {
    axios.put(`http://localhost:5000/api/borrowing/${id}/pay`, { status_denda: true })
      .then(() => {
        alert('Denda berhasil dibayar!');
        fetchData();
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="denda-staff">
      <h1>Data Denda</h1>
      <table className="denda-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No Pinjam</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Pinjam</th>
            <th>Balik</th>
            <th>Denda</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {penalties.map((penalty, index) => (
            <tr key={penalty.id_peminjaman}>
              <td>{index + 1}</td>
              <td>PJ{penalty.id_peminjaman.toString().padStart(5, '0')}</td>
              <td>{penalty.id_anggota_perpustakaan}</td>
              <td>{penalty.nama || 'N/A'}</td>
              <td>{penalty.tgl_pinjam}</td>
              <td>{penalty.tgl_kembali}</td>
              <td>Rp{penalty.denda}</td>
              <td>
                <button onClick={() => handlePayment(penalty.id_peminjaman)}>Bayar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DendaStaff;


  