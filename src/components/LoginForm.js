import React, { useState } from "react";
import axios from "../api";
import { useNavigate } from "react-router-dom";

const LoginForm = ({ setToken }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/login`,
        {
          username: username,
          password: password,
        }
      );
      setToken(data.token);
      // Successful login logic here (set authentication state)
      setErrorMessage("");
      navigate("/shop");
    } catch (error) {
      console.error(error);
      setErrorMessage("Invalid username or password");
    }
  };

  return (
    <div className="login-form">
      <h2 className="center">Login</h2>
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
