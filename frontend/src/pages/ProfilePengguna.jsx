import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePengguna.css";

const ProfilePengguna = () => {
  const navigate = useNavigate();

  // State untuk data pengguna
  const [data] = useState({
    nama: "Violet",
    nik: "2206080090",
    tanggalLahir: "28/01/2006",
    telepon: "082147296580",
    email: "fauzan1892@codekop.com",
    alamat: "Mars",
  });

  const handleBack = () => {
    navigate("/dashboard"); // Kembali ke halaman dashboard atau halaman lain yang diinginkan
  };

  const handleEdit = () => {
    navigate("/profile/edit"); // Navigasi ke halaman edit profile
  };

  return (
    <div className="profile-container">
      <h2>Profile Staff</h2>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Nama</th>
            <td>{data.nama}</td>
          </tr>
          <tr>
            <th>NIK</th>
            <td>{data.nik}</td>
          </tr>
          <tr>
            <th>Tanggal Lahir</th>
            <td>{data.tanggalLahir}</td>
          </tr>
          <tr>
            <th>Telepon</th>
            <td>{data.telepon}</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>{data.email}</td>
          </tr>
          <tr>
            <th>Alamat</th>
            <td>{data.alamat}</td>
          </tr>
        </tbody>
      </table>

      <div className="button-group">
        <button className="edit-button" type="button" onClick={handleEdit}>
          Edit Data
        </button>
        <button type="button" className="back-button" onClick={handleBack}>
          Kembali
        </button>
      </div>
    </div>
  );
};

export default ProfilePengguna;
