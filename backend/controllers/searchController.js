const db = require("../config/db");

// Fungsi untuk mencari buku berdasarkan judul
const searchBooks = (req, res) => {
  const { keyword } = req.query;
  const query = "SELECT * FROM buku WHERE judul LIKE ? OR kategori LIKE ?";
  const searchParam = `%${keyword}%`;

  db.query(query, [searchParam, searchParam], (err, results) => {
      if (err) {
          console.error("Error searching books:", err);
          res.status(500).json({ message: "Failed to search books" });
      } else {
          res.status(200).json(results);
      }
  });

  const likeKeyword = `%${keyword}%`;
  db.query(query, [likeKeyword, likeKeyword, likeKeyword], (err, results) => {
    if (err) {
      console.error("Error searching books:", err);
      return res.status(500).json({ error: "Gagal mencari buku." });
    }
    res.status(200).json(results);
  });
};

module.exports = { searchBooks };
