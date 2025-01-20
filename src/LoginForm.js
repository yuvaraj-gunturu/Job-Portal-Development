import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("jobSeeker");
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Please fill in all fields.");
      return;
    }

    console.log("Logging in as:", userType, { email, password, rememberMe });
    alert(`Login successful as ${userType}!`);
  };

  const handleForgotPassword = () => {
    alert("Redirecting to Forgot Password page...");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleSubmit} style={styles.form}>
        <h2 style={styles.heading}>Welcome</h2>
        <p style={styles.subheading}>Login to your account</p>

        <label htmlFor="userType" style={styles.label}>
          I am a:
        </label>
        <select
          id="userType"
          value={userType}
          onChange={(e) => setUserType(e.target.value)}
          style={styles.select}
        >
          <option value="jobSeeker">Job Seeker</option>
          <option value="employer">Employer</option>
        </select>

        <label htmlFor="email" style={styles.label}>
          Email:
        </label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          placeholder="Enter your email"
        />

        <label htmlFor="password" style={styles.label}>
          Password:
        </label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          placeholder="Enter your password"
        />

        <div style={styles.optionsContainer}>
          <div style={styles.rememberMeContainer}>
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              style={styles.checkbox}
            />
            <label htmlFor="rememberMe" style={styles.rememberMeLabel}>
              Remember Me
            </label>
          </div>
          <a
            href="#"
            onClick={handleForgotPassword}
            style={styles.forgotPasswordLink}
          >
            Forgot Password?
          </a>
        </div>

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    background: "linear-gradient(135deg, #e0f7fa 0%, #ffffff 100%)",
    fontFamily: "'Arial', sans-serif",
    padding: "20px",
  },
  form: {
    width: "400px",
    padding: "30px",
    borderRadius: "15px",
    background: "#ffffff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    animation: "fadeIn 1s ease-in-out",
  },
  heading: {
    fontSize: "1.8rem",
    color: "#333",
    marginBottom: "5px",
  },
  subheading: {
    fontSize: "1rem",
    color: "#666",
    marginBottom: "20px",
  },
  label: {
    display: "block",
    textAlign: "left",
    marginBottom: "8px",
    fontSize: "1rem",
    color: "#555",
  },
  input: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    transition: "box-shadow 0.3s ease",
    outline: "none",
  },
  select: {
    width: "100%",
    padding: "12px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    fontSize: "1rem",
    outline: "none",
  },
  optionsContainer: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "20px",
  },
  rememberMeContainer: {
    display: "flex",
    alignItems: "center",
  },
  checkbox: {
    marginRight: "8px",
  },
  rememberMeLabel: {
    fontSize: "0.9rem",
    color: "#555",
  },
  forgotPasswordLink: {
    fontSize: "0.9rem",
    color: "#007bff",
    textDecoration: "none",
    transition: "color 0.3s ease",
  },
  button: {
    width: "100%",
    padding: "12px",
    background: "linear-gradient(135deg, #6a11cb, #2575fc)",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    fontSize: "1rem",
    fontWeight: "bold",
    cursor: "pointer",
    transition: "transform 0.3s ease, background 0.3s ease",
    textTransform: "uppercase",
  },
};

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
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
    input:focus, select:focus {
      box-shadow: 0 0 10px rgba(0, 123, 255, 0.5);
      border-color: #007bff;
    }
    button:hover {
      transform: translateY(-3px);
      background: linear-gradient(135deg, #2575fc, #6a11cb);
    }
    a:hover {
      color: blue;
    }
  </style>`
);

export default LoginForm;
