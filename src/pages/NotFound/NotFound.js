import React from "react";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import "./notfound.css";
import { Link } from "react-router-dom";

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
        <div className="body" style={{ color: "white" }}>
          <div className="row pr-5">
            <h2 className="">Halaman Tidak Ada</h2>
          </div>
          <div className="row pl-5">
            <h2 className="">
              Klik
              <Link to="./home"> ini </Link>
              untuk kembali
            </h2>
          </div>
        </div>
      </notfound>
    );
  }
}

export default connect(
  "is_login",
  actions
)(NotFound);
