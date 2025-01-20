import React from "react";
import jobPortalImage from "./assets/download.jpeg";
import jobSearchImage from "./assets/jobsearch.jpeg";
import hiringImage from "./assets/hiring.jpeg";

const Home = () => {
  return (  
    <div style={styles.page}>
  
      <img
        src={jobSearchImage}
        alt="Job Search"
        style={{ ...styles.outerImage, top: "15%", left: "3%" }}
      />
      <img
        src={hiringImage}
        alt="Hiring Talent"
        style={{ ...styles.outerImage, bottom: "15%", right: "3%" }}
      />


      <div className="background-animation"></div>
      <div className="particles"></div>


      <div style={styles.container}>
        <div style={styles.content}>
          <h1 style={styles.heading}>Welcome to the Job Portal</h1>
          <p style={styles.description}>
            Find your dream job or hire top talent with ease.
          </p>
          <img
            src={jobPortalImage}
            alt="Job Portal"
            style={styles.mainImage}
          />
          <div style={styles.buttonContainer}>
            <button style={{ ...styles.button, ...styles.loginButton }}>
              Login
            </button>
            <button style={{ ...styles.button, ...styles.signupButton }}>
              Signup
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  page: {
    position: "relative",
    minHeight: "100vh",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    zIndex: 1,
    width: "100%",
    padding: "0 20px", 
  },
  content: {
    textAlign: "center",
    background: "#ffffff",
    padding: "40px",
    borderRadius: "20px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 1.5s ease-in-out",
    maxWidth: "900px",
    width: "100%",
    boxSizing: "border-box",
  },
  heading: {
    fontSize: "2.5rem",
    marginBottom: "20px",
    color: "#333",
  },
  description: {
    fontSize: "1.2rem",
    color: "#555",
    marginBottom: "30px",
  },
  mainImage: {
    width: "100%",
    maxHeight: "300px",
    objectFit: "cover",
    borderRadius: "15px",
    marginBottom: "20px",
    transition: "transform 0.5s ease",
  },
  buttonContainer: {
    marginTop: "30px",
  },
  button: {
    padding: "10px 20px",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    border: "none",
    transition: "transform 0.3s ease, background 0.3s ease",
    margin: "0 10px",
    color: "#fff",
  },
  loginButton: {
    background: "#007bff",
  },
  signupButton: {
    background: "#28a745",
  },
  outerImage: {
    position: "absolute",
    width: "180px",
    height: "180px",
    objectFit: "cover",
    borderRadius: "15px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
    zIndex: 0,
    border: "2px solid white",
    transition: "transform 0.3s ease",
  },
};


document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    body {
      margin: 0;
      padding: 0;
      font-family: Arial, sans-serif;
    }
    .background-animation {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: linear-gradient(270deg, #4facfe, #00f2fe, #8e44ad, #3498db);
      background-size: 800% 800%;
      animation: gradientAnimation 12s ease infinite;
      z-index: -1;
    }
    .particles {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      pointer-events: none;
      background: url('https://cdn.jsdelivr.net/gh/VincentGarreau/particles.js/demo/media/particles.png');
      background-size: cover;
      opacity: 0.3;
      animation: particlesAnimation 10s linear infinite;
    }
    @keyframes gradientAnimation {
      0% {
        background-position: 0% 50%;
      }
      50% {
        background-position: 100% 50%;
      }
      100% {
        background-position: 0% 50%;
      }
    }
    @keyframes particlesAnimation {
      0% {
        transform: translateY(0);
      }
      100% {
        transform: translateY(-10%);
      }
    }
    @keyframes fadeIn {
      from {
        opacity: 0;
        transform: translateY(-20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    img:hover {
      transform: scale(1.05);
    }
    button:hover {
      background: #0056b3;
      transform: translateY(-3px);
    }
  </style>`
);

export default Home;
