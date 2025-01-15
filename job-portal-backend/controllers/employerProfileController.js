const EmployerProfile = require('../models/EmployerProfile');

// Create Employer Profile
const createEmployerProfile = async (req, res) => {
    const { companyName, companyWebsite, companyLogo, bio, contactEmail } = req.body;
    try {
        const profile = await EmployerProfile.create({
            userId: req.user._id,
            companyName,
            companyWebsite,
            companyLogo,
            bio,
            contactEmail,
        });
        res.status(201).json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Get Employer Profile
const getEmployerProfile = async (req, res) => {
    try {
        const profile = await EmployerProfile.findOne({ userId: req.user._id });
        if (!profile) return res.status(404).json({ message: 'Profile not found' });
        res.json(profile);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Employer Profile
const updateEmployerProfile = async (req, res) => {
    try {
        const profile = await EmployerProfile.findOneAndUpdate(
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

module.exports = { createEmployerProfile, getEmployerProfile, updateEmployerProfile };
