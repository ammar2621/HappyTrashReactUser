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
  MDBInput
} from "mdbreact";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import { withRouter, Link, Redirect } from "react-router-dom";
import swal from "sweetalert";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      email: null,
      type: "password",
      password: null
    };
    this.doLogin = this.doLogin.bind(this);
    this.showHide = this.showHide.bind(this);
  }

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

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

  doLogin = async e => {
    e.preventDefault();
    const self = this;
    await axios
      .post(self.props.base_url + "/auth", {
        email: self.state.email,
        password: self.state.password
      })
      .then(function(response) {
        localStorage.setItem("token", response.data.token);
        console.log(response.data.token);
        // code Fikri
        axios
          .get(self.props.base_url + "/auth", {
            headers: {
              Authorization: "Bearer " + response.data.token
            }
          })
          .then(response => {
            console.log(response);
            if (response.data.claims.role === false) {
              localStorage.setItem("isLogin", true);
              localStorage.setItem("id", response.data.claims.id);
              localStorage.setItem("name", response.data.claims.name);
              localStorage.setItem("email", response.data.claims.email);
              localStorage.setItem(
                "mobile_number",
                response.data.claims.mobile_number
              );
              self.props.history.replace("/home");
              swal(
                "Terima Kasih, Sudah Login!",
                "Sampah Online siap membantumu!",
                "success"
              );
              // self.props.history.push("/home");
              // resita- get the user's point
              axios
                .get(
                  self.props.base_url + "/users/" + localStorage.getItem("id"),
                  {
                    headers: {
                      Authorization: "Bearer " + localStorage.getItem("token")
                    }
                  }
                )
                .then(function(response) {
                  localStorage.setItem("point", response.data.point);
                })
                .catch(function(error) {
                  console.log(error);
                  swal("Email atau passwordmu salah!", "Coba lagi!", "error");
                });
            } else {
              swal("Email atau passwordmu salah!", "Coba lagi!", "error");
            }
          })
          .catch(function(error) {
            console.log("errrrrrr", error);
            swal("Email atau passwordmu salah!", "Coba lagi!", "error");
          });

        // self.props.setLogin(true);
        self.props.setToken(response.data.token);
        // console.log(response.data.status);
        // console.log(self.props);
        // self.props.history.replace("/profile");
        // swal(
        //   "Terima Kasih, Sudah Login!",
        //   "Sampah Online siap membantumu!",
        //   "success"
        // );
        // self.props.history.push("/home");
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
        swal("Email atau passwordmu salah!", "Coba lagi!", "error");
      });
  };

  render() {
    return (
      <MDBContainer style={{ padding: "0" }}>
        <MDBBtn
          id="buttonHover"
          className="font rounded-pill"
          style={{ width: "145px" }}
          color="dark-green"
          onClick={this.toggle(14)}
        >
          Masuk
        </MDBBtn>
        <MDBModal
          className="font"
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          centered
        >
          <MDBModalHeader toggle={this.toggle(14)}>Masuk</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="text-left">
                <MDBCol md="12">
                  {/* <MDBIcon className="text-left" icon="mobile-alt" size="3x" /> */}
                  <form>
                    <div
                      className="grey-text"
                      style={{ width: "100%", margin: "0" }}
                    >
                      <MDBInput
                        label="Masukkan emailmu"
                        group
                        type="text"
                        validate="number"
                        onChange={this.setEmail}
                      />
                      <label className="password" style={{ width: "100%" }}>
                        <MDBInput
                          className="password__input"
                          onChange={this.setPassword}
                          style={{ marginBottom: "5px" }}
                          label="Masukkan Passwordmu"
                          group
                          type={this.state.type}
                          validate
                          // onChange={this.handleChange}
                          noValidate
                          name="password"
                        />
                        <span
                          className="password__show"
                          onClick={this.showHide}
                        >
                          {this.state.type === "input" ? "Hide" : "Show"}
                        </span>
                      </label>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <MDBBtn
              id="buttonHover"
              className="font rounded-pill"
              onClick={this.doLogin}
              isOpen={this.state.modal14}
              color="dark-green"
            >
              Masuk
            </MDBBtn>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default connect(
  "is_login, base_url, token",
  actions
)(withRouter(SignIn));
