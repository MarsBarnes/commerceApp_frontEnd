import React, { useState, useEffect, useContext } from "react";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";

const Account = () => {
  const token = useContext(TokenContext);
  const [errorMessage, setErrorMessage] = useState("");
  const [edit, setEdit] = useState(false);
  const [accountData, setAccountData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    username: "",
  });

  // fetch variables for view mode

  useEffect(() => {
    async function fetchAccountData() {
      try {
        const response = await axios.get("http://localhost:3000/user", {
          headers: { Authorization: `Bearer ${token}` },
        });
        //  console.log("response firstname: " + response.data.firstname);
        setAccountData({
          firstname: response.data.firstname,
          lastname: response.data.lastname,
          email: response.data.email,
          username: response.data.username,
        });
      } catch (error) {
        console.error("Error fetching account data:", error);
      }
    }
    if (token !== "") {
      fetchAccountData();
    }
  }, [token]);

  const { firstname, lastname, email, username } = accountData;

  const handleSubmit = async (e) => {
    console.log("handling submit");
    e.preventDefault();
    // Basic validation
    if (!firstname || !lastname || !email || !username) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      const { data } = await axios.post(
        "http://localhost:3000/user",
        accountData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      //  console.log("response firstname: " + response.data.firstname);
      setEdit(!edit);
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error posting account data:", error);
    }
  };

  return (
    <div className="account-form">
      {console.log(edit)}
      {/* if in edit mode, show form. else show view */}
      {/* show edit mode */}
      {edit ? (
        <div className="">
          <h2 className="login">Account Details </h2>{" "}
          <form onSubmit={handleSubmit} className="bg-success form">
            <div className="form-group">
              <label className="form-label ">First Name:</label>
              <input
                type="text"
                name="firstname"
                value={firstname}
                onChange={(e) =>
                  setAccountData((prevAccountData) => ({
                    ...prevAccountData, // Spread the previous state
                    firstname: e.target.value, // Update only the firstname property
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label ">Last Name:</label>
              <input
                type="text"
                value={lastname}
                onChange={(e) =>
                  setAccountData((prevAccountData) => ({
                    ...prevAccountData, // Spread the previous state
                    lastname: e.target.value, // Update only the firstname property
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label ">Email:</label>
              <input
                type="email"
                value={email}
                onChange={(e) =>
                  setAccountData((prevAccountData) => ({
                    ...prevAccountData, // Spread the previous state
                    email: e.target.value, // Update only the firstname property
                  }))
                }
              />
            </div>
            <div className="form-group">
              <label className="form-label usernameLabel">Username:</label>
              <input
                type="text"
                value={username}
                onChange={(e) =>
                  setAccountData((prevAccountData) => ({
                    ...prevAccountData, // Spread the previous state
                    username: e.target.value, // Update only the firstname property
                  }))
                }
                className="usernameInput"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      ) : (
        // show view mode
        <div>
          {" "}
          <h2 className="login">
            Account Details{" "}
            <button
              type="button"
              className="btn btn-primary"
              onClick={(e) => setEdit(!edit)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="editIcon bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
            </button>
          </h2>
          <div className="form bg-success">
            <p>First Name: {firstname}</p>
            <p>Last Name: {lastname}</p>
            <p>Email: {email}</p>
            <p>Username: {username}</p>
          </div>
        </div>
      )}
      <div>
        <h1 className="bg-primary">Primary</h1>
        <h1 className="bg-secondary">Secondary</h1>
        <h1 className="bg-success">success</h1>
        <h1 className="bg-info">info</h1>
        <h1 className="bg-warning">warning</h1>
        <h1 className="bg-danger">danger</h1>
        <h1 className="bg-light">light</h1>
        <h1 className="bg-dark text-light-emphasis">dark</h1>
      </div>
    </div>
  );
};

export default Account;
