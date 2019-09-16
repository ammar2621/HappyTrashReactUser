import React, { Component } from "react";
import { MDBTable, MDBTableBody } from "mdbreact";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";
import { async } from "q";

class TableProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      email: "",
      password: "",
      mobile_number: null,
      data: []
    };
  }

  setName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  setMobile_number = e => {
    e.preventDefault();
    this.setState({ mobile_number: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  componentDidMount = async () => {
    const self = this;
    const configProfile = {
      method: "GET",
      url: self.props.base_url + "/users/" + localStorage.getItem("id"),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(configProfile)
      .then(function(response) {
        // console.log(response.data);
        // console.log(response.data.name);
        self.setState({
          name: response.data.name,
          email: response.data.email,
          mobile_number: response.data.mobile_number
        });
      })
      .then(function(error) {
        console.log(error);
      });
  };

  render() {
    console.log("woi", this.state.data);
    const self = this;
    const data = {
      rows: [
        {
          key: "Nama",
          value: this.state.name
        },
        {
          key: "Email",
          value: this.state.email
        },
        {
          key: "Nomor Handphone",
          value: this.state.mobile_number
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
