const express = require('express');
const router = express.Router();
const { getAllUser, addUser } = require('../controllers/userController');

// Route untuk mendapatkan semua pengguna (GET)
router.get('/', getAllUser);

// Route untuk menambah pengguna baru (POST)
router.post('/', addUser);

module.exports = router;
