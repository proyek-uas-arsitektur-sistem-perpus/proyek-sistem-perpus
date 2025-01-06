import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CatalogManagement from "../components/CatalogManagement";
import "./TambahBuku.css";

const TambahBuku = () => {
  const navigate = useNavigate();

  // State untuk form
  const [formData, setFormData] = useState({
    kategori: "",
    rak: "",
    isbn: "",
    judul: "",
    pengarang: "",
    penerbit: "",
    tahun: "",
    sampul: null,
    lampiran: null,
    keterangan: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Membuat data baru untuk buku
    const newBuku = {
      no: Math.random(), // Gunakan random ID
      sampul: formData.sampul ? URL.createObjectURL(formData.sampul) : "https://via.placeholder.com/50",
      bukuId: `BK${Math.floor(Math.random() * 1000)}`,
      isbn: formData.isbn,
      judul: formData.judul,
      kategori: formData.kategori,
      rak: formData.rak,
      penerbit: formData.penerbit,
      tahun: formData.tahun,
      stok: 10, // Default stok
      dipinjam: 0, // Default dipinjam
    };

    CatalogManagement.addBook(newBuku); // Menambahkan data buku
    navigate("/data-buku"); // Navigasi kembali ke halaman Data Buku
  };

  const handleKembali = () => {
    navigate("/data-buku");
  };

  return (
    <div className="form-container">
      <h2>Tambah Buku</h2>
      <form onSubmit={handleSubmit} className="form">
        <div className="form-group">
          <label>Kategori</label>
          <input
            type="text"
            name="kategori"
            value={formData.kategori}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Rak</label>
          <input
            type="text"
            name="rak"
            value={formData.rak}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>ISBN</label>
          <input
            type="text"
            name="isbn"
            value={formData.isbn}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Judul Buku</label>
          <input
            type="text"
            name="judul"
            value={formData.judul}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Nama Pengarang</label>
          <input
            type="text"
            name="pengarang"
            value={formData.pengarang}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Penerbit</label>
          <input
            type="text"
            name="penerbit"
            value={formData.penerbit}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Tahun Buku</label>
          <input
            type="number"
            name="tahun"
            value={formData.tahun}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Sampul (Gambar)</label>
          <input
            type="file"
            name="sampul"
            accept="image/*"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Lampiran Buku (PDF)</label>
          <input
            type="file"
            name="lampiran"
            accept="application/pdf"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label>Keterangan Lainnya</label>
          <textarea
            name="keterangan"
            value={formData.keterangan}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="form-actions">
          <button type="button" onClick={handleKembali}>
            Kembali
          </button>
          <button type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default TambahBuku;
