import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import './DetailPinjamanStaff.css';

const DetailPinjaman = () => {
  const { id } = useParams(); // Mengambil ID dari parameter URL
  const navigate = useNavigate();
  const [detail, setDetail] = useState(null);

  useEffect(() => {
    fetchDetailPinjaman();
  }, []);

  const fetchDetailPinjaman = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/borrowing/${id}`);
      setDetail(response.data);
    } catch (error) {
      console.error('Error fetching detail pinjaman:', error);
      alert('Gagal memuat detail pinjaman.');
    }
  };

  const handleBackToPrevious = () => {
    navigate(-1); // Kembali ke halaman sebelumnya
  };

  const handleBackToDashboard = () => {
    navigate('/dashboard'); // Kembali ke halaman dashboard
  };

  return (
    <div className="detail-pinjaman-container">
      <h1>Detail Peminjaman Buku</h1>
      {detail ? (
        <div className="detail-card">
          <p><strong>No Pinjam:</strong> PJ{detail.id_peminjaman?.toString().padStart(5, '0') || 'N/A'}</p>
          <p><strong>ID Copy Buku:</strong> {detail.id_copy || 'Tidak Tersedia'}</p>
          <p><strong>Judul Buku:</strong> {detail.judul || 'Tidak Tersedia'}</p>
          <p><strong>ID Anggota:</strong> {detail.id_anggota_perpustakaan || 'Tidak Tersedia'}</p>
          <p><strong>Nama Anggota:</strong> {detail.nama_anggota || 'Tidak Tersedia'}</p>
          <p>
            <strong>Tanggal Pinjam:</strong>{' '}
            {detail.tanggal_pinjam ? new Date(detail.tanggal_pinjam).toLocaleDateString('id-ID') : 'Tidak Tersedia'}
          </p>
          <p><strong>Tanggal Kembali:</strong> {detail.tanggal_kembali ? new Date(detail.tanggal_kembali).toLocaleDateString('id-ID') : 'Tidak Tersedia'}</p>
          <p>
            <strong>Status:</strong> {detail.status_kembali ? 'Sudah Kembali' : 'Belum Kembali'}
          </p>
          {detail.status_kembali && (
            <>
              <p><strong>Tanggal Pengembalian:</strong> {detail.tanggal_pengembalian ? new Date(detail.tanggal_pengembalian).toLocaleDateString('id-ID') : 'Tidak Tersedia'}</p>
              <p><strong>Denda:</strong> {detail.denda ? `Rp${detail.denda.toLocaleString()}` : 'Tidak Ada'}</p>
            </>
          )}
        </div>
      ) : (
        <p>Memuat detail...</p>
      )}
      <div className="button-group">
        <button className="btn-back" onClick={handleBackToPrevious}>
          Kembali ke Halaman Sebelumnya
        </button>
        <button className="btn-dashboard" onClick={handleBackToDashboard}>
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
};

export default DetailPinjaman;
