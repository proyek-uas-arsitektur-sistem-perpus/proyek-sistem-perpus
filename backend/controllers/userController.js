const db = require('../config/db');

// **LOGIN USER**
const loginUser = (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ error: 'Username dan password harus diisi' });
  }

  const sql = 'SELECT * FROM user WHERE username = ? AND password = ?';
  db.query(sql, [username, password], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database Error' });
    }

    if (results.length === 0) {
      return res.status(401).json({ error: 'Username atau password salah' });
    }

    const user = results[0];
    res.status(200).json({
      message: 'Login berhasil',
      user: {
        id: user.id_user,
        username: user.username,
        role: user.role
      }
    });
  });
};

// **REGISTER USER**
const registerUser = (req, res) => {
  const { nama, username, no_telepon, email, password } = req.body;

  if (!nama || !username || !no_telepon || !email || !password) {
    return res.status(400).json({ error: 'Semua data harus diisi' });
  }

  const checkSql = 'SELECT * FROM user WHERE username = ?';
  db.query(checkSql, [username], (err, results) => {
    if (err) {
      console.error('Database error:', err);
      return res.status(500).json({ error: 'Database Error' });
    }

    if (results.length > 0) {
      return res.status(400).json({ error: 'NIK sudah terdaftar sebagai username' });
    }

    // Insert ke tabel anggota_perpustakaan
    const insertAnggotaSql = 'INSERT INTO anggota_perpustakaan (nama_anggota, nik, no_telepon, email) VALUES (?, ?, ?, ?)';
    db.query(insertAnggotaSql, [nama, username, no_telepon, email], (err, result) => {
      if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ error: 'Database Error' });
      }

      // Insert ke tabel user
      const insertUserSql = 'INSERT INTO user (username, password, role) VALUES (?, ?, "anggota")';
      db.query(insertUserSql, [username, password], (err, result) => {
        if (err) {
          console.error('Database error:', err);
          return res.status(500).json({ error: 'Database Error' });
        }

        res.status(201).json({ message: 'Registrasi berhasil' });
      });
    });
  });
};

module.exports = { loginUser, registerUser };
