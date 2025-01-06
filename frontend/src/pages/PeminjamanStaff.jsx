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

  const fetchBorrowings = async () => {
    try {
      const response = await axios.get('http://localhost:5000/api/borrowing');
      setBorrowings(response.data);
    } catch (error) {
      console.error('Error fetching borrowings:', error);
    }
  };

  const handleReturn = async (id, tanggal_kembali) => {
    const tgl_pengembalian = new Date().toISOString().split('T')[0]; // Tanggal hari ini
    try {
      await axios.put(`http://localhost:5000/api/borrowing/${id}/return`, {
        tgl_pengembalian,
      });
      alert('Buku berhasil dikembalikan!');
      fetchBorrowings(); // Refresh daftar peminjaman
    } catch (error) {
      console.error('Error returning book:', error);
      alert('Terjadi kesalahan saat mengembalikan buku.');
    }
  };

  const navigateToTambahPeminjaman = () => {
    navigate('/peminjaman-staff/tambah'); // Menggunakan React Router untuk navigasi
  };

  const navigateToDetail = (id) => {
    navigate(`/peminjaman-staff/detail/${id}`); // Menggunakan React Router untuk navigasi
  };

  const navigateToDashboard = () => {
    navigate('/dashboard'); // Navigasi ke dashboard
  };

  return (
    <div className="peminjaman-staff">
      <h1>Daftar Peminjaman Buku</h1>
      <div className="button-group">
        <button className="btn-add" onClick={navigateToTambahPeminjaman}>
          Tambah Peminjaman
        </button>
        <button className="btn-dashboard" onClick={navigateToDashboard}>
          Kembali ke Dashboard
        </button>
      </div>
      <table className="peminjaman-table">
        <thead>
          <tr>
            <th>No</th>
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
              <td>{borrow.id_anggota_perpustakaan}</td>
              <td>{borrow.nama_anggota}</td>
              <td>{new Date(borrow.tanggal_pinjam).toLocaleDateString('id-ID')}</td>
              <td>{new Date(borrow.tanggal_kembali).toLocaleDateString('id-ID')}</td>
              <td>{borrow.status_kembali ? 'Kembali' : 'Dipinjam'}</td>
              <td>
                <button className="btn-detail" onClick={() => navigateToDetail(borrow.id_peminjaman)}>
                  Detail
                </button>
                {!borrow.status_kembali && (
                  <button
                    className="btn-return"
                    onClick={() => handleReturn(borrow.id_peminjaman, borrow.tanggal_kembali)}
                  >
                    Kembalikan
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

export default PeminjamanStaff;
