import { useState, useEffect } from "react";
import axios from "axios";
import SearchFilter from "../components/SearchFilter"; // Komponen untuk pencarian
import "./CariBuku.css";

const CariBuku = () => {
  // State untuk menyimpan daftar buku dan kategori
  const [bukuList, setBukuList] = useState([]);
  const [categories, setCategories] = useState([]); // Daftar kategori
  const [selectedCategory, setSelectedCategory] = useState(""); // Kategori yang dipilih

  // Fungsi untuk mengambil semua data buku
  useEffect(() => {
    fetchBooks(); // Ambil data buku awal
    fetchCategories(); // Ambil data kategori
  }, []);

  // Ambil semua data buku
  const fetchBooks = () => {
    axios
      .get("http://localhost:5000/api/catalog/books")
      .then((response) => {
        setBukuList(response.data);
      })
      .catch((error) => {
        console.error("Error fetching books:", error);
      });
  };

  // Ambil daftar kategori dari server
  const fetchCategories = () => {
    axios
      .get("http://localhost:5000/api/catalog/categories")
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

        setCategories([...serverCategories, ...additionalCategories]);
      })
      .catch((error) => {
        console.error("Error fetching categories:", error);
      });
  };

  // Fungsi untuk pencarian buku berdasarkan kategori
  const handleCategoryChange = (e) => {
    const category = e.target.value;
    setSelectedCategory(category);

    if (category === "") {
      // Jika kategori kosong, ambil semua data buku
      fetchBooks();
    } else {
      axios
        .get(`http://localhost:5000/api/catalog/books?category=${category}`)
        .then((response) => {
          setBukuList(response.data);
        })
        .catch((error) => {
          console.error("Error filtering books by category:", error);
        });
    }
  };

  // Fungsi untuk pencarian buku berdasarkan keyword
  const handleSearch = (keyword) => {
    if (keyword.trim() === "") {
      fetchBooks(); // Jika pencarian kosong, ambil semua buku
    } else {
      axios
        .get(`http://localhost:5000/api/search/books?keyword=${keyword}`)
        .then((response) => {
          setBukuList(response.data);
        })
        .catch((error) => {
          console.error("Error searching books:", error);
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
        <div className="action-buttons">
          <select
            className="btn-secondary"
            value={selectedCategory}
            onChange={handleCategoryChange}
          >
            <option value="">Semua Kategori</option>
            {categories.map((category) => (
              <option key={category.id_kategori} value={category.nama_kategori}>
                {category.nama_kategori}
              </option>
            ))}
          </select>
          <SearchFilter onSearch={handleSearch} />
        </div>

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
