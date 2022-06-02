import React, { Component } from "react";
import { Navigate } from "react-router";

import "bootstrap/dist/css/bootstrap.css";
import NPredict from "../NPredict/NPredict";
import YPredict from "../YPredict/YPredict";

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      pred: this.props.pred,
    };
    // console.log(this.state.pred);
  }

  render() {
    const pred = this.state.pred;
    // const root = createRoot(document.getElementById("root"));
    console.log(pred);
    //   if (pred === "1") {
    //     console.log("YPredict");
    //     return <YPredict />;
    //   }
    //   return <NPredict />;

    return (
      <React.Fragment>
        {pred === "1" ? <YPredict /> : <NPredict />}
        {pred === "1" ? (
          <Navigate to="/YPredict" replace={true} />
        ) : (
          <Navigate to="/NPredict" replace={true} />
        )}
      </React.Fragment>
    );
  }
  // root.render(<Greeting isLoggedIn={false} />);
  // Try changing to isLoggedIn={true}:

  // var pred=this.state.pred;

  // const root = ReactDOM.createRoot(document.getElementById('root'));
  // // Try changing to isLoggedIn={true}:
  // root.render(<Greeting isLoggedIn={false} />);
}

export default Navigation;
// export { Greeting };
