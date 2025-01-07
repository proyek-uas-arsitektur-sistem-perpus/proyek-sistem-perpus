import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StockKeluar.css";

const StockKeluar = () => {
  const [formData, setFormData] = useState({
    tanggalKeluar: "",
    kodeBuku: "",
    keterangan: "",
    jumlahBuku: "",
  });

  const [bukuList, setBukuList] = useState([]);

  // Fetch daftar buku dari backend
  useEffect(() => {
    const fetchBuku = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/stock/buku");
        const data = await response.json();
        setBukuList(data);
      } catch (error) {
        console.error("Gagal mengambil data buku:", error);
      }
    };

    fetchBuku();
  }, []);

  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validasi angka negatif untuk stok keluar
    if (name === "jumlahBuku" && value > 0) {
      alert("Jumlah stok keluar harus berupa angka negatif!");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validasi jumlah stok keluar
    if (formData.jumlahBuku >= 0) {
      alert("Jumlah stok keluar harus kurang dari 0!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tanggal: formData.tanggalKeluar,
          kodeBuku: formData.kodeBuku,
          keterangan: formData.keterangan,
          jumlah: formData.jumlahBuku,
        }),
      });

      if (response.ok) {
        alert("Data stok keluar berhasil disimpan ke database!");
        setFormData({ tanggalKeluar: "", kodeBuku: "", keterangan: "", jumlahBuku: "" });
      } else {
        alert("Gagal menyimpan data. Silakan coba lagi.");
      }
    } catch (error) {
      console.error("Terjadi kesalahan:", error);
      alert("Terjadi kesalahan saat menghubungkan ke server.");
    }
  };

  const handleCancel = () => {
    navigate("/dashboard");
  };

  return (
    <div className="container">
      <h1 className="title">Pencatatan Buku Keluar</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* Input Tanggal Keluar */}
        <div className="form-group">
          <label htmlFor="tanggalKeluar">Tanggal Keluar</label>
          <input
            type="date"
            id="tanggalKeluar"
            name="tanggalKeluar"
            value={formData.tanggalKeluar}
            onChange={handleChange}
          />
        </div>

        {/* Dropdown Kode Buku */}
        <div className="form-group">
          <label htmlFor="kodeBuku">Kode Buku</label>
          <select
            id="kodeBuku"
            name="kodeBuku"
            value={formData.kodeBuku}
            onChange={handleChange}
          >
            <option value="">Pilih Kode Buku</option>
            {bukuList.map((buku) => (
              <option key={buku.id} value={buku.kode_buku}>
                {buku.kode_buku} - {buku.judul}
              </option>
            ))}
          </select>
        </div>

        {/* Input Keterangan */}
        <div className="form-group">
          <label htmlFor="keterangan">Keterangan</label>
          <input
            type="text"
            id="keterangan"
            name="keterangan"
            placeholder="Masukkan keterangan stok keluar"
            value={formData.keterangan}
            onChange={handleChange}
          />
        </div>

        {/* Input Jumlah Buku */}
        <div className="form-group">
          <label htmlFor="jumlahBuku">Jumlah Buku Keluar</label>
          <input
            type="number"
            id="jumlahBuku"
            name="jumlahBuku"
            placeholder="Masukkan jumlah buku"
            value={formData.jumlahBuku}
            onChange={handleChange}
          />
        </div>

        {/* Tombol Submit dan Cancel */}
        <div className="form-buttons">
          <button type="button" className="btn cancel" onClick={handleCancel}>
            Cancel
          </button>
          <button type="submit" className="btn submit" onClick={handleSubmit}>
            Tambahkan
          </button>
        </div>
      </form>
    </div>
  );
};

export default StockKeluar;
