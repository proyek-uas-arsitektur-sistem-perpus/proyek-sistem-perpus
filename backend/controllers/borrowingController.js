const db = require('../config/db');

// Mendapatkan semua peminjaman
const getAllBorrowings = (req, res) => {
  const query = `
    SELECT peminjaman.*, anggota_perpustakaan.nama_anggota, buku.judul,
    DATE_FORMAT(tanggal_pinjam, '%Y-%m-%d') AS tgl_pinjam,
    DATE_FORMAT(tanggal_kembali, '%Y-%m-%d') AS tgl_kembali
    FROM peminjaman
    JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan
    JOIN buku ON peminjaman.id_copy = buku.id_buku;
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


// Menambah peminjaman baru
const addBorrowing = (req, res) => {
  const { id_anggota_perpustakaan, id_copy, tgl_pinjam, tgl_kembali } = req.body;
  const query = `
    INSERT INTO peminjaman (id_anggota_perpustakaan, id_copy, tanggal_pinjam, tanggal_kembali)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, [id_anggota_perpustakaan, id_copy, tgl_pinjam, tgl_kembali], (err, result) => {
    if (err) {
      console.error('Error adding borrowing:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Borrowing added successfully', id: result.insertId });
    }
  });
};

// Mengembalikan buku
const returnBook = (req, res) => {
  const { id } = req.params;
  const { tanggal_kembali } = req.body; // Sesuaikan nama kolom
  const query = `
    UPDATE peminjaman 
    SET status_kembali = 1, tanggal_kembali = ?
    WHERE id_peminjaman = ?
  `;
  db.query(query, [tanggal_kembali, id], (err) => {
    if (err) {
      console.error('Error returning book:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Book returned successfully' });
    }
  });
};


// Mendapatkan detail peminjaman
const getBorrowingDetails = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT peminjaman.*, anggota_perpustakaan.nama_anggota, buku.judul
    FROM peminjaman
    JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan
    JOIN buku ON peminjaman.id_buku = buku.id_buku
    WHERE peminjaman.id_peminjaman = ?;
  `;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching borrowing details:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results[0]);
    }
  });
};

// Menghitung denda
const calculatePenalty = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT tgl_kembali, tgl_pengembalian
    FROM peminjaman
    WHERE id_peminjaman = ?;
  `;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error calculating penalty:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      const { tgl_kembali, tgl_pengembalian } = results[0];
      const dueDate = new Date(tgl_kembali);
      const returnDate = new Date(tgl_pengembalian);
      const penaltyPerDay = 5000;

      const diffTime = returnDate - dueDate;
      const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

      const penalty = diffDays * penaltyPerDay;
      res.json({ penalty });
    }
  });
};

// Menghapus peminjaman
const deleteBorrowing = (req, res) => {
  const { id } = req.params;
  const query = 'DELETE FROM peminjaman WHERE id_peminjaman = ?';
  db.query(query, [id], (err) => {
    if (err) {
      console.error('Error deleting borrowing:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Borrowing deleted successfully' });
    }
  });
};

module.exports = {
  getAllBorrowings,
  addBorrowing,
  returnBook,
  getBorrowingDetails,
  calculatePenalty,
  deleteBorrowing,
};
