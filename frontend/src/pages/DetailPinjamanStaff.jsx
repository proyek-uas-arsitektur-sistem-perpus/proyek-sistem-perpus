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

  const handleBack = () => {
    navigate('/peminjaman-staff'); // Kembali ke halaman daftar peminjaman
  };

  return (
    <div className="detail-pinjaman-container">
      <h1>Detail Peminjaman Buku</h1>
      {detail ? (
        <div className="detail-card">
          <p><strong>No Pinjam:</strong> PJ{detail.id_peminjaman.toString().padStart(5, '0')}</p>
          <p><strong>ID Copy Buku:</strong> {detail.id_copy}</p>
          <p><strong>Judul Buku:</strong> {detail.judul || 'N/A'}</p>
          <p><strong>ID Anggota:</strong> {detail.id_anggota_perpustakaan}</p>
          <p><strong>Nama Anggota:</strong> {detail.nama || 'N/A'}</p>
          <p><strong>Tanggal Pinjam:</strong> {new Date(detail.tanggal_pinjam).toLocaleDateString('id-ID')}</p>
          <p><strong>Tanggal Kembali:</strong> {new Date(detail.tanggal_kembali).toLocaleDateString('id-ID')}</p>
          <p><strong>Status:</strong> {detail.status_kembali ? 'Sudah Kembali' : 'Belum Kembali'}</p>
          {detail.status_kembali && (
            <>
              <p><strong>Tanggal Pengembalian:</strong> {new Date(detail.tanggal_pengembalian).toLocaleDateString('id-ID')}</p>
              <p><strong>Denda:</strong> Rp{detail.denda.toLocaleString()}</p>
            </>
          )}
        </div>
      ) : (
        <p>Memuat detail...</p>
      )}
      <button className="btn-back" onClick={handleBack}>Kembali</button>
    </div>
  );
};

export default DetailPinjaman;
