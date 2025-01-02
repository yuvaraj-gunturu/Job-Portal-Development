import React from "react";
const jobListings = [
  {
    _id: "123",
    companyName: "Riktam Technology Consulting",
    title: "Software Engineer",
    description: "Develop and maintain web applications using modern frameworks.",
    companyId: "3e5t782fu7d",
    location: "Hyderabad",
    employmentType: "Full-Time",
    salaryRange: {
      min: 50000,
      max: 80000,
    },
    skills: ["JavaScript", "React", "Node.js"],
    qualification: ["B-tech"],
    postedDt: "26-12-2024",
    expiryDt: "30-12-2024",
    isActive: true,
  },
  {
    _id: "456",
    companyName: "Wells Fargo",
    title: "Engineer Trainee",
    description: "Develop and maintain bank software.",
    companyId: "5rjhh6t56768v0",
    location: "Bangalore",
    employmentType: "Full-Time",
    salaryRange: {
      min: 90000,
      max: 100000,
    },
    skills: ["Python", "React", "Node.js"],
    qualification: ["B-tech", "M-tech"],
    postedDt: "26-12-2024",
    expiryDt: "30-12-2024",
    isActive: true,
  },
  {
    _id: "987",
    companyName: "Infosys",
    title: "Backend Developer",
    description: "Develop and maintain software services.",
    companyId: "986462156",
    location: "Chennai",
    employmentType: "Part-Time",
    salaryRange: {
      min: 20000,
      max: 50000,
    },
    skills: ["JavaScript", "React", "Node.js"],
    qualification: ["B-tech", "Degree"],
    postedDt: "26-12-2024",
    expiryDt: "30-12-2024",
    isActive: true,
  },
  {
    _id: "564",
    companyName: "Wipro",
    title: "Full Stack Developer",
    description: "Develop and maintain software services.",
    companyId: "7853120946",
    location: "Vizag",
    employmentType: "Full-Time",
    salaryRange: {
      min: 80000,
      max: 120000,
    },
    skills: ["JavaScript", "React", "Node.js"],
    qualification: ["B-tech", "M-tech"],
    postedDt: "26-12-2024",
    expiryDt: "30-12-2024",
    isActive: true,
  },
];

// JobListing component
const JobListing = ({ job }) => {
  return (
    <div
      className="job-listing"
      key={job._id}
      style={{ border: "1px solid #ccc", padding: "10px", marginBottom: "10px" }}
    >
      <h3>
        {job.title} at {job.companyName}
      </h3>
      <p>{job.description}</p>
      <p>
        <strong>Location:</strong> {job.location}
      </p>
      <p>
        <strong>Employment Type:</strong> {job.employmentType}
      </p>
      <p>
        <strong>Salary Range:</strong> ₹{job.salaryRange.min} - ₹{job.salaryRange.max}
      </p>
      <p>
        <strong>Qualifications:</strong> {job.qualification.join(", ")}
      </p>
      <p>
        <strong>Skills Required:</strong> {job.skills.join(", ")}
      </p>
      <p>
        <strong>Posted On:</strong> {job.postedDt}
      </p>
      <p>
        <strong>Expiry Date:</strong> {job.expiryDt}
      </p>
      <p>
        <strong>Status:</strong> {job.isActive ? "Active" : "Expired"}
      </p>
    </div>
  );
};

// JobListings component
const JobListings = () => {
  return (
    <div>
      <h2>Job Listings</h2>
      {jobListings.map((job) => (
        <JobListing job={job} key={job._id} />
      ))}
    </div>
  );
};

export default JobListings;
