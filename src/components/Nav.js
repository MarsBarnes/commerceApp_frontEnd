import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import DarkModeToggle from "./DarkModeToggle";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";

function Navbar({ logout }) {
  const token = useContext(TokenContext);
  const loggedIn = token !== "";
  //  CHANGE LOGGEDiN TO CHECK ENSURE AUTHENTICATION CALL INSTEAD OF TOKEN

  // const loggedIn = async () => {
  //   try {
  //     await axios.get("http://localhost:3000/ensureAuth", null, {
  //       headers: { Authorization: `Bearer ${token}` },
  //     });
  //     console.log("Authorization successful");
  //   } catch (error) {
  //     console.log("woops");
  //   }
  // }
  console.log("token", token);

  async function handleLogout() {
    try {
      await axios.post("http://localhost:3000/logout", null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log("Logged out successfully");
      logout();
      // Redirect to the shop page after logout
    } catch (error) {
      // console.error("Error logging out:", error);
      console.log("woops");
    }
  }

  return (
    <div>
      {console.log("loggedIn: " + loggedIn)}
      {/* //use ternary //if logged in: show logout and account //if logged out:
      show login and register //if in shop: show cart and filter //if not in
      shop: show just shop //Add clickability to filter so dropdown shows //Only
      show filter when shopping */}
      {/* if loggedIn = true, show commerce, logout, account, orders, shop, and cart */}
      {/* if loggedIn = false, show commerce, login, shop */}
      {/* show loggedIn mode */}
      {loggedIn ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/shop">
              LoggedIn
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                {/* <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">
                    Login
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/account">
                    Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/orders">
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-cart cartIcon"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
          <DarkModeToggle />
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/shop">
              LoggedOut
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <NavLink className="nav-link" aria-current="page" to="/login">
                    Login
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <button
                    type="button"
                    className="nav-link"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/register">
                    Register
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/account">
                    Account
                  </NavLink>
                </li> */}
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/orders">
                    Orders
                  </NavLink>
                </li> */}
                <li className="nav-item">
                  <NavLink className="nav-link" to="/shop">
                    Shop
                  </NavLink>
                </li>
                {/* <li className="nav-item">
                  <NavLink className="nav-link" to="/cart">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                      className="bi bi-cart cartIcon"
                    >
                      <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
                    </svg>
                  </NavLink>
                </li> */}
              </ul>
            </div>
          </div>
          <DarkModeToggle />
        </nav>
      )}
    </div>
  );
}

export default Navbar;
