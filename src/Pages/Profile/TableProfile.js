import React, { Component } from "react";
import { MDBTable, MDBTableBody } from "mdbreact";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionProfile";
import { withRouter } from "react-router-dom";

class TableProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      password: "",
      total_trash: null,
      mobile_number: null,
      data: []
    };
  }

  // to call function at store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.loadProfile();
    }
  };

  render() {
    const data = {
      rows: [
        {
          key: "Nama",
          value: localStorage.getItem("name")
        },
        {
          key: "Email",
          value: localStorage.getItem("email")
        },
        {
          key: "Nomor Handphone",
          value: localStorage.getItem("mobile_number")
        },
        {
          key: "Total Sampahmu",
          value: localStorage.getItem("total_trash")
        }
      ]
    };
    return (
      <MDBTable responsive>
        <MDBTableBody rows={data.rows} />
      </MDBTable>
    );
  }
}

export default connect(
  "is_login, base_url, token",
  actions
)(withRouter(TableProfile));
