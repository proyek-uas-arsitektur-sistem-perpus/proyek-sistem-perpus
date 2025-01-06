import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const DetailPeminjaman = () => {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

  useEffect(() => {
    axios.get(`http://localhost:5000/api/borrowing/${id}`)
      .then((res) => setDetails(res.data))
      .catch((err) => console.error(err));
  }, [id]);

  if (!details) return <p>Loading...</p>;

  return (
    <div className="detail-peminjaman">
      <h1>Detail Peminjaman</h1>
      <p><strong>ID Peminjaman:</strong> {details.id_peminjaman}</p>
      <p><strong>ID Anggota:</strong> {details.id_anggota_perpustakaan}</p>
      <p><strong>Nama:</strong> {details.nama}</p>
      <p><strong>ID Buku:</strong> {details.id_buku}</p>
      <p><strong>Judul Buku:</strong> {details.judul_buku}</p>
      <p><strong>Tanggal Pinjam:</strong> {new Date(details.tgl_pinjam).toLocaleDateString('id-ID')}</p>
      <p><strong>Tanggal Kembali:</strong> {new Date(details.tgl_kembali).toLocaleDateString('id-ID')}</p>
      <p><strong>Status:</strong> {details.status_kembali ? 'Kembali' : 'Dipinjam'}</p>
    </div>
  );
};

export default DetailPeminjaman;
