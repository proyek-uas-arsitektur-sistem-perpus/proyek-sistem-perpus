const express = require('express');
const {
    getAllBooks,
    getBookById,
    addBook,
    updateBook,
    deleteBook,
    getCategories,
} = require('../controllers/catalogController');

const router = express.Router();

router.get('/books', getAllBooks);
router.get('/books/:id', getBookById);
router.post('/books', addBook);
router.put('/books/:id', updateBook);
router.delete('/books/:id', deleteBook);
router.get('/categories', getCategories);

module.exports = router;
