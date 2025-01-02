import React, { useState } from "react";

const SignupForm = () => {
  const [userType, setUserType] = useState("jobSeeker");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    resume: "",
    skills: "",
    education: "",
    companyName: "",
    companyWebsite: "",
    companyLogo: null,
    companyBio: "",
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh", // Full page height
        backgroundColor: "#f9f9f9", // Optional background color
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "500px",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "white",
          textAlign: "center",
        }}
      >
        <h2>{userType === "jobSeeker" ? "Job Seeker" : "Employer"} Registration</h2>
        <div style={{ marginBottom: "20px" }}>
          <label style={{ marginRight: "10px" }}>
            <input
              type="radio"
              value="jobSeeker"
              checked={userType === "jobSeeker"}
              onChange={() => setUserType("jobSeeker")}
            />
            Job Seeker
          </label>
          <label>
            <input
              type="radio"
              value="employer"
              checked={userType === "employer"}
              onChange={() => setUserType("employer")}
            />
            Employer
          </label>
        </div>

        <form onSubmit={handleSubmit}>
          {userType === "jobSeeker" && (
            <>
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <br/>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <br/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <label>
                Resume:
                <br/>
                <input
                  type="file"
                  name="resume"
                  onChange={handleChange}
                  style={{ display: "block", marginBottom: "10px" }}
                />
              </label>
              <br/>
              <label>
                Skills:
              <textarea
                name="skills"
                placeholder="List your skills"
                value={formData.skills}
                onChange={handleChange}
                rows="4"
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              </label>
              <br/>
              <br/>
              <label>
                Education:
              <textarea
                name="education"
                placeholder="Enter your education details"
                value={formData.education}
                onChange={handleChange}
                rows="4"
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              </label>
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
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <br/>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <br/>
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <br/>
              <input
                type="text"
                name="companyWebsite"
                placeholder="Company Website"
                value={formData.companyWebsite}
                onChange={handleChange}
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              <br />
              <label>
                Company Logo:
                <br/>
                <input
                  type="file"
                  name="companyLogo"
                  onChange={handleChange}
                  style={{ display: "block", marginBottom: "10px" }}
                />
              </label>
              <br/>
              <label>
                companyBio:
              <textarea
                name="companyBio"
                value={formData.companyBio}
                onChange={handleChange}
                placeholder="Write a brief bio about your company"
                rows="4"
                style={{ marginBottom: "10px", width: "100%", padding: "10px" }}
              />
              </label>
            </>
          )}

          <button
            type="submit"
            style={{
              backgroundColor: "#007BFF",
              color: "white",
              border: "none",
              padding: "10px 20px",
              borderRadius: "5px",
              cursor: "pointer",
            }}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
