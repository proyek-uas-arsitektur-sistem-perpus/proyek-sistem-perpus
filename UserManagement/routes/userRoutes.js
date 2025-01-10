const express = require('express');
const router = express.Router();
const { loginUser, registerUser, getAllUsers, addUser, updateUser, deleteUser } = require('../controllers/userController')

// **Route Login**
router.post('/login', loginUser);

// **Route Registrasi**
router.post('/register', registerUser);

// Rute untuk mendapatkan semua pengguna
router.get('/users', getAllUsers);

// Rute untuk menambah pengguna
router.post('/users', addUser);

// Rute untuk memperbarui pengguna
router.put('/users/:id', updateUser);

// Rute untuk menghapus pengguna
router.delete('/users/:id', deleteUser);

module.exports = router;