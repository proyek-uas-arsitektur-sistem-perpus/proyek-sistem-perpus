import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPeminjaman = () => {
  const { id } = useParams();
  const [borrowing, setBorrowing] = useState(null);

  useEffect(() => {
    fetchBorrowingDetail();
  }, []);

  const fetchBorrowingDetail = () => {
    axios.get(`http://localhost:5000/api/borrowing/${id}`)
      .then((res) => setBorrowing(res.data))
      .catch((err) => console.error(err));
  };

  if (!borrowing) return <p>Loading...</p>;

  return (
    <div>
      <h1>Detail Peminjaman</h1>
      <p>No Peminjaman: PJ{borrowing.id_peminjaman.toString().padStart(5, '0')}</p>
      <p>ID Anggota: {borrowing.id_anggota_perpustakaan}</p>
      <p>Nama Anggota: {borrowing.nama || 'N/A'}</p>
      <p>Tanggal Pinjam: {new Date(borrowing.tgl_pinjam).toLocaleDateString('id-ID')}</p>
      <p>Tanggal Kembali: {new Date(borrowing.tgl_kembali).toLocaleDateString('id-ID')}</p>
      <p>Status: {borrowing.status_kembali ? 'Sudah Kembali' : 'Dipinjam'}</p>
    </div>
  );
};

export default DetailPeminjaman;
