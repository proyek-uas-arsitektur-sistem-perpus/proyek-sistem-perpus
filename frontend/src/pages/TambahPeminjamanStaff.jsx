import React, { useState } from 'react';
import axios from 'axios';

const TambahPeminjaman = () => {
  const [formData, setFormData] = useState({
    id_anggota_perpustakaan: '',
    id_buku: '',
    tgl_pinjam: '',
    tgl_kembali: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/borrowing', formData)
      .then(() => alert('Peminjaman berhasil ditambahkan!'))
      .catch((err) => console.error(err));
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tambah Peminjaman</h1>
      <label>ID Anggota:</label>
      <input type="text" name="id_anggota_perpustakaan" onChange={handleChange} required />
      <label>ID Buku:</label>
      <input type="text" name="id_buku" onChange={handleChange} required />
      <label>Tanggal Pinjam:</label>
      <input type="date" name="tgl_pinjam" onChange={handleChange} required />
      <label>Tanggal Kembali:</label>
      <input type="date" name="tgl_kembali" onChange={handleChange} required />
      <button type="submit">Tambah</button>
    </form>
  );
};

export default TambahPeminjaman;
