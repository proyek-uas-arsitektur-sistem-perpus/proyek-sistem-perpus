import React, { useState } from 'react';
import axios from 'axios';
import './TambahPeminjamanStaff.css';

const TambahPeminjamanStaff = () => {
  const [formData, setFormData] = useState({
    id_copy: '',
    id_anggota_perpustakaan: '',
    tanggal_pinjam: '',
    tanggal_kembali: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };


  
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:5000/api/borrowing', formData);
      alert('Peminjaman berhasil ditambahkan!');
      setFormData({
        id_copy: '',
        id_anggota_perpustakaan: '',
        tanggal_pinjam: '',
        tanggal_kembali: '',
      });
    } catch (error) {
      console.error('Error adding borrowing:', error);
      alert('Gagal menambahkan peminjaman. Periksa kembali data yang diinput.');
    }
  };

  return (
    <div className="tambah-peminjaman-container">
      <h1>Tambah Peminjaman Buku</h1>
      <form onSubmit={handleSubmit} className="tambah-peminjaman-form">
        <label>
          ID Copy Buku:
          <input
            type="text"
            name="id_copy"
            value={formData.id_copy}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          ID Anggota:
          <input
            type="text"
            name="id_anggota_perpustakaan"
            value={formData.id_anggota_perpustakaan}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Tanggal Pinjam:
          <input
            type="date"
            name="tanggal_pinjam"
            value={formData.tanggal_pinjam}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Tanggal Kembali:
          <input
            type="date"
            name="tanggal_kembali"
            value={formData.tanggal_kembali}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit" className="btn-submit">
          Tambah Peminjaman
        </button>
      </form>
    </div>
  );
};

export default TambahPeminjamanStaff;
