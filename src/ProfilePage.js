import React, { useState } from "react";

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: "Akella Srikar",
    email: "srikar.akella03@gmail.com",
    phone: "+91 7989436126",
    location: "Hyderabad,Banglore",
    bio: "Experienced web developer with expertise in React and Node.js.",
    skills: ["JavaScript", "React", "Node.js", "HTML", "CSS","Python","C","C++","OOPS","Java","Machine Learning"],
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedProfile, setEditedProfile] = useState(profile);

  const handleEditToggle = () => {
    if (isEditing) {
      setProfile(editedProfile);
    }
    setIsEditing(!isEditing);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedProfile({ ...editedProfile, [name]: value });
  };

  const handleAddSkill = (skill) => {
    setEditedProfile({
      ...editedProfile,
      skills: [...editedProfile.skills, skill],
    });
  };

  const handleRemoveSkill = (index) => {
    const updatedSkills = [...editedProfile.skills];
    updatedSkills.splice(index, 1);
    setEditedProfile({ ...editedProfile, skills: updatedSkills });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Profile</h1>
      <div style={styles.profileContainer}>
        <label style={styles.label}>Name:</label>
        {isEditing ? (
          <input
            type="text"
            name="name"
            value={editedProfile.name}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{profile.name}</p>
        )}

        <label style={styles.label}>Email:</label>
        {isEditing ? (
          <input
            type="email"
            name="email"
            value={editedProfile.email}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{profile.email}</p>
        )}

        <label style={styles.label}>Phone:</label>
        {isEditing ? (
          <input
            type="text"
            name="phone"
            value={editedProfile.phone}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{profile.phone}</p>
        )}

        <label style={styles.label}>Location:</label>
        {isEditing ? (
          <input
            type="text"
            name="location"
            value={editedProfile.location}
            onChange={handleChange}
            style={styles.input}
          />
        ) : (
          <p style={styles.text}>{profile.location}</p>
        )}

        <label style={styles.label}>Bio:</label>
        {isEditing ? (
          <textarea
            name="bio"
            value={editedProfile.bio}
            onChange={handleChange}
            style={styles.textarea}
          />
        ) : (
          <p style={styles.text}>{profile.bio}</p>
        )}

        <label style={styles.label}>Skills:</label>
        {isEditing ? (
          <div style={styles.skillEditor}>
            {editedProfile.skills.map((skill, index) => (
              <div key={index} style={styles.skillItem}>
                <span>{skill}</span>
                <button
                  onClick={() => handleRemoveSkill(index)}
                  style={styles.removeButton}
                >
                  Remove
                </button>
              </div>
            ))}
            <input
              type="text"
              placeholder="Add a skill"
              onKeyDown={(e) => {
                if (e.key === "Enter" && e.target.value.trim()) {
                  handleAddSkill(e.target.value.trim());
                  e.target.value = "";
                }
              }}
              style={styles.input}
            />
          </div>
        ) : (
          <ul style={styles.skillList}>
            {profile.skills.map((skill, index) => (
              <li key={index} style={styles.skill}>
                {skill}
              </li>
            ))}
          </ul>
        )}

        <button onClick={handleEditToggle} style={styles.button}>
          {isEditing ? "Save" : "Edit Profile"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "20px",
    fontFamily: "Arial, sans-serif",
    backgroundColor: "#f9f9f9",
    minHeight: "100vh",
  },
  heading: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "2rem",
    color: "#333",
  },
  profileContainer: {
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  label: {
    display: "block",
    marginBottom: "8px",
    fontWeight: "bold",
    color: "#555",
  },
  text: {
    marginBottom: "15px",
    fontSize: "1rem",
    color: "#333",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
  },
  textarea: {
    width: "100%",
    padding: "10px",
    marginBottom: "15px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    height: "80px",
  },
  skillList: {
    marginBottom: "15px",
    listStyleType: "none",
    padding: 0,
  },
  skill: {
    padding: "5px 0",
    fontSize: "1rem",
    color: "#555",
  },
  skillEditor: {
    marginBottom: "15px",
  },
  skillItem: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "5px",
  },
  removeButton: {
    marginLeft: "10px",
    padding: "5px 10px",
    fontSize: "0.8rem",
    color: "#fff",
    backgroundColor: "#d9534f",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
  },
  button: {
    display: "block",
    width: "100%",
    padding: "10px",
    backgroundColor: "#007BFF",
    color: "#fff",
    border: "none",
    borderRadius: "4px",
    fontSize: "1rem",
    cursor: "pointer",
  },
};

export default ProfilePage;
