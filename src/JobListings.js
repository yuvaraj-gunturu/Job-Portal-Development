import React, { useState } from "react";

const JobListings = () => {
  const [searchKeyword, setSearchKeyword] = useState("");
  const [location, setLocation] = useState("");
  const [jobs, setJobs] = useState([
    {
      id: 4229,
      title: "Frontend Developer",
      company: "Riktam",
      location: "Hyderabad,Bangolore",
      salary: "80,000 - 100,000",
      type: "Full-time",
      description: "Develop responsive web applications using React and Redux.",
    },
    {
      id: 4230,
      title: "Backend Developer",
      company: "Wells Fargo",
      location: "New York,Hyderabad,Mumbai",
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
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  const handleSearch = () => {
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(searchKeyword.toLowerCase()) &&
        job.location.toLowerCase().includes(location.toLowerCase())
    );
    setFilteredJobs(filtered);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Jobs</h1>
      <div style={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search by title..."
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
          style={styles.input}
        />
        <input
          type="text"
          placeholder="Search by location..."
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
        />
        <button onClick={handleSearch} style={styles.button}>
          Search
        </button>
      </div>
      <div style={styles.jobList}>
        {filteredJobs.length > 0 ? (
          filteredJobs.map((job) => (
            <div key={job.id} style={styles.jobCard}>
              <h2 style={styles.jobTitle}>{job.title}</h2>
              <p style={styles.company}>{job.company}</p>
              <p style={styles.location}>{job.location}</p>
              <p style={styles.salary}>{job.salary}</p>
              <p style={styles.type}>{job.type}</p>
              <p style={styles.description}>{job.description}</p>
              <button style={styles.applyButton}>Apply Now</button>
            </div>
          ))
        ) : (
          <p style={styles.noJobs}>No jobs found.</p>
        )}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  searchContainer: {
    display: "flex",
    justifyContent: "center",
    marginBottom: "20px",
    gap: "10px",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "5px",
    width: "200px",
  },
  button: {
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  jobList: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    gap: "20px",
  },
  jobCard: {
    padding: "20px",
    backgroundColor: "#fff",
    border: "1px solid #ddd",
    borderRadius: "5px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  jobTitle: {
    fontSize: "1.5rem",
    color: "#007BFF",
    marginBottom: "10px",
  },
  company: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "5px",
  },
  location: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "10px",
  },
  salary: {
    fontSize: "1rem",
    color: "#333",
    marginBottom: "10px",
  },
  type: {
    fontSize: "1rem",
    color: "#007BFF",
    marginBottom: "10px",
  },
  description: {
    fontSize: "0.9rem",
    color: "#555",
    marginBottom: "15px",
  },
  applyButton: {
    padding: "10px 15px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#28a745",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  },
  noJobs: {
    textAlign: "center",
    fontSize: "1.2rem",
    color: "#888",
  },
};

export default JobListings;
