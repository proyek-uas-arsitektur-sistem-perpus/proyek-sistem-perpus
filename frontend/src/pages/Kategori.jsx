import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Kategori.css";


const Kategori = () => {
 const navigate = useNavigate();
  const [kategoriList, setKategoriList] = useState([
    { id: 1, nama: "Pemrograman Web" },
    { id: 2, nama: "Buku Sakti" },
    { id: 3, nama: "Jurnal" },
  ]);

  const [namaKategori, setNamaKategori] = useState("");

  const handleTambahKategori = () => {
    if (namaKategori.trim() === "") {
      alert("Nama kategori tidak boleh kosong!");
      return;
    }
    setKategoriList([
      ...kategoriList,
      { id: kategoriList.length + 1, nama: namaKategori },
    ]);
    setNamaKategori("");
  };

  const handleDelete = (id) => {
    const filteredList = kategoriList.filter((kategori) => kategori.id !== id);
    setKategoriList(filteredList);
  };

  const goBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="kategori-container">
      <div className="header">
        <h2 className="page-title">Data Kategori</h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">
            Dashboard
          </span>{" "}
          &gt; Data Kategori
        </p>
      </div>
      <div className="content-container">
        <div className="form-container">
          <h3>Tambah Kategori</h3>
          <div className="form-group">
            <label>Nama Kategori</label>
            <input
              type="text"
              placeholder="Contoh : Pemrograman Web"
              value={namaKategori}
              onChange={(e) => setNamaKategori(e.target.value)}
              className="form-control"
            />
          </div>
          <button className="btn-primary" onClick={handleTambahKategori}>
            + Tambah Kategori
          </button>
        </div>
        <div className="table-container">
          <table className="data-table">
            <thead>
              <tr>
                <th>No</th>
                <th>Kategori</th>
                <th>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {kategoriList.map((kategori, index) => (
                <tr key={kategori.id}>
                  <td>{index + 1}</td>
                  <td>{kategori.nama}</td>
                  <td>
                    <button className="btn-action edit">Edit</button>
                    <button
                      className="btn-action delete"
                      onClick={() => handleDelete(kategori.id)}
                    >
                      Hapus
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Kategori;
