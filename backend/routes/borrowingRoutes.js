const express = require('express');
const router = express.Router();
const borrowingController = require('../controllers/borrowingController');

router.get('/', borrowingController.getAllBorrowings);
router.post('/', borrowingController.addBorrowing);
router.put('/:id/return', borrowingController.returnBook);
router.get('/:id/penalty', borrowingController.calculatePenalty);
router.get('/:id', borrowingController.getBorrowingById);

module.exports = router;