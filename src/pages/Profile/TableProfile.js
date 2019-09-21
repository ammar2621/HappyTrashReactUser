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

  // componentDidMount = async () => {
  //   const self = this;
  //   const configProfile = {
  //     method: "GET",
  //     url: self.props.base_url + "/users/" + localStorage.getItem("id"),
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token")
  //     }
  //   };
  //   await axios(configProfile)
  //     .then(function(response) {
  //       self.setState({
  //         name: response.data.name,
  //         email: response.data.email,
  //         mobile_number: response.data.mobile_number,
  //         total_trash: response.data.total_trash
  //       });
  //     })
  //     .then(function(error) {
  //     });
  // };

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
