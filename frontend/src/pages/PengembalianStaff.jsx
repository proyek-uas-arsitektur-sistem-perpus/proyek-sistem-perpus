import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './PengembalianStaff.css';

const PengembalianStaff = () => {
  const [returns, setReturns] = useState([]);

  useEffect(() => {
    fetchReturns();
  }, []);

  const fetchReturns = async () => {
    try {
        const response = await axios.get('http://localhost:5000/api/borrowing/returns'); // URL harus sesuai
        setReturns(response.data);
    } catch (error) {
        console.error('Error fetching returns:', error);
        alert('Gagal memuat data pengembalian.');
    }
};

  const handleAddReturn = async (id_peminjaman) => {
    const tanggal_pengembalian = new Date().toISOString().split('T')[0];
    try {
      await axios.post('http://localhost:5000/api/returns', {
        id_peminjaman,
        tanggal_pengembalian,
      });
      alert('Data pengembalian berhasil ditambahkan!');
      fetchReturns();
    } catch (error) {
      console.error('Error adding return:', error);
      alert('Terjadi kesalahan, coba lagi.');
    }
  };

  return (
    <div className="pengembalian-container">
      <h1>Daftar Pengembalian Buku</h1>
      <table className="pengembalian-table">
        <thead>
          <tr>
            <th>No</th>
            <th>ID Peminjaman</th>
            <th>ID Anggota</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Tanggal Pengembalian</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {returns.map((item, index) => (
            <tr key={item.id_pengembalian}>
              <td>{index + 1}</td>
              <td>{item.id_peminjaman}</td>
              <td>{item.id_anggota_perpustakaan}</td>
              <td>{new Date(item.tanggal_pinjam).toLocaleDateString('id-ID')}</td>
              <td>{new Date(item.tanggal_kembali).toLocaleDateString('id-ID')}</td>
              <td>
                {item.tanggal_pengembalian
                  ? new Date(item.tanggal_pengembalian).toLocaleDateString('id-ID')
                  : 'Belum Dikembalikan'}
              </td>
              <td>
                {!item.tanggal_pengembalian && (
                  <button
                    className="btn-return"
                    onClick={() => handleAddReturn(item.id_peminjaman)}
                  >
                    Tambah Pengembalian
                  </button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PengembalianStaff;
