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
        const response = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user`,
          {
            headers: { Authorization: `Bearer ${token}` },
          }
        );
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
    e.preventDefault();
    // Basic validation
    if (!firstname || !lastname || !email || !username) {
      setErrorMessage("Please fill in all fields");
      return;
    }

    try {
      await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/user`,
        accountData,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );
      setEdit(!edit);
    } catch (error) {
      setErrorMessage(error.message);
      console.error("Error posting account data:", error);
    }
  };

  return (
    <div className="account-form grid account">
      {/* if in edit mode, show form. else show view */}
      {/* show edit mode */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      {edit ? (
        <div className="">
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
                    ...prevAccountData,
                    lastname: e.target.value,
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
                    ...prevAccountData,
                    email: e.target.value,
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
                    ...prevAccountData,
                    username: e.target.value,
                  }))
                }
                className="usernameInput"
              />
            </div>
            <button className="btn btn-primary">Submit</button>
          </form>
        </div>
      ) : (
        <div className="">
          <div className="bg-success form">
            <div className="form-group">
              <label className="form-label ">First Name:</label>
              <input type="text" name="firstname" value={firstname} readOnly />
            </div>
            <div className="form-group">
              <label className="form-label ">Last Name:</label>
              <input type="text" value={lastname} readOnly />
            </div>
            <div className="form-group">
              <label className="form-label ">Email:</label>
              <input type="email" value={email} readOnly />
            </div>
            <div className="form-group">
              <label className="form-label usernameLabel">Username:</label>
              <input
                type="text"
                value={username}
                readOnly
                className="usernameInput"
              />
            </div>

            <button
              type="button"
              className="btn btn-primary editButton"
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Account;
