const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

// Endpoint untuk mendapatkan semua data peminjaman
router.get('/', borrowingController.getAllBorrowings);
// Endpoint untuk menambah peminjaman baru
router.post('/', borrowingController.addBorrowing);
// Endpoint untuk mengembalikan buku (update status_kembali dan tgl_pengembalian)
router.put('/:id/return', borrowingController.returnBook);
// Endpoint untuk mendapatkan detail peminjaman berdasarkan ID
router.get('/:id/details', borrowingController.getBorrowingDetails);
// Endpoint untuk menghitung denda berdasarkan ID peminjaman
router.get('/:id/penalty', borrowingController.calculatePenalty);
// Endpoint untuk menghapus data peminjaman berdasarkan ID
router.delete('/:id', borrowingController.deleteBorrowing);

module.exports = router;
