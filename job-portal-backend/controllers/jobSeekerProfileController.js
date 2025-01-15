const JobSeekerProfile = require('../models/JobSeekerProfile');

// Create Job Seeker Profile
const createJobSeekerProfile = async (req, res) => {
    const { skills, experience, education } = req.body;
    try {
        const profile = await JobSeekerProfile.create({
            userId: req.user._id,
            skills,
            experience,
            education,
        });
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Job Seeker Profile
const getJobSeekerProfile = async (req, res) => {
    try {
        const profile = await JobSeekerProfile.findOne({ userId: req.user._id });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Job Seeker Profile
const updateJobSeekerProfile = async (req, res) => {
    try {
        const profile = await JobSeekerProfile.findOneAndUpdate(
            { userId: req.user._id },
            req.body,
            { new: true }
        );
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    createJobSeekerProfile,
    getJobSeekerProfile,
    updateJobSeekerProfile,
};
