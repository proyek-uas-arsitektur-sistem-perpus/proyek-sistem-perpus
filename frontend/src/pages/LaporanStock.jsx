import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import jsPDF from "jspdf";
import "jspdf-autotable";
import "./LaporanStock.css";

const LaporanStock = () => {
  // Data statis untuk simulasi laporan stok
  const [stokData] = useState([
    {
      tgl_stock: "2023-04-17",
      kode_buku: " BK001",
      masuk: 15,
      keluar: 0,
      sisa: 15,
    },
    {
      tgl_stock: "2023-04-17",
      kode_buku: "BK001",
      masuk: 0,
      keluar: 7,
      sisa: 8,
    },
  ]);

  const [filterKode, setFilterKode] = useState(""); // State untuk filter kode barang
  const [filteredData, setFilteredData] = useState(stokData); // Data yang ditampilkan di tabel

  const navigate = useNavigate(); // Untuk navigasi halaman

  // Fungsi untuk menangani perubahan filter
  const handleFilterChange = (e) => {
    setFilterKode(e.target.value);

    // Filter data berdasarkan kode barang
    if (e.target.value) {
      const filtered = stokData.filter((item) =>
        item.kode_buku.includes(e.target.value)
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(stokData); // Tampilkan semua data jika filter kosong
    }
  };

  // Fungsi untuk mengunduh PDF laporan
  const handleDownloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Laporan Stok Buku", 20, 10);
    doc.autoTable({
      head: [["TGL", "KODE BUKU", "MASUK", "KELUAR", "SISA"]],
      body: filteredData.map((row) => [
        row.tgl_stock,
        row.kode_buku,
        row.masuk,
        row.keluar,
        row.sisa,
      ]),
    });
    doc.save("laporan_stok.pdf");
  };

  // Fungsi untuk tombol Back
  const handleBack = () => {
    navigate("/dashboard");
  };

  /*
  -----------------------------------------------------------------------------------------
  Kode berikut untuk mengambil data dari backend. Aktifkan setelah backend siap diintegrasikan.
  -----------------------------------------------------------------------------------------
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/laporan-stok"); // Panggil API backend
        const data = await response.json(); // Ambil data dari respons backend
        setStokData(data); // Simpan data di state stokData
        setFilteredData(data); // Tampilkan data di tabel
      } catch (error) {
        console.error("Gagal mengambil data dari backend:", error); // Tampilkan error jika gagal
      }
    };

    fetchData(); // Jalankan fungsi fetch data
  }, []);
  -----------------------------------------------------------------------------------------
  */

  return (
    <div className="laporan-container">
      <h1>Laporan Stok Per Barang (Kartu Stok)</h1>

      {/* Filter Data Berdasarkan Kode Barang */}
      <div className="filter-container">
        <label htmlFor="filterKode">Pilih Barang:</label>
        <select id="filterKode" value={filterKode} onChange={handleFilterChange}>
          <option value="">Semua Barang</option>
          <option value="BK001">(BK001)</option>
          <option value="BK002"> (BK002)</option>
        </select>
        <button onClick={() => setFilteredData(stokData)}>Tampilkan</button>
      </div>

      {/* Tabel Laporan */}
      <div className="table-container">
        <h2>
          Laporan Stok untuk {filterKode ? `BK001 ~ Matematika Diskrit` : "Semua"}
        </h2>
        <table>
          <thead>
            <tr>
              <th>TGL</th>
              <th>KODE BUKU</th>
              <th>MASUK</th>
              <th>KELUAR</th>
              <th>SISA</th>
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
