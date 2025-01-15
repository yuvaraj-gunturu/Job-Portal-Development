const mongoose = require('mongoose');

const employerProfileSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        companyName: { type: String, required: true },
        companyWebsite: { type: String },
        companyLogo: { type: String },
        bio: { type: String },
        contactEmail: { type: String, required: true },
    },
    { timestamps: true }
);

module.exports = mongoose.model('EmployerProfile', employerProfileSchema);
