import React, { useState } from "react";

const EmployerRegistration = () => {
  const [formData, setFormData] = useState({
    companyName: "",
    email: "",
    password: "",
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
    console.log("Employer Registration Data:", formData);
    alert("Employer registered successfully!");
    setFormData({
      companyName: "",
      email: "",
      password: "",
      companyWebsite: "",
      companyLogo: null,
      companyBio: "",
    });
  };

  return (
    <div>
      <h2>Employer Registration Page</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="companyName"
          placeholder="Company Name"
          value={formData.companyName}
          onChange={handleChange}
          required
        />
        <br />
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
        <br />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          required
        />
        <br />
        <br />
        <input
          type="text"
          name="companyWebsite"
          placeholder="Company Website"
          value={formData.companyWebsite}
          onChange={handleChange}
        />
        <br />
        <br />
        <label>
          companyLogo:
        <input
          type="file"
          name="companyLogo"
          onChange={handleChange}
        />
        </label>
        <br />
        <br />
        <label>
          Company Bio:
          <textarea
            name="companyBio"
            value={formData.companyBio}
            onChange={handleChange}
            placeholder="Write a brief bio about your company"
          />
        </label>
        <br />
        <br />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default EmployerRegistration;
