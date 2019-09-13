import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalHeader,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBIcon
} from "mdbreact";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";
import swal from "sweetalert";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: null,
      password: null
    };
    this.doLogin = this.doLogin.bind(this);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  sweetAlertFunction() {
    console.log("button clicks");
    swal(
      "Terima Kasih, Sudah Login!",
      "Sampah Online siap membantumu!",
      "success"
    );
  }

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  setToken = e => {
    e.preventDefault();
    this.setState({ token: e.target.value });
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  doLogin = e => {
    e.preventDefault();
    console.log('I login')
    console.log(this.props)
    console.log(this.state)
    const self = this;
    axios
      .post("http://localhost:5000/v1/auth", {

        email: self.state.email,
        password: self.state.password

      })
      .then(function (response) {
        self.props.setLogin(true);
        self.props.setToken(response.data.token);
        console.log(response.data.status);
        self.props.history.replace("/profile");
        alert("Selamat Datang Orang Baik!");
      })
      .catch(function (error) {
        console.log("errrrrrr", error);
      });

  };

  render() {
    return (
      <MDBContainer style={{ padding: "0" }}>
        <MDBBtn
          className="font rounded-pill"
          style={{ width: "145px" }}
          color="dark-green"
          onClick={this.toggle(14)}
        >
          Masuk
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="text-left">
                <MDBCol md="10">
                  <MDBIcon className="text-left" icon="mobile-alt" size="3x" />

                  <form>
                    <div className="grey-text">
                      <MDBInput
                        label="Masukkan nomor handphone mu"
                        group
                        type="text"
                        validate="number"
                        onChange={this.setEmail}
                      />
                      <MDBInput
                        label="Masukkan passwordmu"
                        group
                        type="password"
                        validate
                        onChange={this.setPassword}
                      />
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <Link to="/home">
              <MDBBtn
                className="font rounded-pill"
                onClick={this.doLogin}
                isOpen={this.state.modal14}
                color="dark-green"
              >
                Masuk
              </MDBBtn>
            </Link>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default connect(
  "is_login",
  actions
)(withRouter(SignIn));
