import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash, faArrowLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import "./DataPengguna.css";

const DataPengguna = () => {
  const navigate = useNavigate();

  // Gunakan state untuk menyimpan data pengguna
  const [data, setData] = useState([
    { id: "001", nik: "320123456789", nama: "John Doe", email: "john.doe@gmail.com", telp: "08123456789", alamat: "Jakarta" },
    { id: "002", nik: "320987654321", nama: "Jane Smith", email: "jane.smith@gmail.com", telp: "08198765432", alamat: "Bandung" },
    { id: "003", nik: "320456789012", nama: "Alice Johnson", email: "alice.johnson@gmail.com", telp: "08134567890", alamat: "Surabaya" },
    { id: "004", nik: "320654321098", nama: "Bob Brown", email: "bob.brown@gmail.com", telp: "08145678901", alamat: "Yogyakarta" },
    { id: "005", nik: "320789012345", nama: "Charlie Green", email: "charlie.green@gmail.com", telp: "08156789012", alamat: "Medan" },
  ]);

  const handleTambah = () => {
    navigate("/data-pengguna/tambah");
  };

  const handleKembali = () => {
    navigate("/dashboard");
  };

  const handleEdit = (id) => {
    navigate(`/data-pengguna/edit/${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm(`Apakah Anda yakin ingin menghapus pengguna dengan ID ${id}?`)) {
      // Filter data untuk menghapus pengguna berdasarkan ID
      const updatedData = data.filter((user) => user.id !== id);
      setData(updatedData); // Perbarui state dengan data yang baru
      alert(`Pengguna dengan ID ${id} berhasil dihapus.`);
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

      <table className="data-table">
        <thead>
          <tr>
            <th>No</th>
            <th>No ID</th>
            <th>NIK</th>
            <th>Nama</th>
            <th>Email</th>
            <th>Nomor Telepon</th>
            <th>Alamat</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {data.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.id}</td>
              <td>{user.nik}</td>
              <td>{user.nama}</td>
              <td>{user.email}</td>
              <td>{user.telp}</td>
              <td>{user.alamat}</td> <br></br>
              <td className="action-buttons">
                <button
                  className="action-button edit"
                  onClick={() => handleEdit(user.id)}
                >
                  <FontAwesomeIcon icon={faEdit} /> Edit
                </button>
                <button
                  className="action-button delete"
                  onClick={() => handleDelete(user.id)}
                >
                  <FontAwesomeIcon icon={faTrash} /> Hapus
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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
