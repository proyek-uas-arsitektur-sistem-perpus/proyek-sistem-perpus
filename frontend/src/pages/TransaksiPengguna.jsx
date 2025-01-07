import React, { useState, useEffect } from "react";
import axios from "axios";
import "./TransaksiDendaPengguna.css";

const TransaksiPengguna = () => {
  const [transactions, setTransactions] = useState([]);
  const userId = 1; // Ganti dengan ID pengguna yang login (dari sesi)

  useEffect(() => {
    fetchTransactions();
  }, []);

  const fetchTransactions = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/api/borrowing?userId=${userId}`);
      setTransactions(response.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
      alert("Gagal memuat data transaksi.");
    }
  };

  return (
    <div className="transaksi-container">
      <h1>Riwayat Peminjaman dan Pengembalian</h1>
      <table className="transaksi-table">
        <thead>
          <tr>
            <th>No</th>
            <th>Judul Buku</th>
            <th>Tanggal Pinjam</th>
            <th>Tanggal Kembali</th>
            <th>Status</th>
            <th>Tanggal Pengembalian</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map((transaction, index) => (
            <tr key={transaction.id_peminjaman}>
              <td>{index + 1}</td>
              <td>{transaction.judul || "Tidak Tersedia"}</td>
              <td>
                {transaction.tanggal_pinjam
                  ? new Date(transaction.tanggal_pinjam).toLocaleDateString("id-ID")
                  : "Tidak Tersedia"}
              </td>
              <td>
                {transaction.tanggal_kembali
                  ? new Date(transaction.tanggal_kembali).toLocaleDateString("id-ID")
                  : "Tidak Tersedia"}
              </td>
              <td>{transaction.status_kembali ? "Sudah Kembali" : "Belum Kembali"}</td>
              <td>
                {transaction.tanggal_pengembalian
                  ? new Date(transaction.tanggal_pengembalian).toLocaleDateString("id-ID")
                  : "Belum Dikembalikan"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TransaksiPengguna;
