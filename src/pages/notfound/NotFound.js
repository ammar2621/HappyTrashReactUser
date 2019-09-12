import React from "react";
import { Link } from "react-router-dom";
// import profile from "./profile.jpg";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { Redirect } from "react-router-dom";
import robot from "./robot.png";
import sorry from "./sorry.png";
import "./notfound.css";

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
      <div className="body">
        <div className="text" data-text="BREAK">
          BREAK
        </div>
      </div>
    );
  }
}

export default connect(
  "is_login",
  actions
)(NotFound);
