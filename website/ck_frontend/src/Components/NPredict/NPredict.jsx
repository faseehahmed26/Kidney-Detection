import React, { Component } from "react";
import { Navigate } from "react-router";
import { Link } from "react-router-dom";

class NPredict extends Component {
  handleClick = (event) => {
    <Navigate to="/predictor" replace={true} />;
  };
  render() {
    // const isLoading = this.state.isLoading;
    // const formData = this.state.formData;
    // const result = this.state.result;

    return (
      <React.Fragment>
        <div className="row" style={{ marginBottom: "477px" }}>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="jumbotron">
              <h1 className="display-4 text-center font-weight-bold">
                Great! You are Healthy
              </h1>
              <p className="lead text-center ">
                You are Absolutely Alright ! There is no Marks for Kidney
                Disease. Enjoy you life with full of Happiness.
              </p>
              <div className="text-center">
                <hr className="my-4" />
                <h1 className="font-weight-bold">
                  Be careful at your health. Nothing is important than your
                  health.
                </h1>
                <p className="lead">
                  <a
                    className="btn btn-primary btn-lg"
                    href="https://www.cdc.gov/kidneydisease/basics.html#:~:text=CKD%20is%20a%20condition%20in,as%20heart%20disease%20and%20stroke"
                    role="button"
                  >
                    Learn more
                  </a>
                </p>
              </div>
              <div className="text-center">
                <button>
                  <Link to="/predictor" className="nav-link">
                    Back To Predictor
                  </Link>
                </button>
              </div>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default NPredict;
