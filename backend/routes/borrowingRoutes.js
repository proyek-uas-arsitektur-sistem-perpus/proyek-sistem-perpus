const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');
const returnController = require('../controllers/returnController');
const penaltyController = require('../controllers/penaltyController');

// Rute untuk peminjaman
router.get('/', borrowingController.getAllBorrowings);
router.post('/', borrowingController.addBorrowing);

// Rute untuk pengembalian
router.post('/return', returnController.addReturn);

// Rute untuk denda
router.post('/penalty', penaltyController.addPenalty);

module.exports = router;
