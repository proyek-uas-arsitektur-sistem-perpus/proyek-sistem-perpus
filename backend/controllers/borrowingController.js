const db = require('../config/db');

// Ambil semua data peminjaman
const getAllBorrowings = (req, res) => {
  const query = `
    SELECT peminjaman.*, anggota_perpustakaan.nama_anggota, buku.judul
    FROM peminjaman
    JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan
    JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
    JOIN buku ON copy_buku.id_buku = buku.id_buku;
  `;
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching borrowings:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};

// Tambahkan peminjaman
const addBorrowing = (req, res) => {
  const { id_copy, id_anggota_perpustakaan, tanggal_pinjam, tanggal_kembali } = req.body;
  const query = `
    INSERT INTO peminjaman (id_copy, id_anggota_perpustakaan, tanggal_pinjam, tanggal_kembali)
    VALUES (?, ?, ?, ?);
  `;
  db.query(query, [id_copy, id_anggota_perpustakaan, tanggal_pinjam, tanggal_kembali], (err, result) => {
    if (err) {
      console.error('Error adding borrowing:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Borrowing added successfully', id: result.insertId });
    }
  });
};

module.exports = {
  getAllBorrowings,
  addBorrowing,
};
