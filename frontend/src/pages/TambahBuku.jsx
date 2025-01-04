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
      <h2 className="page-title">Tambah Buku</h2>
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
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>ISBN</label>
            <input type="text" className="form-control" placeholder="Masukkan ISBN" />
          </div>
          <div className="form-group">
            <label>Judul Buku</label>
            <input type="text" className="form-control" placeholder="Masukkan Judul Buku" />
          </div>
        </div>
        <div className="form-row">
          <div className="form-group">
            <label>Nama Pengarang</label>
            <input
              type="text"
              className="form-control"
              placeholder="Masukkan Nama Pengarang"
            />
          </div>
          <div className="form-group">
            <label>Penerbit</label>
            <input type="text" className="form-control" placeholder="Masukkan Nama Penerbit" />
          </div>
        </div>
        <div className="form-actions">
          <button type="submit" className="btn-submit">
            Simpan
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
