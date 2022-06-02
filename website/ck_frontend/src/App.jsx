import React, { Component } from "react";
import NavigationBar from "./Components/NavigationBar/NavigationBar";
import Predictor from "./Components/Predictor/Predictor";
import NPredict from "./Components/NPredict/NPredict";
import YPredict from "./Components/YPredict/YPredict";

import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
// import Dashboard from "./Dashboard";
// import ShoppingCart from "./ShoppingCart";
// import CustomersList from "./CustomersList";
import { Route } from "react-router";
import { BrowserRouter, Routes } from "react-router-dom";
import NoMatchPage from "./Components/NoMatchPage/NoMatchPage";
export default class App extends Component {
  render() {
    return (
      // <BrowserRouter>
      //   <NavBar />
      //   <div className="container-fluid">
      //     <Routes>
      //       <Route path="/" exact component={Login} />
      //       <Route path="/dashboard" exact component={Dashboard} />
      //       <Route path="/customers" exact component={CustomersList} />
      //       <Route path="/cart" exact component={ShoppingCart} />
      //       <Route path="" component={NoMatchPage} />
      //     </Routes>
      //   </div>
      // </BrowserRouter>
      // <React.Fragment>
      <BrowserRouter>
        <NavigationBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/register" exact element={<Register />} />

            <Route path="/predictor" exact element={<Predictor />} />
            <Route path="/YPredict" exact element={<YPredict />} />
            <Route path="/NPredict" exact element={<NPredict />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </BrowserRouter>
      // </React.Fragment>
    );
  }
}
