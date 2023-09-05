import React, { useState, useEffect } from "react";

const Account = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [edit, setEdit] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!username || !password) {
      setErrorMessage("Please fill in all fields");
      return;
    }
  };

  return (
    //add an edit button. have 1st view read only then when edit button is clicked show form to edit

    <div className="account-form">
      <h2 className="login">Account Details</h2>

      {console.log(edit)}
      {/* if in edit mode, show form. else show view */}
      {edit ? (
        <div className="bg-success">
          {" "}
          <form onSubmit={handleLogin} className="form">
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
            <button className="btn btn-primary" onClick={(e) => setEdit(!edit)}>
              Submit
            </button>
          </form>
        </div>
      ) : (
        <div className="form bg-success">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => setEdit(!edit)}
          >
            Edit
          </button>
          <p>First Name: {firstname}</p>
          <p>Last Name: {lastname}</p>
          <p>Email: {email}</p>
          <p>Username: {username}</p>
        </div>
      )}
    </div>
  );

};

export default Account;
