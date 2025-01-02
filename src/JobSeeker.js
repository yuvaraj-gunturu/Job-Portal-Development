import React, { useState } from "react";

const JobSeeker = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    resume: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("JobSeeker Data:", formData);
    alert("JobSeeker registered successfully!");
    setFormData({ name: "", email: "", password: "", resume: "",skills:"",education:""});
  };

  return (
    <div>
      <h2>JobSeeker Registration Page</h2>;
      <form onSubmit={handleSubmit}>
        <br/>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <br/>
        <br />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          required
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
        />
        <br/>
        <br />
        <input
          type="text"
          name="resume"
          placeholder="Resume Link"
          value={formData.resume}
          onChange={handleChange}
        />
        <br/>
        <br />
        <textarea
          name="skills"
          placeholder="List your skills"
          value={formData.skills}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
        <br />
        <br />
        <textarea
          name="education"
          placeholder="Enter your education details"
          value={formData.education}
          onChange={handleChange}
          rows="4"
          cols="50"
        />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default JobSeeker;