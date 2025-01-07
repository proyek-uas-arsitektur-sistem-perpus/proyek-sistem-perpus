const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

// Route yang lebih spesifik
router.get('/returns', borrowingController.getAllReturns);
router.get('/penalties', borrowingController.getPenalties);
router.get('/:id/penalty', borrowingController.calculatePenalty);
router.get('/:id', borrowingController.getBorrowingById);

// Route umum
router.put('/:id/return', borrowingController.returnBook);
router.post('/', borrowingController.addBorrowing);
router.delete('/penalties/:id', borrowingController.deletePenalty);
router.get('/', borrowingController.getAllBorrowings);

router.get('/user-transactions', (req, res) => {
    const userId = req.query.userId; // Ambil ID pengguna dari query
  
    const query = `
        SELECT peminjaman.id_peminjaman,
               buku.judul,
               peminjaman.tanggal_pinjam,
               peminjaman.tanggal_kembali,
               peminjaman.status_kembali,
               pengembalian.tanggal_pengembalian
        FROM peminjaman
        LEFT JOIN pengembalian ON peminjaman.id_peminjaman = pengembalian.id_peminjaman
        LEFT JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
        LEFT JOIN buku ON copy_buku.kode_buku = buku.kode_buku
        WHERE peminjaman.id_anggota_perpustakaan = ?;
    `;
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error("Error fetching transactions:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json(results);
      }
    });
  });
  

  router.get('/user-penalties', (req, res) => {
    const userId = req.query.userId; // Ambil ID pengguna dari query
  
    const query = `
        SELECT denda.id_denda, 
               buku.judul, 
               denda.tanggal_denda, 
               denda.jumlah_denda
        FROM denda
        JOIN peminjaman ON denda.id_peminjaman = peminjaman.id_peminjaman
        JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
        JOIN buku ON copy_buku.kode_buku = buku.kode_buku
        WHERE peminjaman.id_anggota_perpustakaan = ?;
    `;
    db.query(query, [userId], (err, results) => {
      if (err) {
        console.error("Error fetching penalties:", err);
        res.status(500).json({ error: "Database error" });
      } else {
        res.json(results);
      }
    });
  });
  

module.exports = router;