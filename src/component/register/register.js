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
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";
import swal from "sweetalert";

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);
const validPhoneRegex = RegExp(/^0[0-9]{9,}$/);

const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    val => val.length > 0 && (valid = false)
  );
  return valid;
};
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: null,
      email: null,
      password: null,
      mobile_number: null,
      status: false,
      errors: {
        username: "",
        email: "",
        password: "",
        mobile_number: ""
      }
    };
    this.doRegister = this.doRegister.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    console.log("dsadsa");

    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(name, value);
    switch (name) {
      // case "username":
      // errors.username =
      //   value.length < 5 ? "Nama Lengkap must be 5 characters long!" : "";
      // break;
      case "email":
        errors.email = validEmailRegex.test(value) ? "" : "Email is not valid!";
        break;
      case "mobile_number":
        errors.mobile_number = validPhoneRegex.test(value)
          ? ""
          : "Phone is not valid!";
        break;
      case "password":
        errors.password =
          value.length < 8 ? "Password must be 8 characters long!" : "";
        break;
      default:
        break;
    }
    this.setState({ errors, [name]: value }, () => {
      console.log(errors);
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

  doRegister = async e => {
    e.preventDefault();
    const self = this;
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
                  self.props.history.replace("/profile");
                  swal(
                    "Terima Kasih, Sudah Mendaftar!",
                    "Sampah Online siap membantumu!",
                    "success"
                  );
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
          "Terima Kasih, Sudah Login!",
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
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="10">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div
                      className="grey-text"
                      style={{ width: "100%", margin: "0" }}
                    >
                      <MDBInput
                        style={{ marginBottom: "15px" }}
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
                        style={{ marginBottom: "15px" }}
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
                        style={{ marginBottom: "15px" }}
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
                      <MDBInput
                        style={{ marginBottom: "15px" }}
                        label="Masukkan Passwordmu"
                        group
                        type="password"
                        validate
                        onChange={this.handleChange}
                        noValidate
                        name="password"
                      />
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
)(withRouter(SignUp));
