const mongoose = require('mongoose');

const applicationSchema = mongoose.Schema(
    {
        jobId: { type: mongoose.Schema.Types.ObjectId, ref: 'Job', required: true },
        jobSeekerId: { type: mongoose.Schema.Types.ObjectId, ref: 'JobSeekerProfile', required: true },
        resumeUrl: { type: String, required: true },
        coverLetter: { type: String },
        status: { type: String, default: 'pending' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Application', applicationSchema);
