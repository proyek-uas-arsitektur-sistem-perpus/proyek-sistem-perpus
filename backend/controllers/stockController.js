const db = require("../config/db");

// Mendapatkan daftar buku
const getBooks = (req, res) => {
  const query = "SELECT id_buku AS id, kode_buku AS kode_buku, judul FROM buku";

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error saat mengambil data buku:", err);
      res.status(500).send("Gagal mengambil data buku");
      return;
    }
    res.status(200).json(results);
  });
};

// Menambahkan stok buku (baik masuk maupun keluar)
const addStock = (req, res) => {
  const { tanggal, kodeBuku, keterangan, jumlah } = req.body;

  // Validasi data
  if (!tanggal || !kodeBuku || !jumlah || jumlah === 0) {
    return res.status(400).send("Data tidak valid! Jumlah tidak boleh nol.");
  }

  const query = `
    INSERT INTO stock (kode_buku, jumlah, tgl_stock, keterangan)
    VALUES (?, ?, ?, ?)
  `;

  db.query(query, [kodeBuku, jumlah, tanggal, keterangan], (err, results) => {
    if (err) {
      console.error("Error saat menyimpan stok:", err);
      res.status(500).send("Gagal menyimpan stok");
      return;
    }
    res.status(201).send("Stok berhasil disimpan");
  });
};

// Mendapatkan laporan stok masuk
const getLaporanStokMasuk = (req, res) => {
  const query = `
    SELECT s.id_stock, s.kode_buku, b.judul, s.jumlah, s.tgl_stock, s.keterangan
    FROM stock s
    JOIN buku b ON s.kode_buku = b.kode_buku
    WHERE s.jumlah > 0
    ORDER BY s.tgl_stock DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error saat mengambil laporan stok masuk:", err);
      res.status(500).send("Gagal mengambil laporan stok masuk");
      return;
    }
    res.status(200).json(results);
  });
};

// Mendapatkan laporan stok keluar
const getLaporanStokKeluar = (req, res) => {
  const query = `
    SELECT s.id_stock, s.kode_buku, b.judul, s.jumlah, s.tgl_stock, s.keterangan
    FROM stock s
    JOIN buku b ON s.kode_buku = b.kode_buku
    WHERE s.jumlah < 0
    ORDER BY s.tgl_stock DESC
  `;

  db.query(query, (err, results) => {
    if (err) {
      console.error("Error saat mengambil laporan stok keluar:", err);
      res.status(500).send("Gagal mengambil laporan stok keluar");
      return;
    }
    res.status(200).json(results);
  });
};



module.exports = {
  getBooks,
  addStock,
  getLaporanStokMasuk,
  getLaporanStokKeluar,
};
