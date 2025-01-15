const mongoose = require('mongoose');

const jobSchema = mongoose.Schema(
    {
        employerId: { type: mongoose.Schema.Types.ObjectId, ref: 'EmployerProfile', required: true },
        title: { type: String, required: true },
        description: { type: String, required: true },
        requirements: { type: [String], required: true },
        location: { type: String, required: true },
        jobType: { type: String, required: true },
        salaryRange: { type: String, required: true },
        status: { type: String, default: 'open' },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Job', jobSchema);
