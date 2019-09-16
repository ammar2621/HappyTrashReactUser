import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../store";
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
      <notfound>
        <div className="body">
          <div className="warning">ERROR 404</div>
        </div>
      </notfound>
    );
  }
}

export default connect(
  "is_login",
  actions
)(NotFound);
