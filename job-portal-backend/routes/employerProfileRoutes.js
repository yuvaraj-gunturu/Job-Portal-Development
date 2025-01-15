const express = require('express');
const {
    createEmployerProfile,
    getEmployerProfile,
    updateEmployerProfile,
} = require('../controllers/employerProfileController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createEmployerProfile);
router.get('/me', protect, getEmployerProfile);
router.put('/update', protect, updateEmployerProfile);

module.exports = router;
