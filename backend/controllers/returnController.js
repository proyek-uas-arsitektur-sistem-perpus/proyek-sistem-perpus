const db = require('../config/db');

// Tambahkan pengembalian buku
const addReturn = (req, res) => {
  const { id_peminjaman, tanggal_pengembalian, denda } = req.body;
  const query = `
    INSERT INTO pengembalian (id_peminjaman, tanggal_pengembalian, denda)
    VALUES (?, ?, ?);
  `;
  db.query(query, [id_peminjaman, tanggal_pengembalian, denda], (err) => {
    if (err) {
      console.error('Error adding return:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Return added successfully' });
    }
  });
};

module.exports = {
  addReturn,
};
