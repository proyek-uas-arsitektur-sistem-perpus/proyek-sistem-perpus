const db = require("../config/db");

// Fungsi untuk mencari buku berdasarkan judul atau kategori
const searchBooks = (req, res) => {
  const { keyword } = req.query; // Ambil parameter keyword dari query string

  if (!keyword) {
    return res.status(400).json({ message: "Keyword pencarian harus diberikan" });
  }

  const query = "SELECT * FROM buku WHERE judul LIKE ? OR kategori LIKE ?";
  const likeKeyword = `%${keyword}%`;

  db.query(query, [likeKeyword, likeKeyword], (err, results) => {
    if (err) {
      console.error("Error searching books:", err);
      return res.status(500).json({ message: "Terjadi kesalahan pada server" });
    }

    // Kirim hasil pencarian
    res.status(200).json(results);
  });
};

module.exports = { searchBooks };
