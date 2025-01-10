import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./EditDataPengguna.css";

const EditPengguna = () => {
  const { id } = useParams(); // Ambil ID dari URL
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nama_anggota: "",
    nik: "",
    email: "",
    no_telepon: "",
    alamat: "",
  });

  const [loading, setLoading] = useState(true); // Indikator loading

  // Fetch data pengguna saat komponen dimuat
  useEffect(() => {
    fetch(`http://localhost:5000/api/user/users/${id}`)
      .then((response) => response.json())
      .then((result) => {
        setFormData(result); // Isi form dengan data dari API
        setLoading(false); // Matikan indikator loading
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        setLoading(false);
      });
  }, [id]);

  // Fungsi untuk menangani perubahan input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Fungsi untuk mengirim data perubahan ke API
  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`http://localhost:5000/api/user/users/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => {
        if (response.ok) {
          alert(`Pengguna dengan ID ${id} berhasil diubah!`);
          navigate("/data-pengguna"); // Kembali ke halaman data pengguna
        } else {
          alert("Gagal mengubah data pengguna. Silakan coba lagi.");
        }
      })
      .catch((error) => {
        console.error("Error updating user:", error);
        alert("Terjadi kesalahan saat mengubah data pengguna.");
      });
  };

  // Fungsi untuk kembali ke halaman sebelumnya
  const handleBack = () => {
    navigate("/data-pengguna");
  };

  return (
    <div className="form-container">
      {loading ? (
        <p>Loading data...</p> // Indikator loading
      ) : (
        <>
          <h2>Edit Pengguna</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="nama_anggota"
              value={formData.nama_anggota}
              onChange={handleChange}
              required
              placeholder="Nama"
            />
            <input
              type="text"
              name="nik"
              value={formData.nik}
              onChange={handleChange}
              required
              placeholder="NIK"
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            <input
              type="text"
              name="no_telepon"
              value={formData.no_telepon}
              onChange={handleChange}
              required
              placeholder="Nomor Telepon"
            />
            <input
              type="text"
              name="alamat"
              value={formData.alamat}
              onChange={handleChange}
              required
              placeholder="Alamat"
            />
            <div className="button-group">
              <button type="submit" className="action-button save-button">
                Simpan Perubahan
              </button>
              <button type="button" className="action-button back-button" onClick={handleBack}>
                Kembali
              </button>
            </div>
          </form>
        </>
      )}
    </div>
  );
};

export default EditPengguna;