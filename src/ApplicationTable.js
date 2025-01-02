import React, { useState } from "react";

const ApplicationTable = () => {
  const [applications, setApplications] = useState([
    { id: 1, jobId: 4229, jobSeekerId: 567, resumeUrl: "http:/resume1.pdf" },
    { id: 2, jobId: 4230, jobSeekerId: 678, resumeUrl: "http:/resume2.pdf" },
    { id: 3, jobId: 4251, jobSeekerId: 890, resumeUrl: "http:/resume3.pdf" },
  ]);

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Applications Table</h2>
      <table style={styles.table}>
        <thead>
          <tr>
            <th style={styles.th}>ID</th>
            <th style={styles.th}>Job ID</th>
            <th style={styles.th}>Job Seeker ID</th>
            <th style={styles.th}>Resume URL</th>
          </tr>
        </thead>
        <tbody>
          {applications.map((app) => (
            <tr key={app.id}>
              <td style={styles.td}>{app.id}</td>
              <td style={styles.td}>{app.jobId}</td>
              <td style={styles.td}>{app.jobSeekerId}</td>
              <td style={styles.td}>
                <a href={app.resumeUrl} target="_blank" rel="noopener noreferrer" style={styles.link}>
                  View Resume
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

const styles = {
  container: {
    margin: "20px",
    padding: "20px",
    backgroundColor: "#f9f9f9",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  heading: {
    marginBottom: "20px",
    textAlign: "center",
    color: "#333",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#007BFF",
    color: "#fff",
    padding: "10px",
    textAlign: "left",
  },
  td: {
    border: "1px solid #ccc",
    padding: "10px",
    textAlign: "left",
  },
  link: {
    color: "#007BFF",
    textDecoration: "none",
  },
};

export default ApplicationTable;
