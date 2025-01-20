import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import SignupForm from "./SignupForm";
import JobListings from "./JobListings";
import PostJobPage from "./PostJobPage";
import ProfilePage from "./ProfilePage";
import SettingsPage from "./SettingsPage";
import JobPortal from "./JobPortal";

function App() {
  return (
    <div style={styles.page}>
      <Router>
        <nav style={styles.nav}>
          <Link to="/" style={styles.link}>Home</Link> |{" "}
          <Link to="/login" style={styles.link}>Login</Link> |{" "}
          <Link to="/signup" style={styles.link}>Signup</Link> |{" "}
          <Link to="/Jobs" style={styles.link}>JobListings</Link> |{" "}
          <Link to="/postJobs" style={styles.link}>PostJobPage</Link> |{" "}
          <Link to="/profile" style={styles.link}>ProfilePage</Link> |{" "}
          <Link to="/settings" style={styles.link}>SettingsPage</Link> |{" "}
          <Link to="/jobportal" style={styles.link}>JobPortal</Link>
        </nav>
        <div style={styles.contentContainer}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<LoginForm />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/Jobs" element={<JobListings />} />
            <Route path="/postJobs" element={<PostJobPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/jobportal" element={<JobPortal />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

const styles = {
  page: {
    height: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    backgroundColor: "#f4f4f4", 
  },
  nav: {
    width: "100%",
    backgroundColor: "#333",
    padding: "10px 20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    margin: "0 10px",
    fontSize: "1.2rem",
  },
  contentContainer: {
    width: "100%",
    height: "calc(100vh - 60px)",
    overflowY: "auto",
    padding: "20px",
  },
};

export default App;
