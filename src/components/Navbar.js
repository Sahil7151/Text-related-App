import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";

export default function Navbar(props) {
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          {props.here}
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                {props.there}
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Other~info
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link
                  className="dropdown-item"
                  to="/info"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasRight"
                  aria-controls="offcanvasRight"
                >
                  Developer-info
                </Link>
                <Link
                  className="dropdown-item"
                  to="/"
                  data-bs-toggle="modal"
                  data-bs-target="#staticBackdrop"
                >
                  Date_of_producion
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/time">
                  TIME
                </Link>
              </div>
            </li>
          </ul>
          <div className="form-check form-switch">
            <input
              className={`form-check-input text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              type="checkbox"
              role="switch"
              id="flexSwitchCheckDefault"
              onClick={props.toggle}
            />
            <label
              className={`form-check-label text-${
                props.mode === "light" ? "dark" : "light"
              }`}
              htmlFor="flexSwitchCheckDefault"
            >
              DarkMODE
            </label>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.defaultProps = {
  here: "Set the title",
  there: "Describe About US",
};
