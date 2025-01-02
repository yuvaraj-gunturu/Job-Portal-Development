import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import LoginForm from "./LoginForm";
import ApplicationTable from "./ApplicationTable";
import SignupForm from "./SignupForm";
function App() {
  return (
    <div>
      <Router>
        <nav>
          <Link to="/">Home</Link> | <Link to="/login">Login</Link> |{" "}
          <Link to="/signup">Signup</Link> | <Link to="/Application">Application Form</Link> |{""}
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/signup" element={<SignupForm />} /> 
          <Route path="/Application" element={<ApplicationTable />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
