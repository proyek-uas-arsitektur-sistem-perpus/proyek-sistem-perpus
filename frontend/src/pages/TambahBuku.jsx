import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./TambahBuku.css";

const TambahBuku = () => {
  const navigate = useNavigate();

  // State untuk form
  const [formData, setFormData] = useState({
    kategori: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Data yang akan dikirim ke backend
    const newBuku = {
      kode_buku: `BK${Math.floor(Math.random() * 1000)}`, // Generate kode_buku unik
      judul: formData.judul,
      kategori: formData.kategori,
      penerbit: formData.penerbit,
      tahun_terbit: formData.tahun,
    };

    try {
      // Mengirim data buku ke backend melalui endpoint POST
      await axios.post("http://localhost:5000/api/catalog/books", newBuku);
      alert("Buku berhasil ditambahkan!");
      navigate("/data-buku"); // Navigasi ke halaman Data Buku
    } catch (error) {
      console.error("Error adding book:", error);
      alert("Terjadi kesalahan saat menambahkan buku.");
    }
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
