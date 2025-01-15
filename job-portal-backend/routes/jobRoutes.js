const express = require('express');
const { createJob, getJobs, getJobById } = require('../controllers/jobController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/create', protect, createJob);
router.get('/', getJobs);
router.get('/:id', getJobById);

module.exports = router;
