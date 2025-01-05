import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./StockMasuk.css"; 

const StockMasuk = () => {
  // State untuk menyimpan data form
  const [formData, setFormData] = useState({
    tanggalMasuk: "",
    kodeBuku: "",
    keterangan: "",
    jumlahBuku: "",
  });

  // Dummy data untuk dropdown kode buku (simulasi backed)
  const [bukuList] = useState([
    { id: 1, judul: "Pemrograman Dasar", kode: "B0001" },
    { id: 2, judul: "Jaringan Komputer", kode: "B0002" },
    { id: 3, judul: "Desain UI/UX", kode: "B0003" },
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

    // Validasi angka positif untuk stok masuk
    if (name === "jumlahBuku" && value < 0) {
      alert("Jumlah stok masuk harus berupa angka positif!");
      return;
    }

    setFormData({ ...formData, [name]: value });
  };

  // Fungsi untuk menangani submit form, statis (bisa dihapus setelah integrasi sama backend)
  const handleSubmit = (e) => {
    e.preventDefault();

    // Validasi statis saat submit
    if (formData.jumlahBuku <= 0) {
      alert("Jumlah stok masuk harus lebih besar dari 0!");
      return;
    }

    console.log("Data yang dikirim:", formData);
    alert("Data berhasil disimpan! (Sementara statis)");

    
    // Reset form setelah sukses
    setFormData({ tanggalMasuk: "", kodeBuku: "", keterangan: "", jumlahBuku: "" });

    /*
    -------------------------------------------------------------
    KODE INTEGRASI BACKEND 
    -------------------------------------------------------------
    const handleSubmit = async (e) => {
        e.preventDefault();

         // Validasi stok masuk (harus positif)
        if (formData.jumlahBuku && formData.jumlahBuku < 0) {
            alert("Jumlah stok masuk harus berupa angka positif!");
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
            setFormData({ tanggalMasuk: "", kodeBuku: "", keterangan: "", jumlahBuku: "" });
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
      <h1 className="title">Pencatatan Buku Masuk</h1>
      <form className="form" onSubmit={handleSubmit}>
        {/* Input Tanggal Masuk */}
        <div className="form-group">
          <label htmlFor="tanggalMasuk">Tanggal Masuk</label>
          <input
            type="date"
            id="tanggalMasuk"
            name="tanggalMasuk"
            value={formData.tanggalMasuk}
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
            placeholder="Masukkan keterangan stok masuk"
            value={formData.keterangan}
            onChange={handleChange}
          />
        </div>

        {/* Input Jumlah Buku */}
        <div className="form-group">
          <label htmlFor="jumlahBuku">Jumlah Buku Masuk</label>
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

export default StockMasuk;
