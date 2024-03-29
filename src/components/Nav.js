import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { TokenContext } from "../contexts/TokenContext";
import axios from "../api";
import * as bootstrap from "bootstrap";

function Navbar({ logout }) {
  const token = useContext(TokenContext);
  const loggedIn = token !== "";

  function collapseNav() {
    if (document.querySelector(".App").clientWidth <= 992) {
      const el = document.getElementById("navbarSupportedContent");
      const bs = new bootstrap.Collapse(el);
      bs.hide();
    }
  }

  async function handleLogout() {
    collapseNav();
    try {
      await axios.post(`${process.env.REACT_APP_BACKEND_URL}/logout`, null, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      logout();
      // Redirect to the shop page after logout
    } catch (error) {
      console.error("error occured");
    }
  }

  return (
    <div>
      {loggedIn ? (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/shop">
              Sticker Shop
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
                  <NavLink
                    className="nav-link"
                    to="/shop"
                    onClick={handleLogout}
                  >
                    Logout
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/account"
                    onClick={collapseNav}
                  >
                    Account
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/orders"
                    onClick={collapseNav}
                  >
                    Orders
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/shop"
                    onClick={collapseNav}
                  >
                    Shop
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/cart"
                    onClick={collapseNav}
                  >
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
        </nav>
      ) : (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/shop">
              Sticker Shop
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
                  <NavLink
                    className="nav-link"
                    aria-current="page"
                    to="/login"
                    onClick={collapseNav}
                  >
                    Login
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/register"
                    onClick={collapseNav}
                  >
                    Register
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    className="nav-link"
                    to="/shop"
                    onClick={collapseNav}
                  >
                    Shop
                  </NavLink>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
}

export default Navbar;
