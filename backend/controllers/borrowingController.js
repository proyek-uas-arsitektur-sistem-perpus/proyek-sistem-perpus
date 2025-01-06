const db = require('../config/db');

// 1. Get All Borrowings
const getAllBorrowings = (req, res) => {
    const query = `
        SELECT peminjaman.*, 
               anggota_perpustakaan.nama_anggota AS nama_anggota, 
               buku.judul AS judul_buku
        FROM peminjaman
        JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
        JOIN buku ON copy_buku.kode_buku = buku.kode_buku
        JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan;
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

// 2. Add New Borrowing
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
            res.json({ message: 'Peminjaman berhasil ditambahkan', id_peminjaman: result.insertId });
        }
    });
};

// 3. Return Book
const returnBook = (req, res) => {
  const { id } = req.params; // ID dari peminjaman
  const { tgl_pengembalian } = req.body;

  // Query untuk update status di tabel peminjaman
  const updatePeminjamanQuery = `
    UPDATE peminjaman
    SET status_kembali = 1
    WHERE id_peminjaman = ?;
  `;

  // Query untuk menambahkan data ke tabel pengembalian
  const insertPengembalianQuery = `
    INSERT INTO pengembalian (id_peminjaman, tanggal_pengembalian, denda)
    VALUES (?, ?, ?);
  `;

  // Cari data peminjaman untuk menghitung denda
  const fetchBorrowingQuery = `
    SELECT tanggal_kembali
    FROM peminjaman
    WHERE id_peminjaman = ?;
  `;

  db.query(fetchBorrowingQuery, [id], (err, results) => {
    if (err) {
      console.error('Error fetching borrowing:', err);
      return res.status(500).json({ error: 'Database error' });
    }

    if (results.length > 0) {
      const { tanggal_kembali } = results[0];
      const dueDate = new Date(tanggal_kembali);
      const returnDate = new Date(tgl_pengembalian);
      const penaltyPerDay = 5000;

      const diffTime = returnDate - dueDate;
      const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
      const denda = diffDays * penaltyPerDay;

      // Update status peminjaman
      db.query(updatePeminjamanQuery, [id], (err) => {
        if (err) {
          console.error('Error updating peminjaman:', err);
          return res.status(500).json({ error: 'Database error' });
        }

        // Insert ke tabel pengembalian
        db.query(insertPengembalianQuery, [id, tgl_pengembalian, denda], (err) => {
          if (err) {
            console.error('Error inserting pengembalian:', err);
            return res.status(500).json({ error: 'Database error' });
          }

          res.json({ message: 'Buku berhasil dikembalikan!', denda });
        });
      });
    } else {
      res.status(404).json({ error: 'Peminjaman tidak ditemukan' });
    }
  });
};

// 4. Calculate Penalty
const calculatePenalty = (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT tanggal_kembali, tanggal_pengembalian
        FROM peminjaman
        WHERE id_peminjaman = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error calculating penalty:', err);
            res.status(500).json({ error: 'Database error' });
        } else if (results.length > 0) {
            const { tanggal_kembali, tanggal_pengembalian } = results[0];
            const dueDate = new Date(tanggal_kembali);
            const returnDate = new Date(tanggal_pengembalian || new Date());
            const penaltyPerDay = 5000;

            const diffTime = returnDate - dueDate;
            const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));
            const penalty = diffDays * penaltyPerDay;

            res.json({ penalty });
        } else {
            res.status(404).json({ error: 'Data peminjaman tidak ditemukan' });
        }
    });
};

// 5. Get Borrowing Details by ID
const getBorrowingById = (req, res) => {
    const { id } = req.params;
    const query = `
        SELECT peminjaman.*, 
               anggota_perpustakaan.nama_anggota AS nama_anggota, 
               buku.judul AS judul_buku
        FROM peminjaman
        JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
        JOIN buku ON copy_buku.kode_buku = buku.kode_buku
        JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan
        WHERE peminjaman.id_peminjaman = ?;
    `;
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching borrowing by ID:', err);
            res.status(500).json({ error: 'Database error' });
        } else if (results.length > 0) {
            res.json(results[0]);
        } else {
            res.status(404).json({ error: 'Peminjaman tidak ditemukan' });
        }
    });
};

// 6. Get All Penalties
const getPenalties = (req, res) => {
    const query = `
        SELECT denda.*, 
               peminjaman.id_copy, 
               anggota_perpustakaan.nama_anggota
        FROM denda
        JOIN peminjaman ON denda.id_peminjaman = peminjaman.id_peminjaman
        JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan;
    `;
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching penalties:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json(results);
        }
    });
};

// 7. Delete Penalty
const deletePenalty = (req, res) => {
    const { id } = req.params;
    const query = `DELETE FROM denda WHERE id_denda = ?;`;
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error deleting penalty:', err);
            res.status(500).json({ error: 'Database error' });
        } else {
            res.json({ message: 'Denda berhasil dihapus' });
        }
    });
};

// 8. Calculate Late Fee
const calculateLateFee = (tanggal_kembali, tanggal_pengembalian) => {
  const dueDate = new Date(tanggal_kembali);
  const returnDate = new Date(tanggal_pengembalian);
  const penaltyPerDay = 5000; // Rp5.000 per hari keterlambatan

  const diffTime = returnDate - dueDate;
  const diffDays = Math.max(0, Math.ceil(diffTime / (1000 * 60 * 60 * 24)));

  return diffDays * penaltyPerDay;
};

// 9. Get All Returns
const getAllReturns = (req, res) => {
    const query = `
        SELECT pengembalian.*, 
               peminjaman.id_copy, 
               anggota_perpustakaan.nama_anggota, 
               buku.judul AS judul_buku
        FROM pengembalian
        JOIN peminjaman ON pengembalian.id_peminjaman = peminjaman.id_peminjaman
        JOIN copy_buku ON peminjaman.id_copy = copy_buku.id_copy
        JOIN buku ON copy_buku.kode_buku = buku.kode_buku
        JOIN anggota_perpustakaan ON peminjaman.id_anggota_perpustakaan = anggota_perpustakaan.id_anggota_perpustakaan;
    `;

    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching returns:', err); // Log error
            res.status(500).json({ error: 'Database error' });
        } else {
            console.log('Results:', results); // Log hasil query
            res.json(results);
        }
    });
};


module.exports = {
    getAllBorrowings,
    addBorrowing,
    returnBook,
    calculatePenalty,
    getBorrowingById,
    getPenalties,
    deletePenalty,
    calculateLateFee,
    getAllReturns,
};
