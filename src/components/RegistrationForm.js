import React, { useState, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const token = useContext(TokenContext);
  const navigate = useNavigate();

  const HandleRegistration = async (e) => {
    e.preventDefault();

    // Basic validation
    if (
      !username ||
      !password ||
      !confirmPassword ||
      !firstname ||
      !lastname ||
      !email
    ) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    //Password and confirm password must match
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }
    if (
      password === username ||
      password === firstname ||
      password === lastname ||
      password === email ||
      password === "password"
    ) {
      setErrorMessage("Choose a different password");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/register`,
        {
          email: email,
          lastname: lastname,
          username: username,
          firstname: firstname,
          password: password,
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      // alert for account created successfully
      alert(
        "Account created Successfully. Login with your new username and password."
      );
      setErrorMessage("");
      navigate("/login");

    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error registering account data:", error);
    }
  };

  return (
    <div className="registration-form">
      <h2 className="login"> Sign Up</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={HandleRegistration} className="form bg-success">
        <div className="form-group">
          <label className="form-label ">First Name:</label>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label ">Last Name:</label>
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label ">Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label className="form-label usernameLabel">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="usernameInput"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="e"
          />
        </div>
        <div className="form-group">
          <label className="form-label">Confirm Password:</label>
          <input
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            className="e"
            minlength="8"
          />
        </div>
        <button className="btn btn-primary">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
