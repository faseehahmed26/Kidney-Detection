import React, { Component } from "react";
// import ReactDOM from "react-dom";
// import { Navigate } from "react-router";
import "./styles.css";
import "bootstrap/dist/css/bootstrap.css";
import Navigation from "../Navigation/Navigation";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import axios from "axios";
import Loading from "../minorComponents/Loading";
import ErrorMessage from "../minorComponents/ErrorMessage";
// import tsParticles from "tsparticles";

// import tsParticles from "./Particles";
// export * from "tsparticles/dist/Enums";

// export default Particles;
export { Particles };
class Predictor extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLoading: false,
      formData: {
        whitebloodcell_count: "",
        bloodurea: "",
        blood_glucose_random: "",
        serum_creatinine: "",
        packed_cell_volume: "",
        albumin: "",
        haemoglobin: "",
        age: "",
        sugar: "",
        hypertension: "",
      },
      result: "",
      predicted: "",
      data: "",
    };
  }
  async customInit(engine: Engine): Promise<void> {
    // this adds the bundle to tsParticles
    await loadFull(engine);
  }

  handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    var formData = this.state.formData;
    formData[name] = value;
    this.setState({
      formData,
    });
  };

  handlePredictClick = async (e) => {
    e.preventDefault();
    const formData = this.state.formData;
    const values = Object.keys(formData).map(function(key) {
      return formData[key];
    });
    //
    console.log(JSON.stringify(values));
    // console.log(this.data);
    this.setState({ isLoading: true });

    const res = await fetch("http://127.0.0.1:5000/prediction/", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      method: "POST",
      body: JSON.stringify(values),
    })
      .then((response) => response.json())
      .then((response) => {
        console.log(response.predicted);
        this.setState({
          result: response.result,
          predicted: response.predicted,
          isLoading: false,
        });
        const res = response.result;
        const pred = response.predicted;

        console.log(res, pred);
        // console.log(formData);
        // values.push(pred);

        const arr = values.concat(pred);
        const pat = [
          "White_Blood_Cell",
          "Blood_Urea",
          "Blood_Glucose_Random",
          "Serum_creatine",
          "Packed_cell_volume",
          "Albumin",
          "Haemoglobin",
          "Age",
          "Sugar",
          "Hypertension",
          "Predicted",
        ];
        console.log(arr.at(11));
        const patdata = {};
        pat.forEach((pa, i) => (patdata[pa] = arr[i]));

        try {
          const config = {
            headers: {
              "Content-type": "application/json",
              // Accept: "application/json",
            },
          };

          const { data } = axios.post(
            "/api/users/patientDetails",
            patdata,
            config
          );

          console.log(patdata);
          console.log(data);
        } catch (error) {
          console.log(error.response.data);
        }
      });
  };

  handleCancelClick = (event) => {
    this.setState({ result: "", predicted: null });
  };

  render() {
    const isLoading = this.state.isLoading;
    const formData = this.state.formData;
    const result = this.state.result;
    const predicted = this.state.predicted;
    const particleParams = {
      background: {
        color: { value: "#0d47a1" },
        image: "",
        position: "50% 50%",
        repeat: "no-repeat",
        size: "cover",
        width: 1180,
        height: 582,
        opacity: 0.3,
      },
      backgroundMask: {
        composite: "destination-out",
        cover: { color: { value: "#fff" }, opacity: 0.2 },
        enable: false,
      },
      fullScreen: { enable: false, zIndex: 1 },

      fpsLimit: 60,
      particles: {
        color: {
          value: "#ffffff",
        },
        links: {
          blink: false,
          color: { value: "#ffffff" },
          consent: false,
          distance: 150,
          enable: true,
          frequency: 1,
          opacity: 1,
          shadow: { blur: 5, color: { value: "#000000" }, enable: true },
          triangles: { enable: false, frequency: 1 },
          width: 1,
          warp: false,
        },
        move: {
          angle: { offset: 0, value: 90 },
          attract: {
            distance: 200,
            enable: false,
            rotate: { x: 606, y: 1185 },
          },
          center: { x: 50, y: 50, radius: 0 },
          decay: 0,
          distance: {},
          direction: "none",
          drift: 0,
          enable: true,
          gravity: {
            acceleration: 9.81,
            enable: false,
            inverse: false,
            maxSpeed: 50,
          },
          path: {
            clamp: true,
            delay: { random: { enable: false, minimumValue: 0 }, value: 0 },
            enable: false,
            options: {},
          },
          outModes: {
            default: "out",
            bottom: "out",
            left: "out",
            right: "out",
            top: "out",
          },
          random: false,
          size: false,
          speed: 2,
          spin: { acceleration: 0, enable: false },
          straight: false,
          trail: { enable: false, length: 10, fillColor: { value: "#000000" } },
          vibrate: false,
          warp: false,
        },
        number: {
          density: {
            enable: true,
            value_area: 1000,
          },
          value: 100,
        },
        opacity: {
          value: 1,
          random: false,
          anim: {
            enable: false,
          },
        },
        shape: {
          type: "circle",
        },
        size: {
          random: false,
          value: 5,
        },
      },
      retina_detect: true,
    };

    return (
      <React.Fragment>
        <div className="body ">
          {/* <Particles className="particles" params={particleParams} /> */}
          <Particles options={particleParams} init={this.customInit} />

          <div></div>
          <div className="content row ">
            <div className="col-md-4"></div>

            <form className="form  col-md-6 ">
              {/* <div className="col-md-1"></div> */}
              {/* <div className="col-md-5"> */}
              <h3 className="title">Chronic Kidney Disease Predictor</h3>
              {/* </div> */}

              <ul>
                <div className="form-group form-row">
                  <label
                    htmlFor="whitebloodcell_count"
                    className="label col-md-4 font-weight-bold"
                  >
                    White blood cell count :
                  </label>
                  <span className="col-md-6">
                    <input
                      className="input"
                      name="whitebloodcell_count"
                      value={formData.whitebloodcell_count}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="bloodurea"
                    className="label col-md-4 font-weight-bold"
                  >
                    Blood Urea :
                  </label>
                  <span className="col-md-4">
                    <input
                      className="input"
                      name="bloodurea"
                      value={formData.bloodurea}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="blood_glucose_random"
                    className="label col-md-4 font-weight-bold"
                  >
                    Blood Glucose Random :
                  </label>
                  <span className="col-md-4.5">
                    <input
                      className="input"
                      name="blood_glucose_random"
                      value={formData.blood_glucose_random}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="serum_creatinine"
                    className="label col-md-4 font-weight-bold"
                  >
                    Serum creatinine :
                  </label>
                  <span>
                    <input
                      name="serum_creatinine"
                      value={formData.serum_creatinine}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="packed_cell-volume"
                    className="label col-md-4 font-weight-bold"
                  >
                    Packed cell volume :
                  </label>
                  <span>
                    <input
                      name="packed_cell_volume"
                      value={formData.packed_cell_volume}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="albumin"
                    className="label col-md-4 font-weight-bold"
                  >
                    Albumin :
                  </label>
                  <span>
                    <input
                      name="albumin"
                      value={formData.albumin}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="haemoglobin"
                    className="label col-md-4 font-weight-bold"
                  >
                    Haemoglobin :
                  </label>
                  <span>
                    <input
                      name="haemoglobin"
                      value={formData.haemoglobin}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="age"
                    className="label col-md-4 font-weight-bold"
                  >
                    Age :
                  </label>
                  <span>
                    <input
                      name="age"
                      value={formData.age}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="sugar"
                    className="label col-md-4 font-weight-bold"
                  >
                    Sugar :
                  </label>
                  <span>
                    <input
                      name="sugar"
                      value={formData.sugar}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>
                <div className="form-group form-row">
                  <label
                    htmlFor="hypertension"
                    className="label col-md-4 font-weight-bold"
                  >
                    Hypertension:
                  </label>
                  <span>
                    <input
                      name="hypertension"
                      value={formData.hypertension}
                      onChange={this.handleChange}
                      required
                    />
                  </span>
                </div>

                <div className="form-group form-row">
                  <div className="col-md-7">
                    <button
                      className="btn-md btn-success btn-block"
                      disabled={isLoading}
                      onClick={
                        !isLoading ? this.handlePredictClick : this.predictPage
                      }
                    >
                      {isLoading ? "Making prediction" : "Predict"}
                    </button>
                  </div>
                  {/* <div className="col-lg-2">
                  <button
                    block="true"
                    className="btn btn-danger"
                    disabled={isLoading}
                    onClick={this.handleCancelClick}
                  >
                    Reset prediction
                  </button>
                </div> */}
                </div>
              </ul>
            </form>
            <div className="col-md-3"></div>
            {/* <Particles options={particleParams} init={this.customInit} />; */}
          </div>
          {predicted === "" ? null : <Navigation pred={predicted} />}
          {/* </img> */}
        </div>
      </React.Fragment>
    );
  }
}

export default Predictor;
