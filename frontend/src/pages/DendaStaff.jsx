import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./DendaStaff.css";

const DendaStaff = () => {
  const [penalties, setPenalties] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Jumlah item per halaman
  const navigate = useNavigate(); // Gunakan untuk navigasi

  useEffect(() => {
    fetchPenalties();
  }, []);

  const fetchPenalties = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/borrowing/penalties"
      );
      setPenalties(response.data);
    } catch (error) {
      console.error("Error fetching penalties:", error);
      alert("Gagal memuat data denda.");
    }
  };

  const handleDeletePenalty = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/borrowing/penalties/${id}`);
      alert("Denda berhasil dihapus!");
      fetchPenalties(); // Refresh data setelah penghapusan
    } catch (error) {
      console.error("Error deleting penalty:", error);
      alert("Terjadi kesalahan, coba lagi.");
    }
  };

  // Hitung data untuk pagination
  const lastItemIndex = currentPage * itemsPerPage;
  const firstItemIndex = lastItemIndex - itemsPerPage;
  const currentItems = penalties.slice(firstItemIndex, lastItemIndex);

  const totalPages = Math.ceil(penalties.length / itemsPerPage);

  const handlePageChange = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="denda-container">
      <div className="header-buttons">
        <button className="btn-back" onClick={() => navigate("/dashboard")}>
          ← Kembali
        </button>
      </div>
      <h1>Data Denda</h1>
      <table className="denda-table">
        <thead>
          <tr>
            <th>No</th>
            <th>ID Denda</th>
            <th>ID Peminjaman</th>
            <th>Nama</th>
            <th>Judul Buku</th> {/* Kolom Judul Buku */}
            <th>Tanggal Denda</th>
            <th>Jumlah Denda</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((penalty, index) => (
            <tr key={penalty.id_denda}>
              <td>{firstItemIndex + index + 1}</td>
              <td>{penalty.id_denda}</td>
              <td>{penalty.id_peminjaman}</td>
              <td>{penalty.nama_anggota}</td>
              <td>{penalty.judul_buku || "Tidak Ada Judul"}</td>
              <td>
                {new Date(penalty.tanggal_denda).toLocaleDateString("id-ID")}
              </td>
              <td>Rp{penalty.jumlah_denda.toLocaleString()}</td>
              <td>
                <button
                  className="btn-delete"
                  onClick={() => handleDeletePenalty(penalty.id_denda)}
                >
                  Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination Controls */}
      <div className="pagination">
        <span>
          Showing {firstItemIndex + 1} to{" "}
          {Math.min(lastItemIndex, penalties.length)} of {penalties.length}{" "}
          entries
        </span>
        <div>
          <button
            className="page-button"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            Previous
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index + 1}
              className={`page-button ${
                currentPage === index + 1 ? "active" : ""
              }`}
              onClick={() => handlePageChange(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="page-button"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default DendaStaff;
