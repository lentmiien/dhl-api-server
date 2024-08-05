const express = require('express');
const router = express.Router();
const dhlController = require('../controllers/dhlController');
const authMiddleware = require('../middlewares/authMiddleware');

router.post('/generate-label/:orderId', authMiddleware, dhlController.generateLabel);

module.exports = router;