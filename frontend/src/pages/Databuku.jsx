import React from "react";
import { useNavigate } from "react-router-dom";
import "./DataBuku.css";

const DataBuku = () => {
  const navigate = useNavigate();

  const goToTambahBuku = () => {
    navigate("/tambah-buku");
  };

  return (
    <div className="data-buku-container">
      <h2 className="page-title">Data Buku</h2>
      <div className="table-container">
        <div className="action-buttons">
          {/* Tombol untuk mengarahkan ke halaman Tambah Buku */}
          <button className="btn-primary" onClick={goToTambahBuku}>
            Tambah Buku
          </button>
          <button className="btn-secondary">Sortir Kategori</button>
          <button className="btn-secondary">Sortir Rak Buku</button>
        </div>
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Sampul</th>
              <th>Buku ID</th>
              <th>ISBN</th>
              <th>Judul Buku</th>
              <th>Kategori</th>
              <th>Rak</th>
              <th>Penerbit</th>
              <th>Tahun</th>
              <th>Stok</th>
              <th>Dipinjam</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <img src="https://via.placeholder.com/50" alt="Sampul Buku" />
              </td>
              <td>BK001</td>
              <td>978-602-8758-07-9</td>
              <td>Matematika Diskrit</td>
              <td>Buku</td>
              <td>Rak 3</td>
              <td>INFORMATIKA Bandung</td>
              <td>2010</td>
              <td>10</td>
              <td>1</td>
              <td>
                <button className="btn-action edit">Edit</button>
                <button className="btn-action delete">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBuku;
