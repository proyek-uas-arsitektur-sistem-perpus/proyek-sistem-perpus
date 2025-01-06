import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./Databuku.css";

const DataBuku = () => {
  const navigate = useNavigate();

  // State untuk menyimpan daftar buku
  const [bukuList, setBukuList] = useState([]);

  // Fungsi untuk mengambil data buku dari server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/catalog/books") // URL endpoint backend
      .then((response) => {
        setBukuList(response.data); // Simpan data yang diterima ke state
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error); // Tampilkan error jika ada
      });
  }, []);

  // Fungsi navigasi
  const goToTambahBuku = () => navigate("/tambah-buku");
  const goToDataBukuEdit = (bukuId) =>
    navigate("/data-buku-edit", { state: { bukuId } });

  // Fungsi untuk menghapus data buku
  const handleDelete = (bukuId) => {
    axios
      .delete(`http://localhost:5000/api/catalog/books/${bukuId}`) // Endpoint untuk DELETE
      .then(() => {
        setBukuList(bukuList.filter((buku) => buku.id_buku !== bukuId)); // Update state setelah menghapus
      })
      .catch((error) => {
        console.error("Error deleting book:", error); // Tampilkan error jika ada
      });
  };

  // Fungsi untuk kembali ke dashboard
  const goBack = () => navigate("/dashboard");

  return (
    <div className="data-buku-container">
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Data Buku
        </h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">
            Dashboard
          </span>{" "}
          &gt; Data Buku
        </p>
      </div>

      <div className="table-container">
        <div className="action-buttons">
          <button className="btn-primary" onClick={goToTambahBuku}>
            Tambah Buku
          </button>
          <button className="btn-secondary">Sortir Kategori</button>
        </div>

        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Buku</th>
              <th>Judul Buku</th>
              <th>Kategori</th>
              <th>Penerbit</th>
              <th>Tahun</th>
              <th>Aksi</th>
            </tr>
          </thead>
          <tbody>
            {bukuList.length > 0 ? (
              bukuList.map((buku, index) => (
                <tr key={buku.id_buku}>
                  <td>{index + 1}</td>
                  <td>{buku.kode_buku}</td>
                  <td>{buku.judul}</td>
                  <td>{buku.kategori}</td>
                  <td>{buku.penerbit}</td>
                  <td>{buku.tahun_terbit}</td>
                  <td>
                    <div className="aksi-container">
                      <button
                        className="btn-action edit"
                        onClick={() => goToDataBukuEdit(buku.id_buku)}
                      >
                        <i className="fas fa-edit"></i>
                      </button>
                      <button
                        className="btn-action delete"
                        onClick={() => handleDelete(buku.id_buku)}
                      >
                        <i className="fas fa-trash-alt"></i>
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="7" style={{ textAlign: "center" }}>
                  Tidak ada data buku
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataBuku;
