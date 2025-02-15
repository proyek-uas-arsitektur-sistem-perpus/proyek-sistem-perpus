const express = require("express");
const {
  getBooks,
  addStock,
  getLaporanStokMasuk,
  getLaporanStokKeluar,
  getLaporanStok, 
} = require("../controllers/stockController");

const router = express.Router();

// Endpoint untuk mendapatkan daftar buku
router.get("/buku", getBooks);

// Endpoint untuk menambahkan stok (baik masuk maupun keluar)
router.post("/", addStock);

// Endpoint untuk mendapatkan laporan stok masuk
router.get("/laporan/masuk", getLaporanStokMasuk);

// Endpoint untuk mendapatkan laporan stok keluar
router.get("/laporan/keluar", getLaporanStokKeluar);

// Endpoint untuk mendapatkan laporan stok gabungan
router.get("/laporan-stok", getLaporanStok);

module.exports = router;
