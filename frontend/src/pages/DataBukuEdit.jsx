import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import CatalogManagement from "../components/CatalogManagement";

const DataBukuEdit = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { bukuId } = location.state; // Mengambil bukuId yang diteruskan dari DataBuku

  const [formData, setFormData] = useState({
    kategori: "",
    rak: "",
    isbn: "",
    judul: "",
    penerbit: "",
    tahun: "",
    stok: 10,
    sampul: null,
    lampiran: null,
  });

  useEffect(() => {
    const buku = CatalogManagement.getAllBooks().find((b) => b.bukuId === bukuId);
    if (buku) {
      setFormData({
        kategori: buku.kategori,
        rak: buku.rak,
        isbn: buku.isbn,
        judul: buku.judul,
        penerbit: buku.penerbit,
        tahun: buku.tahun,
        stok: buku.stok,
        sampul: buku.sampul,
        lampiran: buku.lampiran,
      });
    }
  }, [bukuId]);

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
    const updatedBuku = {
      bukuId,
      ...formData,
    };


    // Perbarui data buku di CatalogManagement
    CatalogManagement.updateBook(updatedBuku);

    // Logika untuk memperbarui buku
    navigate("/data-buku"); // Kembali ke halaman Data Buku
  };

  return (
    <div className="form-container">
      <h2>Edit Buku</h2>
      <form onSubmit={handleSubmit} className="form">
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
          <label>Tahun</label>
          <input
            type="number"
            name="tahun"
            value={formData.tahun}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Stok</label>
          <input
            type="number"
            name="stok"
            value={formData.stok}
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
          {formData.sampul && (
            <img
              src={formData.sampul instanceof File ? URL.createObjectURL(formData.sampul) : formData.sampul}
              alt="Preview Sampul"
              width="50"
              height="50"
            />
          )}
        </div>
        <div className="form-group">
          <label>Lampiran Buku (PDF)</label>
          <input
            type="file"
            name="lampiran"
            accept="application/pdf"
            onChange={handleChange}
          />
          {formData.lampiran && (
            <a href={formData.lampiran instanceof File ? URL.createObjectURL(formData.lampiran) : formData.lampiran} target="_blank" rel="noopener noreferrer">
              Lihat Lampiran
            </a>
          )}
        </div>
        <button type="submit">Simpan Perubahan</button>
      </form>
    </div>
  );
};

export default DataBukuEdit;
