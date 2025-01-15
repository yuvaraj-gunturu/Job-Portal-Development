const express = require('express');
const {
    createJobSeekerProfile,
    getJobSeekerProfile,
    updateJobSeekerProfile,
} = require('../controllers/jobSeekerProfileController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createJobSeekerProfile);
router.get('/me', protect, getJobSeekerProfile);
router.put('/update', protect, updateJobSeekerProfile);

module.exports = router;
