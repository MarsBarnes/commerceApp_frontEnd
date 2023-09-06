import React, { useState } from "react";
import axios from "axios";

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    console.log("hi");

    try {
      const { data } = await axios.post("http://localhost:3000/login", {
        username: username,
        password: password,
      });
      console.log(data);
      setToken(data.token);
      // Successful login logic here (e.g., set authentication state)
      setErrorMessage("");
      console.log("Login successful");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid username or password");
    }
    // // Simulate API call for authentication (replace with actual API call)
    // if (username === "user@example.com" && password === "password") {
    //   // Successful login logic here (e.g., set authentication state)
    //   setErrorMessage("");
    //   console.log("Login successful");
    // } else {
    //   setErrorMessage("Invalid username or password");
    // }
  };

  return (
    <div className="login-form">
      <h2 className="login">Login</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <form onSubmit={handleLogin} className="form bg-success">
        <div className="form-group">
          <label className="form-label usernameLabel">Username:</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="usernameInput"
          />
        </div>{" "}
        <div className="form-group">
          <label className="form-label">Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="e"
          />
        </div>
        <button className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginForm;
