import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './DendaStaff.css';

const DendaStaff = () => {
  const [penalties, setPenalties] = useState([]);

  useEffect(() => {
    fetchPenalties();
  }, []);

  const fetchPenalties = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/borrowing/penalties');
      setPenalties(response.data);
    } catch (error) {
      console.error('Error fetching penalties:', error);
      alert('Gagal memuat data denda.');
    }
  };

  const handleDeletePenalty = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/penalties/${id}`);
      alert('Denda berhasil dihapus!');
      fetchPenalties();
    } catch (error) {
      console.error('Error deleting penalty:', error);
      alert('Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="denda-container">
      <h1>Data Denda</h1>
      <table className="denda-table">
        <thead>
          <tr>
            <th>No</th>
            <th>ID Denda</th>
            <th>ID Peminjaman</th>
            <th>ID Anggota</th>
            <th>Nama</th>
            <th>Tanggal Denda</th>
            <th>Jumlah Denda</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {penalties.map((penalty, index) => (
            <tr key={penalty.id_denda}>
              <td>{index + 1}</td>
              <td>{penalty.id_denda}</td>
              <td>{penalty.id_peminjaman}</td>
              <td>{penalty.id_anggota_perpustakaan}</td>
              <td>{penalty.nama}</td>
              <td>{new Date(penalty.tanggal_denda).toLocaleDateString('id-ID')}</td>
              <td>Rp{penalty.jumlah_denda.toLocaleString()}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePenalty(penalty.id_denda)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DendaStaff;
