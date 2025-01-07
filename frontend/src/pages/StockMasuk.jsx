import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./StockMasuk.css";

const StockMasuk = () => {
  const [formData, setFormData] = useState({
    tanggalMasuk: "",
    kodeBuku: "",
    keterangan: "",
    jumlahBuku: "", // Field ini akan diubah menjadi 'jumlah' saat dikirim ke backend
  });

  const [bukuList, setBukuList] = useState([]);

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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.kodeBuku || formData.jumlahBuku === "") {
      alert("Pastikan semua data valid!");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/stock", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          tanggal: formData.tanggalMasuk, // Pastikan key ini sesuai dengan controller
          kodeBuku: formData.kodeBuku,
          keterangan: formData.keterangan,
          jumlah: formData.jumlahBuku, // Pastikan key ini sesuai dengan controller
        }),
      });

      if (response.ok) {
        alert("Data berhasil disimpan ke database!");
        setFormData({
          tanggalMasuk: "",
          kodeBuku: "",
          keterangan: "",
          jumlahBuku: "",
        });
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
      <h1 className="title">Pencatatan Buku Masuk</h1>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="tanggalMasuk">Tanggal</label>
          <input
            type="date"
            id="tanggalMasuk"
            name="tanggalMasuk"
            value={formData.tanggalMasuk}
            onChange={handleChange}
          />
        </div>
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
        <div className="form-group">
          <label htmlFor="keterangan">Keterangan</label>
          <input
            type="text"
            id="keterangan"
            name="keterangan"
            placeholder="Masukkan keterangan"
            value={formData.keterangan}
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="jumlahBuku">Jumlah</label>
          <input
            type="number"
            id="jumlahBuku"
            name="jumlahBuku"
            placeholder="Masukkan jumlah"
            value={formData.jumlahBuku}
            onChange={handleChange}
          />
        </div>
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

export default StockMasuk;
