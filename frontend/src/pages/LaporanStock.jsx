import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./LaporanStock.css";

const LaporanStock = () => {
  const [stokData, setStokData] = useState([]); // Data laporan stok
  const [filterKode, setFilterKode] = useState(""); // State untuk filter kode buku
  const [filteredData, setFilteredData] = useState([]); // Data yang ditampilkan di tabel
  const [bukuList, setBukuList] = useState([]); // Daftar kode buku untuk filter

  const navigate = useNavigate(); // Untuk navigasi halaman

  // Fetch data dari backend
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch data laporan stok
        const responseStok = await fetch("http://localhost:5000/api/stock/laporan-stok");
        const dataStok = await responseStok.json();
        setStokData(dataStok);
        setFilteredData(dataStok);

        // Fetch daftar kode buku untuk filter
        const responseBuku = await fetch("http://localhost:5000/api/stock/buku");
        const dataBuku = await responseBuku.json();
        setBukuList(dataBuku);
      } catch (error) {
        console.error("Gagal mengambil data dari backend:", error);
      }
    };

    fetchData();
  }, []);

  // Fungsi untuk menangani perubahan filter
  const handleFilterChange = (e) => {
    const kode = e.target.value;
    setFilterKode(kode);

    // Filter data berdasarkan kode buku
    if (kode) {
      const filtered = stokData.filter((item) => item.kode_buku.includes(kode));
      setFilteredData(filtered);
    } else {
      setFilteredData(stokData); // Jika filter kosong, tampilkan semua data
    }
  };

  // Fungsi untuk mengunduh PDF laporan
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Laporan Stock Buku", 20, 10);
    doc.autoTable({
      head: [["TGL", "KODE BUKU", "MASUK", "KELUAR", "SISA", "KETERANGAN"]],
      body: filteredData.map((row) => [
        row.tgl_stock,
        row.kode_buku,
        row.masuk,
        row.keluar,
        row.sisa,
        row.keterangan,
      ]),
    });
    doc.save("laporan_stok.pdf");
  };

  // Fungsi untuk tombol Back
  const handleBack = () => {
    navigate("/dashboard");
  };

  return (
    <div className="laporan-container">
      <h1>Laporan Stock Per Barang</h1>

      {/* Filter Data Berdasarkan Kode Buku */}
      <div className="filter-container">
        <div className="filter-group">
          <label htmlFor="filterKode">Pilih Kode Buku:</label>
          <select id="filterKode" value={filterKode} onChange={handleFilterChange}>
            <option value="">Semua Buku</option>
            {bukuList.map((buku) => (
              <option key={buku.id} value={buku.kode_buku}>
                {buku.kode_buku} - {buku.judul}
              </option>
            ))}
          </select>
        </div>
        <button onClick={() => setFilteredData(stokData)} className="btn-tampilkan">
          Tampilkan
        </button>
      </div>

      {/* Tabel Laporan */}
      <div className="table-container">
        <h2>
          Laporan Stock untuk {filterKode ? `Kode Buku ${filterKode}` : "Semua"}
        </h2>
        <table>
          <thead>
            <tr>
              <th>TGL</th>
              <th>KODE BUKU</th>
              <th>MASUK</th>
              <th>KELUAR</th>
              <th>SISA</th>
              <th>KETERANGAN</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, index) => (
              <tr key={index}>
                <td>{item.tgl_stock}</td>
                <td>{item.kode_buku}</td>
                <td>{item.masuk}</td>
                <td>{item.keluar}</td>
                <td>{item.sisa}</td>
                <td>{item.keterangan}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Tombol Back dan Cetak Laporan */}
      <div className="button-group">
        <button onClick={handleBack} className="btn-back">
          Back
        </button>
        <button onClick={handleDownloadPDF} className="btn-download">
          Cetak Laporan
        </button>
      </div>
    </div>
  );
};

export default LaporanStock;
