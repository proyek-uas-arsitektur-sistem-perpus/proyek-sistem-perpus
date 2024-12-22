const db = require('../config/db');

// Mendapatkan semua pengguna
const getAllUser = (req, res) => {
  const sql = 'SELECT * FROM user';  // pastikan tabelnya benar sesuai dengan nama tabel Anda
  db.query(sql, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
};

// Menambah pengguna baru
const addUser = (req, res) => {
  const { nama, no_telepon, email, username, password, id_anggota, id_staf_perpustakaan } = req.body;
  const sql = `INSERT INTO user (nama, no_telepon, email, username, password, id_anggota, id_staf_perpustakaan) 
               VALUES (?, ?, ?, ?, ?, ?, ?)`;

  db.query(sql, [nama, no_telepon, email, username, password, id_anggota, id_staf_perpustakaan], (err, result) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.status(201).json({ message: 'User added successfully', userId: result.insertId });
  });
};

module.exports = {
  getAllUser,
  addUser
};
