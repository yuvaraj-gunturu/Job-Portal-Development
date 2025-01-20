import React, { useState } from "react";
import PostJobPage from "./PostJobPage";
import JobListings from "./JobListings";

const JobPortal = () => {
  const [jobs, setJobs] = useState([
    {
      id: 4229,
      title: "Frontend Developer",
      company: "Riktam",
      location: "Hyderabad, Bangalore",
      salary: "80,000 - 100,000",
      type: "Full-time",
      description: "Develop responsive web applications using React and Redux.",
    },
    {
      id: 4230,
      title: "Backend Developer",
      company: "Wells Fargo",
      location: "New York, Hyderabad, Mumbai",
      salary: "90,000 - 110,000",
      type: "Full-time",
      description: "Banking.",
    },
    {
      id: 3,
      title: "Web Developer",
      company: "Infosys",
      location: "Remote",
      salary: "70,000 - 90,000",
      type: "Part-time",
      description: "Work on website projects and ensure SEO optimization.",
    },
  ]);

  const addJob = (newJob) => {
    setJobs((prevJobs) => [
      ...prevJobs,
      { ...newJob, id: Math.floor(Math.random() * 10000) }, // Assign a unique ID
    ]);
  };

  return (
    <div>
      <PostJobPage onAddJob={addJob} />
      <JobListings jobs={jobs} />
    </div>
  );
};

export default JobPortal;
