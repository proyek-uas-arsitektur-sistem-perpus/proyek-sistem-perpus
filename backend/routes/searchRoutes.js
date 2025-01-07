const express = require('express');
const { searchBooks } = require('../controllers/searchController');
const { getCategories } = require('../controllers/catalogController');
const router = express.Router();

router.get('/books', searchBooks); // Endpoint pencarian buku
router.get('/categories', getCategories); // Endpoint kategori buku

module.exports = router;
