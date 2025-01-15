const Application = require('../models/Application');

// Create an Application
const createApplication = async (req, res) => {
    const { jobId, resumeUrl, coverLetter } = req.body;
    try {
        const application = await Application.create({
            jobId,
            jobSeekerId: req.user._id,
            resumeUrl,
            coverLetter,
        });
        res.status(201).json(application);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Applications for a Job
const getApplicationsForJob = async (req, res) => {
    try {
        const applications = await Application.find({ jobId: req.params.jobId }).populate('jobSeekerId');
        res.json(applications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Applications by Job Seeker
const getApplicationsByUser = async (req, res) => {
    try {
        const applications = await Application.find({ jobSeekerId: req.user._id }).populate('jobId');
        res.json(applications);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = { createApplication, getApplicationsForJob, getApplicationsByUser, };

