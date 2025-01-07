import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransaksiDendaPengguna.css";

const DendaPengguna = () => {
  const [penalties, setPenalties] = useState([]);
  const userId = 1; // Ganti dengan ID pengguna yang login (dari sesi)

  useEffect(() => {
    fetchPenalties();
  }, []);

  const fetchPenalties = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/borrowing/penalties?userId=${userId}`);
      setPenalties(response.data);
    } catch (error) {
      console.error("Error fetching penalties:", error);
      alert("Gagal memuat data denda.");
    }
  };

  return (
    <div className="denda-container">
      <h1>Riwayat Denda</h1>
      <table className="denda-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Buku</th>
            <th>Tanggal Denda</th>
            <th>Jumlah Denda</th>
          </tr>
        </thead>
        <tbody>
          {penalties.map((penalty, index) => (
            <tr key={penalty.id_denda}>
              <td>{index + 1}</td>
              <td>{penalty.judul || "Tidak Tersedia"}</td>
              <td>
                {penalty.tanggal_denda
                  ? new Date(penalty.tanggal_denda).toLocaleDateString("id-ID")
                  : "Tidak Tersedia"}
              </td>
              <td>Rp{penalty.jumlah_denda.toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DendaPengguna;
