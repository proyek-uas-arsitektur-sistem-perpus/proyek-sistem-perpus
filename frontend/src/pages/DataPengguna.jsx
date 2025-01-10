import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DataPengguna.css";

const DataPengguna = () => {
  const navigate = useNavigate();
  const [data, setData] = useState([]); // State untuk menyimpan data pengguna
  const [loading, setLoading] = useState(true); // State untuk indikator loading

  // Fetch data dari API saat komponen dimuat
  useEffect(() => {
    fetch("http://localhost:5000/api/user/users")
      .then((response) => response.json())
      .then((result) => {
        setData(result); // Simpan data ke state
        setLoading(false); // Matikan indikator loading
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  // Fungsi untuk navigasi ke form tambah pengguna
  const handleTambah = () => {
    navigate("/data-pengguna/tambah");
  };

  // Fungsi untuk kembali ke dashboard
  const handleKembali = () => {
    navigate("/dashboard");
  };

  // Fungsi untuk navigasi ke form edit pengguna
  const handleEdit = (id) => {
    navigate(`/data-pengguna/edit/${id}`);
  };

  // Fungsi untuk menghapus data pengguna
  const handleDelete = (id) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus pengguna dengan ID ${id}?`)) {
      fetch(`http://localhost:5000/api/user/users/${id}`, {
        method: "DELETE",
      })
        .then((response) => {
          if (response.ok) {
            setData(data.filter((user) => user.id_anggota_perpustakaan !== id)); // Hapus data dari state
            alert(`Pengguna dengan ID ${id} berhasil dihapus.`);
          } else {
            alert("Gagal menghapus data.");
          }
        })
        .catch((error) => console.error("Error deleting data:", error));
    }
  };

  return (
    <div className="data-pengguna-container">
      <div className="header">
        <button className="button-small kembali" onClick={handleKembali}>
          <FontAwesomeIcon icon={faArrowLeft} /> Kembali
        </button>
        <button className="button-small" onClick={handleTambah}>
          <FontAwesomeIcon icon={faPlus} /> Tambah
        </button>
      </div>

      {loading ? (
        <p>Loading data...</p> // Indikator loading
      ) : (
        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>No ID</th>
              <th>NIK</th>
              <th>Nama</th>
              <th>Email</th>
              <th>Nomor Telepon</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user, index) => (
              <tr key={user.id_anggota_perpustakaan}>
                <td>{index + 1}</td>
                <td>{user.id_anggota_perpustakaan}</td>
                <td>{user.nik}</td>
                <td>{user.nama_anggota}</td>
                <td>{user.email}</td>
                <td>{user.no_telepon}</td>
                <td className="action-buttons">
                  <button
                    className="action-button edit"
                    onClick={() => handleEdit(user.id_anggota_perpustakaan)}
                  >
                    <FontAwesomeIcon icon={faEdit} /> Edit
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(user.id_anggota_perpustakaan)}
                  >
                    <FontAwesomeIcon icon={faTrash} /> Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <div className="pagination">
        <span>
          Showing 1 to {data.length} of {data.length} entries
        </span>
        <div className="pagination-buttons">
          <button className="pagination-button">Previous</button>
          <button className="pagination-button active">1</button>
          <button className="pagination-button">Next</button>
        </div>
      </div>
    </div>
  );
};

export default DataPengguna;
