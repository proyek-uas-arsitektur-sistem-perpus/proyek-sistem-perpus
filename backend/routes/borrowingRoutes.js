const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

// Route yang lebih spesifik
router.get('/returns', borrowingController.getAllReturns);
router.get('/penalties', borrowingController.getPenalties);
router.get('/:id/penalty', borrowingController.calculatePenalty);
router.get('/:id', borrowingController.getBorrowingById);

// Route umum
router.put('/:id/return', borrowingController.returnBook);
router.post('/', borrowingController.addBorrowing);
router.delete('/penalties/:id', borrowingController.deletePenalty);
router.get('/', borrowingController.getAllBorrowings);

module.exports = router;
