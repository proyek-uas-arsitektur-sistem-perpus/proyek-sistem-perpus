import React, { useState, useEffect } from "react";

const PeminjamanStaff = () => {
  const [borrowings, setBorrowings] = useState([]);

  useEffect(() => {
    fetch("/api/borrowing")
      .then((response) => response.json())
      .then((data) => setBorrowings(data))
      .catch((error) => console.error("Error fetching borrowings:", error));
  }, []);

  return (
    <div>
      <h1>Halaman Peminjaman</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Anggota</th>
            <th>Buku</th>
            <th>Tanggal Pinjam</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {borrowings.map((borrow) => (
            <tr key={borrow.id_peminjaman}>
              <td>{borrow.id_peminjaman}</td>
              <td>{borrow.id_anggota}</td>
              <td>{borrow.id_buku}</td>
              <td>{borrow.tanggal_pinjam}</td>
              <td>{borrow.status_kembali ? "Dikembalikan" : "Dipinjam"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PeminjamanStaff;
