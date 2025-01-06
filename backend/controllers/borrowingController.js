const db = require('../config/db');

const getAllBorrowings = (req, res) => {
  const query = 'SELECT * FROM peminjaman';
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching borrowings:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results);
    }
  });
};

const addBorrowing = (req, res) => {
  const { id_anggota_perpustakaan, id_buku, tgl_pinjam, tgl_kembali } = req.body;
  const query = `
    INSERT INTO peminjaman (id_anggota_perpustakaan, id_buku, tgl_pinjam, tgl_kembali)
    VALUES (?, ?, ?, ?)
  `;
  db.query(query, [id_anggota_perpustakaan, id_buku, tgl_pinjam, tgl_kembali], (err, result) => {
    if (err) {
      console.error('Error adding borrowing:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Borrowing added successfully', id: result.insertId });
    }
  });
};

const returnBook = (req, res) => {
  const { id } = req.params;
  const { tgl_pengembalian } = req.body;
  const query = `
    UPDATE peminjaman 
    SET status_kembali = 1, tgl_pengembalian = ?
    WHERE id_peminjaman = ?
  `;
  db.query(query, [tgl_pengembalian, id], (err) => {
    if (err) {
      console.error('Error returning book:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Book returned successfully' });
    }
  });
};

const calculatePenalty = (req, res) => {
  const { id } = req.params;
  const query = `
    SELECT tgl_kembali, tgl_pengembalian 
    FROM peminjaman 
    WHERE id_peminjaman = ?
  `;
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error calculating penalty:', err);
      res.status(500).json({ error: 'Database error' });
    }

    const { tgl_kembali, tgl_pengembalian } = results[0];
    const dueDate = new Date(tgl_kembali);
    const returnDate = new Date(tgl_pengembalian);
    const penaltyPerDay = 5000;

    const diffTime = returnDate - dueDate;
    const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

    const penalty = diffDays * penaltyPerDay;

    res.json({ penalty });
  });
};

const getBorrowingById = (req, res) => {
  const { id } = req.params;
  const query = 'SELECT * FROM peminjaman WHERE id_peminjaman = ?';
  db.query(query, [id], (err, results) => {
    if (err) {
      console.error('Error fetching borrowing by ID:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json(results[0]);
    }
  });
};

module.exports = {
  getAllBorrowings,
  addBorrowing,
  returnBook,
  calculatePenalty,
  getBorrowingById,
};