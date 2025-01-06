const express = require("express");
const {
  getAllBooks,
  getBookById,
  addBook,
  deleteBook,
} = require("../controllers/catalogController");

const router = express.Router();

// Endpoint untuk mendapatkan semua data buku
router.get("/books", getAllBooks);

// Endpoint untuk mendapatkan buku berdasarkan ID
router.get("/books/:id", getBookById);

// Endpoint untuk menambahkan buku baru
router.post("/books", addBook);

// Endpoint untuk menghapus buku berdasarkan ID
router.delete("/books/:id", deleteBook);

module.exports = router;
