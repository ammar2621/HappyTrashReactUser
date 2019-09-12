import React from "react";
import { Link } from "react-router-dom";
// import profile from "./profile.jpg";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";
import robot from "./robot.png";
import sorry from "./sorry.png";

class NotFound extends React.Component {
  //   state = { link: "https://yesno.wtf/api" };
  constructor(props) {
    super(props);
    this.state = {
      question: "",
      questionSubmit: "",
      pic: ""
      //   this.filterCountrySingle = this.filterCountrySingle.bind(this);
    };
  }

  render() {
    return (
      <div
        className="text-center"
        style={{
          // backgroundImage: `url(${homebg})`,
          backgroundColor: "#28209e",
          height: "800px",
          width: "100%"
        }}
      >
        <div style={{ padding: "200px 0px 0px 0px" }}>
          <img
            className="text-white text-center animated fadeInDown"
            src={robot}
            height="100px"
          />
          <img
            className="text-white text-center animated fadeInDown"
            src={sorry}
            height="100px"
          />
          <h1
            className="text-white text-center animated fadeInDown"
            style={{
              fontSize: "32px"
            }}
          >
            Page Not Found
          </h1>
          <Link to="/home">
            <button
              type="button"
              className="btn btn-info animated fadeInLeft btn-primary text-center"
            >
              <h5 className="animated zoomIn">Back to Home</h5>
            </button>
          </Link>
        </div>
        <br />
        <br />
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(NotFound);
