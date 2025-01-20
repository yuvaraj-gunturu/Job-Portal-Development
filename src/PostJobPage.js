import React, { useState } from "react";

const PostJobPage = () => {
  const [jobTitle, setJobTitle] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [location, setLocation] = useState("");
  const [salary, setSalary] = useState("");
  const [jobType, setJobType] = useState("Full-time");
  const [description, setDescription] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!jobTitle || !companyName || !location || !description) {
      alert("Please fill in all required fields.");
      return;
    }

    const jobDetails = {
      jobTitle,
      companyName,
      location,
      salary,
      jobType,
      description,
    };

    console.log("Job Posted:", jobDetails);
    setSuccessMessage("Job successfully posted!");
    clearForm();
  };

  const clearForm = () => {
    setJobTitle("");
    setCompanyName("");
    setLocation("");
    setSalary("");
    setJobType("Full-time");
    setDescription("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Post a Job</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        {successMessage && <p style={styles.successMessage}>{successMessage}</p>}
        <label htmlFor="jobTitle" style={styles.label}>
          Job Title <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="jobTitle"
          value={jobTitle}
          onChange={(e) => setJobTitle(e.target.value)}
          style={styles.input}
          placeholder="Enter job title"
        />

        <label htmlFor="companyName" style={styles.label}>
          Company Name <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="companyName"
          value={companyName}
          onChange={(e) => setCompanyName(e.target.value)}
          style={styles.input}
          placeholder="Enter company name"
        />

        <label htmlFor="location" style={styles.label}>
          Location <span style={styles.required}>*</span>
        </label>
        <input
          type="text"
          id="location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          style={styles.input}
          placeholder="Enter job location"
        />

        <label htmlFor="salary" style={styles.label}>
          Salary
        </label>
        <input
          type="text"
          id="salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
          style={styles.input}
          placeholder="Enter salary range (optional)"
        />

        <label htmlFor="jobType" style={styles.label}>
          Job Type
        </label>
        <select
          id="jobType"
          value={jobType}
          onChange={(e) => setJobType(e.target.value)}
          style={styles.select}
        >
          <option value="Full-time">Full-time</option>
          <option value="Part-time">Part-time</option>
          <option value="Contract">Contract</option>
          <option value="Internship">Internship</option>
          <option value="Freelance">Freelance</option>
        </select>

        <label htmlFor="description" style={styles.label}>
          Job Description <span style={styles.required}>*</span>
        </label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={styles.textarea}
          placeholder="Enter job description"
        />

        <button type="submit" style={styles.button}>
          Post Job
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    maxWidth: "600px",
    margin: "0 auto",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    textAlign: "center",
    fontSize: "2rem",
    color: "#333",
    marginBottom: "20px",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "5px",
    fontSize: "1rem",
    color: "#555",
  },
  required: {
    color: "red",
  },
  input: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "15px",
  },
  select: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "15px",
  },
  textarea: {
    padding: "10px",
    fontSize: "1rem",
    border: "1px solid #ccc",
    borderRadius: "4px",
    marginBottom: "15px",
    minHeight: "100px",
  },
  button: {
    padding: "12px",
    fontSize: "1rem",
    color: "#fff",
    backgroundColor: "#007BFF",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  buttonHover: {
    backgroundColor: "#0056b3",
  },
  successMessage: {
    color: "green",
    marginBottom: "15px",
    fontWeight: "bold",
  },
};

export default PostJobPage;
