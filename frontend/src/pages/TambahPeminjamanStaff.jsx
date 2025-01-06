import React, { useState } from 'react';
import axios from 'axios';
import './TambahPeminjamanStaff.css';

const TambahPeminjaman = () => {
  const [formData, setFormData] = useState({
    id_anggota_perpustakaan: '',
    id_copy: '',
    tgl_pinjam: '',
    tgl_kembali: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/api/borrowing', formData)
      .then(() => alert('Peminjaman berhasil ditambahkan!'))
      .catch((err) => console.error(err));
  };

  return (
    <div className="tambah-peminjaman">
      <h1>Tambah Peminjaman</h1>
      <form onSubmit={handleSubmit}>
        <label>ID Anggota</label>
        <input
          type="text"
          name="id_anggota_perpustakaan"
          value={formData.id_anggota_perpustakaan}
          onChange={handleInputChange}
          required
        />

        <label>ID Copy</label>
        <input
          type="text"
          name="id_copy"
          value={formData.id_copy}
          onChange={handleInputChange}
          required
        />

        <label>Tanggal Pinjam</label>
        <input
          type="date"
          name="tgl_pinjam"
          value={formData.tgl_pinjam}
          onChange={handleInputChange}
          required
        />

        <label>Tanggal Kembali</label>
        <input
          type="date"
          name="tgl_kembali"
          value={formData.tgl_kembali}
          onChange={handleInputChange}
          required
        />

        <button type="submit">Tambah</button>
      </form>
    </div>
  );
};

export default TambahPeminjaman;
