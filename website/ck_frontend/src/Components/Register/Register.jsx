import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../minorComponents/Loading";
import ErrorMessage from "../minorComponents/ErrorMessage";

const Register = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pic, setPic] = useState(
    "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
  );
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  // const [picMessage, setPicMessage] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password != confirmpassword) {
      setMessage("Passwords Do Not Match");
    } else {
      setMessage(null);
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        setLoading(true);
        const { data } = await axios.post(
          "/api/users",
          { name, pic, email, password },
          config
        );
        setLoading(false);
        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
        setLoading(false);
      }
    }
    console.log(email);
  };

  return (
    <div className="wrapper fadeInDown">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
      {loading && <Loading />}
      <div id="formContent">
        <div className="fadeIn first">
          <img
            src={require("../../Images/logo1.ico")}
            id="icon"
            alt="User Icon"
          />
        </div>

        <form method="POST" onSubmit={submitHandler}>
          <input
            type="email"
            value={email}
            className="fadeIn second"
            id="email"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="text"
            value={name}
            className="fadeIn third"
            id="Name"
            name="Name"
            placeholder="Enter Name"
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="password"
            value={password}
            id="password"
            className="fadeIn second"
            name="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="password"
            value={confirmpassword}
            id="confirmpassword"
            className="fadeIn third"
            name="confirmpassword"
            placeholder="Confirm Password"
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Submit"
            onClick={() => {
              localStorage.removeItem("userInfo");
              nav("/predictor");
            }}
          />
          <div className="col -md-6">
            Have an Account ?
            <Link to="/" className="col-md-12 underlineHover">
              Login Here
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
