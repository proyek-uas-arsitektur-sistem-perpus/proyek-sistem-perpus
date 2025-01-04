const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

router.post('/', borrowingController.createBorrowing);
router.get('/', borrowingController.getBorrowings);
router.put('/:id_peminjaman/return', borrowingController.returnBorrowing);
router.get('/fines', borrowingController.getFines);

module.exports = router;
