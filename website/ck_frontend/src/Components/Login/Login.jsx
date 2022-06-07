import React, { useState, useEffect } from "react";
import "./styles.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import Loading from "../minorComponents/Loading";
import ErrorMessage from "../minorComponents/ErrorMessage";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const nav = useNavigate();
  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    // const nav = useNavigate();

    if (userInfo) {
      history.push("/predictor");
    }
  }, [history]);
  const submitHandler = async (e) => {
    e.preventDefault();
    console.log(email, password);
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
          // Accept: "application/json",
        },
      };
      setLoading(true);

      // const { data } = await axios.post(
      //   "http://www.localhost:9000/api/users/login/",
      //   {
      //     email,
      //     password,
      //   },
      //   config
      // );
      const { data } = await axios.post(
        "/api/users/login/",
        {
          email,
          password,
        },
        config
      );
      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
      setLoading(false);
      // history.push("/predictor");
      nav("/predictor");
    } catch (error) {
      setError(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="wrapper fadeInDown">
      {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
      {loading && <Loading />}
      <div id="formContent">
        <div className="fadeIn first">
          {/* <img src={logo_img} id="icon" alt="User Icon"></img> */}
          <img
            src={require("../../Images/logo1.ico")}
            id="icon"
            alt="User Icon"
          ></img>
        </div>
        <form method="POST" onSubmit={submitHandler}>
          <input
            type="email"
            id="email"
            value={email}
            className="fadeIn second"
            name="email"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            id="password"
            className="fadeIn third"
            value={password}
            name="password"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            className="fadeIn fourth"
            value="Log In"
            onClick={() => {
              localStorage.removeItem("userInfo");
            }}
          />
        </form>
        <div id="formFooter">
          <div className="row">
            <a className="underlineHover col-md-6" href="#">
              Forgot Password?
            </a>
            <div className="row col -md-6">
              <div className="col-md-12"> New User ?</div>
              <br></br>
              <Link to="/register" className="col-md-12 underlineHover">
                Register Here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
