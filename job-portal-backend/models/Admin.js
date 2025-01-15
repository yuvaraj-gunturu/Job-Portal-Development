const mongoose = require('mongoose');

const adminSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        permissions: { type: [String], default: [] },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Admin', adminSchema);
