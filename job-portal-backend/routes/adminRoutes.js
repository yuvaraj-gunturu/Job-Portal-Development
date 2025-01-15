const express = require('express');
const { getAllUsers, updateAdminPermissions } = require('../controllers/adminController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.get('/users', protect, getAllUsers);
router.put('/permissions', protect, updateAdminPermissions);

module.exports = router;
