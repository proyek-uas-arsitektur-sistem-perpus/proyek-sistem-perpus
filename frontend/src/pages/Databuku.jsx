import  { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Databuku.css";

const DataBuku = () => {
  const navigate = useNavigate();

  // State untuk menyimpan daftar buku
  const [bukuList, setBukuList] = useState([
    {
      no: 1,
      sampul: "https://via.placeholder.com/50",
      bukuId: "BK001",
      isbn: "978-602-8758-07-9",
      judul: "Matematika Diskrit",
      kategori: "Buku",
      rak: "Rak 3",
      penerbit: "INFORMATIKA Bandung",
      tahun: 2010,
      stok: 10,
      dipinjam: 1,
    },
  ]);

  // Fungsi navigasi
  const goToTambahBuku = () => navigate("/tambah-buku");
  const goToDataBukuEdit = (bukuId) => navigate("/data-buku-edit", { state: { bukuId } });
  const goToDetailBuku = (bukuId) => navigate("/detail-buku", { state: { bukuId } });
  const goBack = () => navigate("/dashboard");

  // Fungsi untuk menghapus data buku
  const handleDelete = (bukuId) => {
    const updatedList = bukuList.filter((buku) => buku.bukuId !== bukuId);
    setBukuList(updatedList);
  };

  return (
    <div className="data-buku-container">
      {/* Header */}
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Data Buku
        </h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">Dashboard</span> &gt; Data Buku
        </p>
      </div>

      {/* Kontainer Tabel */}
      <div className="table-container">
        {/* Tombol Aksi */}
        <div className="action-buttons">
          <button className="btn-primary" onClick={goToTambahBuku}>Tambah Buku</button>
          <button className="btn-secondary">Sortir Kategori</button>
          <button className="btn-secondary">Sortir Rak Buku</button>
        </div>

        {/* Tabel Data Buku */}
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Sampul</th>
              <th>Data Buku</th>
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
            {bukuList.map((buku, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  <img src={buku.sampul} alt="Sampul Buku" />
                </td>
                <td>{buku.bukuId}</td>
                <td>{buku.isbn}</td>
                <td>{buku.judul}</td>
                <td>{buku.kategori}</td>
                <td>{buku.rak}</td>
                <td>{buku.penerbit}</td>
                <td>{buku.tahun}</td>
                <td>{buku.stok}</td>
                <td>{buku.dipinjam}</td>
                <td>
                  <div className="aksi-container">
                    <button
                      className="btn-action edit"
                      onClick={() => goToDataBukuEdit(buku.bukuId)}
                    >
                      <i className="fas fa-edit"></i>
                    </button>
                    <button
                      className="btn-action detail"
                      onClick={() => goToDetailBuku(buku.bukuId)}
                    >
                      <i className="fas fa-info-circle"></i>
                    </button>
                    <button
                      className="btn-action delete"
                      onClick={() => handleDelete(buku.bukuId)}
                    >
                      <i className="fas fa-trash-alt"></i>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBuku;
