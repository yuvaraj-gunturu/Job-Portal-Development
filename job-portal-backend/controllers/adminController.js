const Admin = require('../models/Admin');
const User = require('../models/User');

// Get All Users (Admin Only)
const getAllUsers = async (req, res) => {
    try {
        const users = await User.find().select('-password');
        res.json(users);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update Permissions for an Admin
const updateAdminPermissions = async (req, res) => {
    const { permissions } = req.body;
    try {
        const admin = await Admin.findOneAndUpdate(
            { userId: req.user._id },
            { permissions },
            { new: true }
        );
        if (!admin) return res.status(404).json({ message: 'Admin not found' });
        res.json(admin);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

module.exports = {
    getAllUsers,
    updateAdminPermissions,
};
