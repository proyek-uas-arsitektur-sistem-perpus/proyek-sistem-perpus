const db = require('../config/db');

// Tambah peminjaman baru
exports.createBorrowing = async (req, res) => {
  const { id_anggota, id_buku, tanggal_pinjam, tanggal_kembali } = req.body;
  try {
    const query = `
      INSERT INTO borrowing (id_anggota, id_buku, tanggal_pinjam, tanggal_kembali)
      VALUES (?, ?, ?, ?)
    `;
    await db.execute(query, [id_anggota, id_buku, tanggal_pinjam, tanggal_kembali]);
    res.status(201).json({ message: 'Peminjaman berhasil ditambahkan!' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat menambah peminjaman' });
  }
};

// Ambil semua peminjaman
exports.getBorrowings = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT * FROM borrowing
    `);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil peminjaman' });
  }
};

// Update pengembalian buku
exports.returnBorrowing = async (req, res) => {
  const { id_peminjaman } = req.params;
  const { tanggal_pengembalian, id_denda } = req.body;
  try {
    await db.execute(`
      UPDATE borrowing
      SET status_kembali = TRUE
      WHERE id_peminjaman = ?
    `, [id_peminjaman]);

    await db.execute(`
      INSERT INTO pengembalian (id_peminjaman, tanggal_pengembalian, id_denda)
      VALUES (?, ?, ?)
    `, [id_peminjaman, tanggal_pengembalian, id_denda]);

    res.status(200).json({ message: 'Buku berhasil dikembalikan!' });
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengembalikan buku' });
  }
};

// Ambil daftar denda
exports.getFines = async (req, res) => {
  try {
    const [rows] = await db.execute(`
      SELECT * FROM denda
    `);
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json({ error: 'Terjadi kesalahan saat mengambil daftar denda' });
  }
};
