import React, { Component } from "react";
import { Link } from "react-router-dom";

class YPredict extends Component {
  render() {
    // const isLoading = this.state.isLoading;
    // const formData = this.state.formData;
    // const result = this.state.result;
    return (
      <React.Fragment>
        <div className="row" style={{ marginBottom: "477px" }}>
          <div className="col-md-2"></div>
          <div className="col-md-8">
            <div className="jumbotron text-center ">
              <h1 className="font-weight-bold">You have a Kidney Disease !</h1>
              <h4 className="font-weight-bold">
                Please Consult the Doctor Immideately. It is too risky without
                consultation. Make sure you have a healthy diet.
              </h4>
              <div className="text-center">
                <hr className="my-4" />
                <h1 className="font-weight-bold">
                  Proper Doctor Consultation Needed.
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

export default YPredict;
