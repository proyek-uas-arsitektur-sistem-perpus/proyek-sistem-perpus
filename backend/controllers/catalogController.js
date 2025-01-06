const db = require('../config/db');

// Mendapatkan semua data buku
const getAllBooks = (req, res) => {
    const query = 'SELECT * FROM buku';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ message: 'Failed to fetch data' });
        } else {
            res.status(200).json(results);
        }
    });
};

// Mendapatkan buku berdasarkan ID
const getBookById = (req, res) => {
    const { id } = req.params;
    const query = 'SELECT * FROM buku WHERE id_buku = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error fetching data:', err);
            res.status(500).json({ message: 'Failed to fetch data' });
        } else if (results.length === 0) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.status(200).json(results[0]);
        }
    });
};

// Menambahkan buku baru
const addBook = (req, res) => {
    const { kode_buku, judul, kategori, penerbit, tahun_terbit } = req.body;
    const query = 'INSERT INTO buku (kode_buku, judul, kategori, penerbit, tahun_terbit) VALUES (?, ?, ?, ?, ?)';
    db.query(query, [kode_buku, judul, kategori, penerbit, tahun_terbit], (err, results) => {
        if (err) {
            console.error('Error adding book:', err);
            res.status(500).json({ message: 'Failed to add book' });
        } else {
            res.status(201).json({ message: 'Book added successfully', id: results.insertId });
        }
    });
};

// Menghapus buku berdasarkan ID
const deleteBook = (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM buku WHERE id_buku = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error deleting book:', err);
            res.status(500).json({ message: 'Failed to delete book' });
        } else if (results.affectedRows === 0) {
            res.status(404).json({ message: 'Book not found' });
        } else {
            res.status(200).json({ message: 'Book deleted successfully' });
        }
    });
};

module.exports = {
    getAllBooks,
    getBookById,
    addBook,
    deleteBook,
};
