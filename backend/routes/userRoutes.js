const express = require('express');
const router = express.Router();
const { loginUser, registerUser } = require('../controllers/userController');

// **Route Login**
router.post('/login', loginUser);

// **Route Registrasi**
router.post('/register', registerUser);

module.exports = router;
