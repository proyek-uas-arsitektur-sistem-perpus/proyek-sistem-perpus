const express = require('express');
const router = express.Router();

// Mock database of books
const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', category: 'Fiction' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', category: 'Classic' },
  { id: 3, title: '1984', author: 'George Orwell', category: 'Dystopian' },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', category: 'Adventure' },
  { id: 5, title: 'Pride and Prejudice', author: 'Jane Austen', category: 'Romance' },
];

// Search controller
router.get('/searchController', (req, res) => {
  const { title, author, category } = req.query;

  let filteredBooks = books;

  if (title) {
    filteredBooks = filteredBooks.filter((book) =>
      book.title.toLowerCase().includes(title.toLowerCase())
    );
  }

  if (author) {
    filteredBooks = filteredBooks.filter((book) =>
      book.author.toLowerCase().includes(author.toLowerCase())
    );
  }

  if (category) {
    filteredBooks = filteredBooks.filter((book) =>
      book.category.toLowerCase().includes(category.toLowerCase())
    );
  }

  res.json(filteredBooks);
});

module.exports = router;
