import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./TambahBuku.css";

const TambahBuku = ({ addBook }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    sampul: "https://via.placeholder.com/50",
    bukuId: "",
    isbn: "",
    judul: "",
    kategori: "",
    rak: "",
    penerbit: "",
    tahun: "",
    stok: 0,
    dipinjam: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.bukuId || !formData.judul || !formData.kategori) {
      alert("Harap isi semua field yang wajib diisi!");
      return;
    }
    addBook(formData);
    navigate("/data-buku");
  };

    const goBack = () => {
        navigate("/data-buku");
      };

  return (
    <div className="tambah-buku-container">
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Tambah Buku
        </h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">
            Dashboard
          </span>{" "}
          &gt; Tambah Buku
        </p>
      </div>
      <form className="form-container" onSubmit={handleSubmit}>
        {/* Baris pertama */}
        <div className="form-row">
          <div className="form-group">
            <label>Kategori</label>
            <select className="form-control" 
            name="kategori"
            onChange={handleChange}>
              <option>-- Pilih Kategori --</option>
              <option>Kategori 1</option>
              <option>Kategori 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Rak / Lokasi</label>
            <select className="form-control"
                    name="rak / lokasi" 
                    onChange={handleChange}>
              <option>-- Pilih Rak / Lokasi --</option>
              <option>Rak 1</option>
              <option>Rak 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>ISBN</label>
            <input
              type="text"
              className="form-control"
              name="isbn"
              onChange={handleChange}
              placeholder="Contoh ISBN: 978-602-8123-35-8"
            />
          </div>
          <div className="form-group">
            <label>Kode Buku</label>
            <input
              type="text"
              className="form-control"
              name="kode-buku"
              onChange={handleChange}
              placeholder="Kode buku: B001"
            />
          </div>
        </div>

        {/* Baris kedua */}
        <div className="form-row">
          <div className="form-group">
            <label>Judul Buku</label>
            <input
              type="text"
              className="form-control"
              name="judul-buku"
              onChange={handleChange}
              placeholder="Contoh: Cara Cepat Belajar Pemrograman Web"
            />
          </div>
          <div className="form-group">
            <label>Nama Pengarang</label>
            <input
              type="text"
              className="form-control"
              name="nama-pengarang"
              onChange={handleChange}
              placeholder="Nama Pengarang"
            />
          </div>
          <div className="form-group">
            <label>Penerbit</label>
            <input
              type="text"
              className="form-control"
              name="penerbit"
              onChange={handleChange}
              placeholder="Nama Penerbit"
            />
          </div>
          <div className="form-group">
            <label>Tahun Buku</label>
            <input
              type="text"
              className="form-control"
              name="tahun-buku"
              onChange={handleChange}
              placeholder="Tahun Buku: 2019"
            />
          </div>
        </div>

        {/* Baris ketiga */}
        <div className="form-row">
          <div className="form-group">
            <label>
              Sampul (gambar) <span className="optional">* optional</span>
            </label>
            <input
              type="file"
              className="form-control"
              name="sampul"
              onChange={handleChange}
              accept="image/*"
            />
          </div>
          <div className="form-group">
            <label>
              Lampiran Buku (pdf) <span className="optional">* optional</span>
            </label>
            <input
              type="file"
              className="form-control"
              name="lampiran-buku"
              onChange={handleChange}
              accept=".pdf"
            />
          </div>
        </div>

        {/* Baris keempat */}
        <div className="form-row">
          <div className="form-group full-width">
            <label>Keterangan Lainnya</label>
            <textarea
              className="form-control keterangan-textarea"
              name="keterangan-lainnya"
              onChange={handleChange}
              placeholder="Tambahkan keterangan lain"
            ></textarea>
          </div>
        </div>

        {/* Tombol aksi */}
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Submit
          </button>
          <button type="button" className="btn-cancel" onClick={goBack}>
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahBuku;
