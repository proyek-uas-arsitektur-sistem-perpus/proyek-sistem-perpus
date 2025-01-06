import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StockKeluar.css"; 

const StockKeluar = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    tanggalKeluar: "",
    kodeBuku: "",
    keterangan: "",
    jumlahBuku: "",
  });

  // Dummy data untuk dropdown kode buku (simulasi backend)
  const [bukuList] = useState([
    { id: 1, judul: "Matematika Diskrit", kode: "BK001" },
    { id: 2, judul: "Jaringan Komputer", kode: "BK002" },
    { id: 3, judul: "Desain UI/UX", kode: "BK003" },
  ]);


    // -------------------------------------------------------------
    // KODE INTEGRASI BACKEND
    // -------------------------------------------------------------
//   const [bukuList, setBukuList] = useState([]);
//   useEffect(() => {
//   const fetchBuku = async () => {
//     try {
//       const response = await fetch("http://localhost:5000/api/buku");
//       const data = await response.json();
//       setBukuList(data);
//     } catch (error) {
//       console.error("Gagal mengambil data buku:", error);
//     }
//   };

//   fetchBuku();
// }, []);


  const navigate = useNavigate(); // Untuk navigasi ke halaman lain

  // Fungsi untuk menangani perubahan input form
  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validasi angka negatif untuk stok masuk
    if (name === "jumlahBuku" && value > 0) {
      alert("Jumlah stok masuk harus berupa angka negatif!");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menangani submit form, statis (bisa dihapus setelah integrasi dengan backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi statis saat submit
    if (formData.jumlahBuku >= 0) {
      alert("Jumlah stok keluar harus kurang dari 0!");
      return;
    }

    console.log("Data yang dikirim:", formData);
    alert("Data berhasil disimpan! (Sementara statis)");

    
    // Reset form setelah sukses
    setFormData({ tanggalKeluar: "", kodeBuku: "", keterangan: "", jumlahBuku: "" });

    /*
    -------------------------------------------------------------
    KODE INTEGRASI BACKEND 
    -------------------------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();
        // Validasi stok keluar (harus negatif)
        if (formData.jumlahKeluar && formData.jumlahKeluar > 0) {
            alert("Jumlah stok keluar harus berupa angka negatif!");
            return;
        }

        try {
            const response = await fetch("http://localhost:5000/api/stock", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (response.ok) {
            alert("Data berhasil disimpan ke database!");
            setFormData({ tanggalKeluar: "", kodeBuku: "", keterangan: "", jumlahBuku: "" });
        } else {
          alert("Gagal menyimpan data. Silakan coba lagi.");
        }
    }   catch (error) {
        console.error("Terjadi kesalahan:", error);
        alert("Terjadi kesalahan saat menghubungkan ke server.");
        }
    };
    -------------------------------------------------------------
    */
  };

  // Fungsi untuk tombol Cancel
  const handleCancel = () => {
    navigate("/dashboard"); // Kembali ke halaman dashboard
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
              <option key={buku.id} value={buku.kode}>
                {buku.kode} - {buku.judul}
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
            placeholder="Masukkan keterangan stok Keluar"
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
            max='-1'
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
