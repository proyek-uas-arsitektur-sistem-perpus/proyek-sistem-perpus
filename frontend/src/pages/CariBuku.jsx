import { useState, useEffect } from "react";
import axios from "axios";
import "./CariBuku.css";

const CariBuku = () => {
  // State untuk menyimpan daftar buku dan kategori
  const [bukuList, setBukuList] = useState([]);
  const [categories, setCategories] = useState([]); // Daftar kategori
  const [selectedCategory, setSelectedCategory] = useState(""); // Kategori yang dipilih

  // Fungsi untuk mengambil data buku dari server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/catalog/books") // URL endpoint backend untuk data buku
      .then((response) => {
        setBukuList(response.data); // Simpan data buku ke state
      })
      .catch((error) => {
        console.error("Error fetching data from server:", error); // Tampilkan error jika ada
      });
  }, []);

  // Fungsi untuk mengambil daftar kategori dari server
  useEffect(() => {
    axios
      .get("http://localhost:5000/api/catalog/categories") // Endpoint untuk mendapatkan daftar kategori
      .then((response) => {
        const serverCategories = response.data;

        // Tambahkan kategori tambahan secara manual
        const additionalCategories = [
          { id_kategori: 9991, nama_kategori: "Teknik Informatika" },
          { id_kategori: 9992, nama_kategori: "Sains" },
          { id_kategori: 9993, nama_kategori: "Ilmu Komputer" },
          { id_kategori: 9994, nama_kategori: "Desain" },
          { id_kategori: 9995, nama_kategori: "Manajemen" },
        ];

        // Gabungkan kategori dari server dan tambahan
        setCategories([...serverCategories, ...additionalCategories]);
      })
      .catch((error) => {
        console.error("Error fetching categories from server:", error); // Tampilkan error jika ada
      });
  }, []);

  // Fungsi untuk menangani perubahan kategori
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    // Jika kategori kosong, ambil semua data buku
    if (category === "") {
      axios
        .get("http://localhost:5000/api/catalog/books")
        .then((response) => {
          setBukuList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data from server:", error);
        });
    } else {
      // Jika kategori dipilih, filter data buku berdasarkan kategori
      axios
        .get(`http://localhost:5000/api/catalog/books?category=${category}`)
        .then((response) => {
          setBukuList(response.data);
        })
        .catch((error) => {
          console.error("Error fetching filtered data from server:", error);
        });
    }
  };

  return (
    <div className="cari-buku-container">
      <div className="header">
        <h2 className="page-title">
          <i className="fas fa-book"></i> Cari Buku
        </h2>
      </div>

      <div className="table-container">
        

        <table className="data-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Kode Buku</th>
              <th>Judul Buku</th>
              <th>Kategori</th>
              <th>Penerbit</th>
              <th>Tahun</th>
            </tr>
          </thead>
          <tbody>
            {bukuList.length > 0 ? (
              bukuList.map((buku, index) => (
                <tr key={buku.id_buku}>
                  <td>{index + 1}</td>
                  <td>{buku.kode_buku}</td>
                  <td>{buku.judul}</td>
                  <td>{buku.kategori}</td>
                  <td>{buku.penerbit}</td>
                  <td>{buku.tahun_terbit}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Tidak ada data buku
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CariBuku;
