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
import zxcvbn from "zxcvbn";
import "./register.css";
import Swal from "sweetalert2";

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    val => val.length > 0 && (valid = false)
  );
  return valid;
};

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPhoneRegex = RegExp(/^0[0-9]{9,}$/);

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: null,
      email: null,
      password: null,
      mobile_number: null,
      status: false,
      type: "password",
      score: "null",
      errors: {
        username: "",
        email: "",
        password: "",
        mobile_number: ""
      }
    };
    this.doRegister = this.doRegister.bind(this);
    this.showHide = this.showHide.bind(this);
    this.passwordStrength = this.passwordStrength.bind(this);
  }

  showHide(e) {
    e.preventDefault();
    e.stopPropagation();
    this.setState({
      type: this.state.type === "input" ? "password" : "input"
    });
  }

  passwordStrength(e) {
    if (e.target.value === "") {
      this.setState({
        score: "null"
      });
    } else {
      var pw = zxcvbn(e.target.value);
      this.setState({
        score: pw.score
      });
    }
  }

  handleChange = event => {
    event.preventDefault();
    // this.setState({ password: event.target.value });
    console.log("dsadsa");

    const { name, value } = event.target;
    let errors = this.state.errors;
    // console.log(name, value);
    switch (name) {
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email tidak valid!";
        break;
      case "mobile_number":
        errors.mobile_number = validPhoneRegex.test(value)
          ? ""
          : "Nomor Handphonemu tidak valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password harus lebih dari 8 huruf!" : "";
        if (event.target.value === "") {
          this.setState({
            score: "null"
          });
        } else {
          var pw = zxcvbn(event.target.value);
          this.setState({
            score: pw.score
          });
        }
        break;
      default:
      // break;
    }
    this.setState({ errors, [name]: value }, () => {
      // console.log(errors);
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
      console.info("Valid Form");
    } else {
      console.error("Invalid Form");
    }
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  setUsername = e => {
    e.preventDefault();
    this.setState({ username: e.target.value });
  };

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
  };

  setPassword = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  setNumber = e => {
    e.preventDefault();
    this.setState({ mobile_number: e.target.value });
  };

  setStatus = e => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  };

  // Function to user's regitser
  doRegister = async e => {
    e.preventDefault();
    const regex_name = /^(?![\s.]+$)[a-zA-Z\s.']*$/;
    const regex_password = /^[a-zA-Z1-9]{8,15}$/;
    const self = this;
    // check the data validation
    if (
      this.state.username == null ||
      this.state.email == null ||
      this.state.mobile_number == null ||
      this.state.password == null
    ) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Lengkapi data terlebih dahulu!"
      });
      return false;
    } else if (!regex_name.test(this.state.username)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Gunakan Huruf Untuk Nama (Minimal 2 Huruf)!"
      });
      return false;
    } else if (
      !validEmailRegex.test(this.state.email) ||
      !validPhoneRegex.test(this.state.mobile_number)
    ) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Data yang anda masukan tidak valid!"
      });
      return false;
    } else if (!regex_password.test(this.state.password)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Password harus lebih dari 8 dan kurang dari 15 karakter!"
      });
      return false;
    }
    await axios
      .post(self.props.base_url + "/users", {
        name: self.state.username,
        email: self.state.email,
        password: self.state.password,
        mobile_number: self.state.mobile_number,
        status: false
      })
      .then(function(response) {
        axios
          .post(self.props.base_url + "/auth", {
            email: self.state.email,
            password: self.state.password
          })
          .then(function(response) {
            localStorage.setItem("token", response.data.token);
            localStorage.setItem("intro", true);

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
                  // swal(
                  //   "Terima Kasih, Sudah Mendaftar!",
                  //   "Sampah Online siap membantumu!",
                  //   "success"
                  // );
                  // self.props.history.push("/home");
                  // resita- get the user's point
                  axios
                    .get(
                      self.props.base_url +
                        "/users/" +
                        localStorage.getItem("id"),
                      {
                        headers: {
                          Authorization:
                            "Bearer " + localStorage.getItem("token")
                        }
                      }
                    )
                    .then(function(response) {
                      localStorage.setItem("point", response.data.point);
                    })
                    .catch(function(error) {
                      console.log(error);
                      swal("Oops ada yang salah!", "Coba lagi!", "error");
                    });
                } else {
                  swal("Oops ada yang salah!", "Coba lagi!", "error");
                }
              })
              .catch(function(error) {
                console.log("errrrrrr", error);
                swal("Oops ada yang salah!", "Coba lagi!", "error");
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
        self.props.history.push("/home");
        swal(
          "Terima Kasih, Sudah Mendaftar!",
          "Sampah Online siap membantumu!",
          "success"
        );
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
        swal("Oooppss!", "Ada yang error!", "error");
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <MDBContainer style={{ padding: "0" }}>
        <MDBBtn
          id="buttonHover"
          className="font rounded-pill"
          style={{ width: "145px" }}
          color="dark-green"
          onClick={this.toggle(14)}
        >
          DAFTAR
        </MDBBtn>
        <MDBModal
          className="font"
          isOpen={this.state.modal14}
          toggle={this.toggle(14)}
          centered
        >
          <MDBModalHeader toggle={this.toggle(14)}>Daftar</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-left font">
                <MDBCol md="12">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div
                      className="grey-text"
                      style={{ width: "100%", margin: "0" }}
                    >
                      <MDBInput
                        style={{ marginBottom: "5px" }}
                        color="black"
                        label="Masukkan Namamu"
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                        noValidate
                        name="username"
                      />
                      {/* {errors.username.length > 0 && (
                        <span className="error">{errors.username}</span>
                      )} */}
                      <MDBInput
                        style={{ marginBottom: "5px", marginTop: "13px" }}
                        label="Masukkan Emailmu"
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                        noValidate
                        name="email"
                      />
                      {errors.email.length > 0 && (
                        <span className="error">{errors.email}</span>
                      )}
                      <MDBInput
                        style={{ marginBottom: "5px", marginTop: "10px" }}
                        label="Masukkan Nomor Handphonemu"
                        group
                        type="text"
                        validate
                        onChange={this.handleChange}
                        noValidate
                        name="mobile_number"
                      />
                      {errors.mobile_number.length > 0 && (
                        <span className="error">{errors.mobile_number}</span>
                      )}
                      <label className="password" style={{ width: "100%" }}>
                        <MDBInput
                          className="password__input"
                          onChange={this.handleChange}
                          style={{ marginBottom: "5px", marginTop: "10px" }}
                          label="Masukkan Passwordmu"
                          group
                          type={this.state.type}
                          validate
                          // onChange={this.handleChange}
                          noValidate
                          name="password"
                        />
                        <span
                          className="password__show mb-3"
                          onClick={this.showHide}
                        >
                          {this.state.type === "input" ? "Hide" : "Show"}
                        </span>
                        <div className="row">
                          <div style={{ fontSize: "10px" }} className="col-4">
                            Kekuatan Password
                          </div>

                          <span
                            className="password__strength m-0 p-0"
                            data-score={this.state.score}
                          ></span>
                        </div>
                      </label>
                      {errors.password.length > 0 && (
                        <span className="error">{errors.password}</span>
                      )}
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </MDBContainer>
          </MDBModalBody>
          <MDBModalFooter>
            <div className="text-center">
              <MDBBtn
                id="buttonHover"
                className="font rounded-pill"
                onClick={e => {
                  this.doRegister(e);
                }}
                isOpen={this.state.modal14}
                color="dark-green"
              >
                Register
              </MDBBtn>
            </div>
          </MDBModalFooter>
        </MDBModal>
      </MDBContainer>
    );
  }
}

export default connect(
  "is_login, base_url, token",
  actions
)(withRouter(Register));
