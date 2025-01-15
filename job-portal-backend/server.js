const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const jobRoutes = require('./routes/jobRoutes');
const employerProfileRoutes = require('./routes/employerProfileRoutes');
const jobSeekerProfileRoutes = require('./routes/jobSeekerProfileRoutes');
const applicationRoutes = require('./routes/applicationRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(express.json());

// Routes
app.use('/api/auth', authRoutes);
app.use('/api/jobs', jobRoutes);
app.use('/api/employer', employerProfileRoutes);
app.use('/api/job-seeker', jobSeekerProfileRoutes);
app.use('/api/applications', applicationRoutes);
app.use('/api/admin', adminRoutes);

// Connect to MongoDB and start the server
const PORT = process.env.PORT || 5000;
(async () => {
    try {
        await connectDB(); // Wait for MongoDB connection
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (error) {
        console.error(`Failed to connect to the database: ${error.message}`);
        process.exit(1); // Exit process with failure
    }
})();
