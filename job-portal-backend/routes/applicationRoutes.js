const express = require('express');
const {
    createApplication,
    getApplicationsForJob,
    getApplicationsByUser,
} = require('../controllers/applicationController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createApplication);
router.get('/job/:jobId', protect, getApplicationsForJob);
router.get('/user', protect, getApplicationsByUser);

module.exports = router;
