const mongoose = require('mongoose');

const jobSeekerProfileSchema = mongoose.Schema(
    {
        userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
        skills: { type: [String], required: true },
        experience: { type: String },
        education: { type: String },
    },
    { timestamps: true }
);

module.exports = mongoose.model('JobSeekerProfile', jobSeekerProfileSchema);
