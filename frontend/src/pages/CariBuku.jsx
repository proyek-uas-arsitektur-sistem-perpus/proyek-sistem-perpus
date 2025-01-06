import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CatalogManagement from "../components/CatalogManagement";
import "./Databuku.css";

const CariBuku = () => {
  const navigate = useNavigate();

  // State untuk menyimpan daftar buku
  const [bukuList, setBukuList] = useState([]);

  useEffect(() => {
    // Mendapatkan data buku dari service
    setBukuList(CatalogManagement.getAllBooks());
  }, []);

  // Fungsi navigasi
  const goBack = () => navigate("/dashboard");

  return (
    <div className="data-buku-container">
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Cari Buku
        </h2>
        <p className="breadcrumb">
          <span onClick={goBack} className="breadcrumb-link">Dashboard</span> &gt; Cari Buku
        </p>
      </div>

      <div className="table-container">
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Sampul</th>
              <th>Kode Buku</th>
              <th>ISBN</th>
              <th>Judul Buku</th>
              <th>Kategori</th>
              <th>Penerbit</th>
              <th>Tahun</th>
              <th>Stok</th>
              <th>Dipinjam</th>
            </tr>
          </thead>
          <tbody>
            {bukuList.map((buku, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>
                  {buku.sampul && (
                    <img
                      src={buku.sampul instanceof File ? URL.createObjectURL(buku.sampul) : buku.sampul}
                      alt="Sampul Buku"
                      width="100"
                      height="150"
                    />
                  )}
                </td>
                <td>{buku.bukuId}</td>
                <td>{buku.isbn}</td>
                <td>{buku.judul}</td>
                <td>{buku.kategori}</td>
                <td>{buku.penerbit}</td>
                <td>{buku.tahun}</td>
                <td>{buku.stok}</td>
                <td>{buku.dipinjam}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CariBuku;
