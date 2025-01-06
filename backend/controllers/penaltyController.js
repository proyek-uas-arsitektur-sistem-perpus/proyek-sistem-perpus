const db = require('../config/db');

// Tambahkan denda
const addPenalty = (req, res) => {
  const { id_peminjaman, jumlah_denda, tanggal_denda } = req.body;
  const query = `
    INSERT INTO denda (id_peminjaman, jumlah_denda, tanggal_denda)
    VALUES (?, ?, ?);
  `;
  db.query(query, [id_peminjaman, jumlah_denda, tanggal_denda], (err) => {
    if (err) {
      console.error('Error adding penalty:', err);
      res.status(500).json({ error: 'Database error' });
    } else {
      res.json({ message: 'Penalty added successfully' });
    }
  });
};

module.exports = {
  addPenalty,
};
