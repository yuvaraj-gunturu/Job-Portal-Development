const Job = require('../models/Job');

// Create a Job
const createJob = async (req, res) => {
    const { title, description, requirements, location, jobType, salaryRange } = req.body;
    try {
        const job = await Job.create({
            employerId: req.user._id,
            title,
            description,
            requirements,
            location,
            jobType,
            salaryRange,
        });
        res.status(201).json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get All Jobs
const getJobs = async (req, res) => {
    try {
        const jobs = await Job.find().populate('employerId', 'companyName');
        res.json(jobs);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Job by ID
const getJobById = async (req, res) => {
    try {
        const job = await Job.findById(req.params.id).populate('employerId', 'companyName');
        if (!job) return res.status(404).json({ message: 'Job not found' });
        res.json(job);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createJob, getJobs, getJobById };
