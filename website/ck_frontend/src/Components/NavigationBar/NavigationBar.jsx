import React from "react";
import { Link, useNavigate } from "react-router-dom";
// import {
//   Container,
//   Form,
//   FormControl,
//   Nav,
//   Navbar,
//   NavDropdown,
// } from "react-bootstrap";
import "./styles.css";
const NavigationBar = () => {
  // useEffect(() => {
  //   const userInfo = localStorage.getItem("userInfo");

  //   if (userInfo) {
  //     history.push("/predictor");
  //   }
  // }, [history]);
  const nav = useNavigate();
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar-style">
        <a className="navbar-brand" href="/#">
          Chronic Kidney
        </a>

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
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <Link to="/register" className="nav-link">
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Login
              </Link>
            </li>

            <li className="nav-item">
              <Link to="/predictor" className="nav-link">
                Predictor
              </Link>
            </li>
          </ul>
          {/* <ul>
            <li className="nav-item">
              <a
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  nav("/");
                }}
                className="nav-link"
              >
                LogOut
              </a>
            </li>
          </ul> */}
          <ul className="navbar-nav text-right">
            <li className="nav-item active">
              <a
                className="nav-link"
                onClick={() => {
                  localStorage.removeItem("userInfo");
                  nav("/");
                }}
                href="#"
              >
                LogOut
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

export default NavigationBar;
