import React, { useState } from "react";

const SignupForm = () => {
  const [userType, setUserType] = useState("jobSeeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    resume: "",
    skills: "",
    education: "",
    companyName: "",
    companyWebsite: "",
    companyLogo: null,
    companyBio: "",
  });
  const [passwordError, setPasswordError] = useState("");

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });


    if (name === "password" || name === "confirmPassword") {
      const password = formData.password;
      const confirmPassword = formData.confirmPassword;

      if (name === "password") {
        const passwordRegex =
          /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

        if (!password.match(passwordRegex)) {
          setPasswordError(
            "Password must be at least 8 characters long, include an uppercase letter, a number, and a special character."
          );
        } else {
          setPasswordError("");
        }
      }

      if (name === "confirmPassword" && password !== confirmPassword) {
        setPasswordError("Passwords do not match!");
      } else if (name === "confirmPassword" && password === confirmPassword) {
        setPasswordError("");
      }
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    if (passwordError) {
      alert(passwordError);
      return;
    }

    if (userType === "jobSeeker") {
      console.log("Job Seeker Registration Data:", {
        name: formData.name,
        email: formData.email,
        password: formData.password,
        resume: formData.resume,
        skills: formData.skills,
        education: formData.education,
      });
      alert("Job Seeker registered successfully!");
    } else {
      console.log("Employer Registration Data:", {
        companyName: formData.companyName,
        email: formData.email,
        password: formData.password,
        companyWebsite: formData.companyWebsite,
        companyLogo: formData.companyLogo,
        companyBio: formData.companyBio,
      });
      alert("Employer registered successfully!");
    }

    setFormData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
      resume: "",
      skills: "",
      education: "",
      companyName: "",
      companyWebsite: "",
      companyLogo: null,
      companyBio: "",
    });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formWrapper}>
        <h2 style={styles.heading}>
          {userType === "jobSeeker" ? "Job Seeker" : "Employer"} Registration
        </h2>
        <div style={styles.radioGroup}>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="jobSeeker"
              checked={userType === "jobSeeker"}
              onChange={() => setUserType("jobSeeker")}
              style={styles.radioInput}
            />
            Job Seeker
          </label>
          <label style={styles.radioLabel}>
            <input
              type="radio"
              value="employer"
              checked={userType === "employer"}
              onChange={() => setUserType("employer")}
              style={styles.radioInput}
            />
            Employer
          </label>
        </div>

        <form onSubmit={handleSubmit} style={styles.form}>
          {userType === "jobSeeker" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
              />
              {passwordError && <p style={styles.error}>{passwordError}</p>}
              Resume:
              <label style={styles.label}>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  style={styles.fileInput}
                />
              </label>
              Skills:
              <textarea
                name="skills"
                placeholder="List your skills"
                value={formData.skills}
                onChange={handleChange}
                rows="4"
                style={styles.textarea}
              />
              Education:
              <textarea
                name="education"
                placeholder="Enter your education details"
                value={formData.education}
                onChange={handleChange}
                rows="4"
                style={styles.textarea}
              />
            </>
          )}

          {userType === "employer" && (
            <>
              <input
                type="text"
                name="companyName"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={styles.input}
              />
              <input
                type="password"
                name="confirmPassword"
                placeholder="Confirm Password"
                value={formData.confirmPassword}
                onChange={handleChange}
                required
                style={styles.input}
              />
              {passwordError && <p style={styles.error}>{passwordError}</p>}
              <input
                type="text"
                name="companyWebsite"
                placeholder="Company Website"
                value={formData.companyWebsite}
                onChange={handleChange}
                style={styles.input}
              />
                 Company Logo:
              <label style={styles.label}>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleChange}
                  style={styles.fileInput}
                />
              </label>
              About company:
              <textarea
                name="companyBio"
                value={formData.companyBio}
                onChange={handleChange}
                placeholder="Write a brief bio about your company"
                rows="4"
                style={styles.textarea}
              />
            </>
          )}
            <p style={styles.orText}>or</p>
          <div style={styles.thirdPartyContainer}>
            <a href="/auth/google" style={styles.link}>
              Continue with Google
            </a>
            <a href="/auth/apple" style={styles.link}>
              Continue with Apple ID
            </a>
          </div>

          <button type="submit" style={styles.button}>
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    background: "linear-gradient(135deg,rgba(199, 190, 236, 0.64),rgb(154, 156, 158))",
    backgroundSize: "400% 400%",
    animation: "backgroundAnimation 10s ease infinite",
    fontFamily: "Arial, sans-serif",
  },
  formWrapper: {
    width: "100%",
    maxWidth: "500px",
    padding: "30px",
    borderRadius: "10px",
    background: "#fff",
    boxShadow: "0 10px 30px rgba(0, 0, 0, 0.1)",
    animation: "fadeIn 0.8s ease-in-out",
  },
  heading: {
    textAlign: "center",
    color: "#333",
    marginBottom: "20px",
    fontSize: "1.8rem",
  },
  radioGroup: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginBottom: "20px",
  },
  radioLabel: {
    fontSize: "1rem",
    color: "#555",
  },
  radioInput: {
    marginRight: "5px",
  },
  form: {
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    transition: "box-shadow 0.3s ease",
  },
  fileInput: {
    display: "block",
    marginTop: "5px",
    marginBottom: "15px",
  },
  label: {
    textAlign: "left",
    display: "block",
    marginBottom: "10px",
    color: "#555",
    fontSize: "1rem",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "1rem",
    outline: "none",
    marginBottom: "15px",
  },
  button: {
    padding: "10px 20px",
    background: "linear-gradient(135deg, #8ec5fc, #e0c3fc)",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "1rem",
    fontWeight: "bold",
    transition: "background 0.3s ease, transform 0.2s ease",
  },
  error: {
    color: "red",
    fontSize: "0.9rem",
    marginBottom: "10px",
    textAlign: "center",
  },
  thirdPartyContainer: {
    textAlign: "center",
    marginBottom: "15px",
  },
  link: {
    display: "block",
    textAlign: "center",
    color: "#4285F4",
    textDecoration: "none",
    fontWeight: "bold",
    marginBottom: "10px",
    cursor: "pointer",
  },
  orText: {
    fontSize: "1rem",
    color: "#555",
    marginBottom: "15px",
  },
};

document.head.insertAdjacentHTML(
  "beforeend",
  `<style>
    @keyframes backgroundAnimation {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }
  </style>`
);

export default SignupForm;
