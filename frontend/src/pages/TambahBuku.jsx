import React from "react";
import { useNavigate } from "react-router-dom";
import "./TambahBuku.css";

const TambahBuku = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate("/data-buku");
  };

  return (
    <div className="tambah-buku-container">
      <h2 className="page-title">
      <i className="fas fa-book"></i> Tambah Buku</h2>
      <form className="form-container">
        <div className="form-row">
          <div className="form-group">
            <label>Kategori</label>
            <select className="form-control">
              <option>-- Pilih Kategori --</option>
              <option>Kategori 1</option>
              <option>Kategori 2</option>
            </select>
          </div>
          <div className="form-group">
            <label>Rak / Lokasi</label>
            <select className="form-control">
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
              placeholder="Contoh ISBN: 978-602-8123-35-8"
            />
          </div>
          <div className="form-group">
            <label>Kode Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Kode buku: B001"
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Judul Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Contoh: Cara Cepat Belajar Pemrograman Web"
            />
          </div>
          <div className="form-group">
            <label>Nama Pengarang</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nama Pengarang"
            />
          </div>
          <div className="form-group">
            <label>Penerbit</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nama Penerbit"
            />
          </div>
          <div className="form-group">
            <label>Tahun Buku</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tahun Buku: 2019"
            />
          </div>
        </div>

          <div className="form-row">
             <div className="form-group">
            <label>Sampul (gambar) <span className="optional">* optional</span></label>
            <input
              type="file"
              className="form-control"
               accept="image/*" />
          </div>
          <div className="form-group">
            <label>Lampiran Buku (pdf) <span className="optional">* optional</span></label>
            <input type="file" className="form-control" accept=".pdf" />
          </div>
          <div className="form-group full-width">
            <label>Keterangan Lainnya</label>
            <textarea
              className="form-control keterangan-textarea"
              placeholder="Tambahkan keterangan lain"
            ></textarea>
          </div>
        </div>

        <div className="form-actions">
          <button type="submit" className="btn-submit">Submit</button>
          <button type="button" className="btn-cancel" onClick={goBack}>
            Kembali
          </button>
        </div>
      </form>
    </div>
  );
};

export default TambahBuku;
