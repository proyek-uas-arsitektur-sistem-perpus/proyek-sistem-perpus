import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DendaStaff.css';

const DendaStaff = () => {
  const [penalties, setPenalties] = useState([]);

  useEffect(() => {
    fetchPenalties();
  }, []);

  const fetchPenalties = () => {
    axios.get('http://localhost:5000/api/borrowing/penalties')
      .then((res) => setPenalties(res.data))
      .catch((err) => console.error(err));
  };

  const handleDeletePenalty = (id) => {
    axios.delete(`http://localhost:5000/api/borrowing/${id}/penalty`)
      .then(() => {
        alert('Denda berhasil dihapus!');
        fetchPenalties();
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
            <th>Tanggal Denda</th>
            <th>Jumlah</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {penalties.map((penalty, index) => (
            <tr key={penalty.id_denda}>
              <td>{index + 1}</td>
              <td>PJ{penalty.id_peminjaman.toString().padStart(5, '0')}</td>
              <td>{penalty.id_anggota_perpustakaan}</td>
              <td>{penalty.nama}</td>
              <td>{new Date(penalty.tanggal_denda).toLocaleDateString('id-ID')}</td>
              <td>Rp{penalty.jumlah_denda.toLocaleString()}</td>
              <td>
                <button className="btn-delete" onClick={() => handleDeletePenalty(penalty.id_denda)}>Hapus</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DendaStaff;
