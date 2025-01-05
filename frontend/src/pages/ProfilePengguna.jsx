import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProfilePengguna.css";

const ProfilePengguna = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1); // Navigasi ke halaman sebelumnya
  };

  return (
    <div className="profile-container">
      <h2>Profile Staff</h2>
      <table className="profile-table">
        <tbody>
          <tr>
            <th>Nama</th>
            <td>Violet</td>
          </tr>
          <tr>
            <th>NIK</th>
            <td>2206080090</td>
          </tr>
          <tr>
            <th>Tanggal Lahir</th>
            <td>28/01/2006</td>
          </tr>
          <tr>
            <th>Telepon</th>
            <td>082147296580</td>
          </tr>
          <tr>
            <th>Email</th>
            <td>fauzan1892@codekop.com</td>
          </tr>
          <tr>
            <th>Pas Foto</th>
            <td>
              <div className="photo-container">
                <input type="file" id="upload-photo" />
                <span>Tidak ada file yang dipilih</span>
                <img
                  src="https://via.placeholder.com/150" // Ganti URL gambar dengan yang Anda inginkan
                  alt="Pas Foto"
                  className="profile-photo"
                />
              </div>
            </td>
          </tr>
          <tr>
            <th>Alamat</th>
            <td>Mars</td>
          </tr>
        </tbody>
      </table>

      <div className="button-group">
        <button className="edit-button" type="button">
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
