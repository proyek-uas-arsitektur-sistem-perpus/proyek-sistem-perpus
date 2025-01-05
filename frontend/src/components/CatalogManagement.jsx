import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Databuku from "./pages/Databuku";
import TambahBuku from "./pages/TambahBuku";

const CatalogManagement = () => {
  // State utama untuk menyimpan daftar buku
  const [bukuList, setBukuList] = useState([
    {
      no: 1,
      sampul: "https://via.placeholder.com/50",
      bukuId: "BK001",
      isbn: "978-602-8758-07-9",
      judul: "Matematika Diskrit",
      kategori: "Buku",
      rak: "Rak 3",
      penerbit: "INFORMATIKA Bandung",
      tahun: 2010,
      stok: 10,
      dipinjam: 1,
    },
  ]);

  // Fungsi untuk menambahkan buku baru
  const addBook = (newBook) => {
    setBukuList((prevBukuList) => [
      ...prevBukuList,
      { ...newBook, no: prevBukuList.length + 1 },
    ]);
  };

  return (
    <Router>
      <Routes>
        {/* Berikan `bukuList` ke Databuku */}
        <Route path="/data-buku" element={<Databuku bukuList={bukuList} />} />
        {/* Berikan `addBook` ke TambahBuku */}
        <Route path="/tambah-buku" element={<TambahBuku addBook={addBook} />} />
      </Routes>
    </Router>
  );
};

export default CatalogManagement;
