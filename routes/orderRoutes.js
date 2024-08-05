const express = require('express');
const router = express.Router();
const orderController = require('../controllers/orderController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/upload-csv', authMiddleware, orderController.uploadCSV);
// Additional routes for order functionalities

module.exports = router;