import React, { useState } from "react";

const SettingsPage = () => {
  const [settings, setSettings] = useState({
    account: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    notifications: {
      email: true,
      sms: false,
      jobAlerts: true,
    },
    privacy: {
      profileVisibility: "Public", 
    },
    theme: {
      darkMode: false,
    },
    security: {
      twoFactorAuth: false,
      phoneNumber: "",
    },
    language: "English",
    profile: {
      profilePicture: null,
    },
    jobPreferences: {
      jobType: "Full-Time", // Options: "Full-Time", "Part-Time", "Freelance"
      preferredLocation: "",
      industry: "",
    },
    changePassword: {
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const handleInputChange = (section, field, value) => {
    setSettings({
      ...settings,
      [section]: {
        ...settings[section],
        [field]: value,
      },
    });
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      handleInputChange("profile", "profilePicture", URL.createObjectURL(file));
    }
  };

  const handleSave = () => {
    if (settings.account.password !== settings.account.confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return;
    }
    if (settings.security.twoFactorAuth && !settings.security.phoneNumber) {
      alert("Please provide a phone number for two-step verification.");
      return;
    }
    if (
      settings.changePassword.newPassword &&
      settings.changePassword.newPassword !== settings.changePassword.confirmNewPassword
    ) {
      alert("New passwords do not match. Please try again.");
      return;
    }
    alert("Settings have been saved successfully!");
    console.log("Updated Settings:", settings);
  };

  const handleDeactivateAccount = () => {
    if (window.confirm("Are you sure you want to deactivate your account?")) {
      alert("Your account has been deactivated.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.heading}>Settings</h1>

  
      <div style={styles.section}>
        <h2 style={styles.subheading}>Account Settings</h2>
        <label style={styles.label}>Email:</label>
        <input
          type="email"
          value={settings.account.email}
          onChange={(e) => handleInputChange("account", "email", e.target.value)}
          style={styles.input}
        />
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Phone Number</h2>
        <label style={styles.label}>Phone Number:</label>
        <input
          type="text"
          value={settings.security.phoneNumber}
          onChange={(e) =>
            handleInputChange("security", "phoneNumber", e.target.value)
          }
          style={styles.input}
          placeholder="Enter your phone number"
        />
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Change Password</h2>
        <label style={styles.label}>New Password:</label>
        <input
          type="password"
          value={settings.changePassword.newPassword}
          onChange={(e) =>
            handleInputChange("changePassword", "newPassword", e.target.value)
          }
          style={styles.input}
          placeholder="Enter new password"
        />

        <label style={styles.label}>Confirm New Password:</label>
        <input
          type="password"
          value={settings.changePassword.confirmNewPassword}
          onChange={(e) =>
            handleInputChange("changePassword", "confirmNewPassword", e.target.value)
          }
          style={styles.input}
          placeholder="Confirm new password"
        />
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Two-Step Verification</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.security.twoFactorAuth}
            onChange={(e) =>
              handleInputChange("security", "twoFactorAuth", e.target.checked)
            }
          />
          Enable Two-Step Verification
        </label>
        {settings.security.twoFactorAuth && (
          <>
            <label style={styles.label}>Phone Number:</label>
            <input
              type="text"
              value={settings.security.phoneNumber}
              onChange={(e) =>
                handleInputChange("security", "phoneNumber", e.target.value)
              }
              style={styles.input}
              placeholder="Enter your phone number"
            />
          </>
        )}
      </div>

      <div style={styles.section}>
        <h2 style={styles.subheading}>Profile Picture</h2>
        <input type="file" onChange={handleFileChange} style={styles.input} />
        {settings.profile.profilePicture && (
          <img
            src={settings.profile.profilePicture}
            alt="Profile"
            style={styles.profilePicture}
          />
        )}
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Notification Preferences</h2>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications.email}
            onChange={(e) =>
              handleInputChange("notifications", "email", e.target.checked)
            }
          />
          Email Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications.sms}
            onChange={(e) =>
              handleInputChange("notifications", "sms", e.target.checked)
            }
          />
          SMS Notifications
        </label>
        <label>
          <input
            type="checkbox"
            checked={settings.notifications.jobAlerts}
            onChange={(e) =>
              handleInputChange("notifications", "jobAlerts", e.target.checked)
            }
          />
          Job Alerts
        </label>
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Job Preferences</h2>
        <label style={styles.label}>Preferred Job Type:</label>
        <select
          value={settings.jobPreferences.jobType}
          onChange={(e) =>
            handleInputChange("jobPreferences", "jobType", e.target.value)
          }
          style={styles.select}
        >
          <option value="Full-Time">Full-Time</option>
          <option value="Part-Time">Part-Time</option>
          <option value="Freelance">Freelance</option>
        </select>

        <label style={styles.label}>Preferred Location:</label>
        <input
          type="text"
          value={settings.jobPreferences.preferredLocation}
          onChange={(e) =>
            handleInputChange(
              "jobPreferences",
              "preferredLocation",
              e.target.value
            )
          }
          style={styles.input}
          placeholder="Enter preferred location"
        />
        <label style={styles.label}>Preferred Industry:</label>
        <input
          type="text"
          value={settings.jobPreferences.industry}
          onChange={(e) =>
            handleInputChange("jobPreferences", "industry", e.target.value)
          }
          style={styles.input}
          placeholder="Enter preferred industry"
        />
      </div>


      <div style={styles.section}>
        <h2 style={styles.subheading}>Account Management</h2>
        <button onClick={handleDeactivateAccount} style={styles.deactivateButton}>
          Deactivate Account
        </button>
      </div>

      <button onClick={handleSave} style={styles.button}>
        Save Changes
      </button>
    </div>
  );
};

const styles = {
  container: { padding: "20px", backgroundColor: "#f9f9f9" },
  heading: { textAlign: "center", marginBottom: "20px", fontSize: "2rem" },
  section: { marginBottom: "20px", padding: "20px", backgroundColor: "#fff" },
  label: { marginBottom: "10px", display: "block", fontWeight: "bold" },
  input: { width: "100%", padding: "10px", marginBottom: "15px" },
  select: { width: "100%", padding: "10px" },
  button: { padding: "10px", backgroundColor: "#007BFF", color: "#fff" },
  deactivateButton: { padding: "10px", backgroundColor: "#FF6347", color: "#fff" },
  profilePicture: { width: "100px", height: "100px", borderRadius: "50%" },
};

export default SettingsPage;