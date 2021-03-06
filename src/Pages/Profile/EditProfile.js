import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput,
  MDBModalHeader
} from "mdbreact";
import axios from "axios";
import swal from "sweetalert";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import { withRouter } from "react-router-dom";
import zxcvbn from "zxcvbn";
import "../Welcome/register.css";
import Swal from "sweetalert2";
import "./profile.css";

// Variabel regex valid Email
const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

// Variabel regex valid pgone
const validPhoneRegex = RegExp(/^0[0-9]{9,}$/);

// Variable validate form
const validateForm = errors => {
  let valid = true;
  Object.values(errors).forEach(
    // if we have an error string set valid to false
    val => val.length > 0 && (valid = false)
  );
  return valid;
};

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: null,
      email: null,
      password: null,
      mobile_number: null,
      status: false,
      type: "password",
      score: "null",
      errors: {
        name: "",
        email: "",
        password: "",
        mobile_number: ""
      }
    };
    this.doEdit = this.doEdit.bind(this);
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

    const { name, value } = event.target;
    let errors = this.state.errors;
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
    this.setState({ errors, [name]: value }, () => {});
  };

  handleSubmit = event => {
    event.preventDefault();
    if (validateForm(this.state.errors)) {
    } else {
    }
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  setName = e => {
    e.preventDefault();
    this.setState({ name: e.target.value });
  };

  setEmail = e => {
    e.preventDefault();
    this.setState({ email: e.target.value });
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
        self.setState({
          name: response.data.name,
          email: response.data.email,
          mobile_number: response.data.mobile_number
        });
      })
      .then(function(error) {});
  };

  doEdit = async e => {
    e.preventDefault();
    const self = this;
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      },
      data: {
        name: self.state.name,
        email: self.state.email,
        password: self.state.password,
        mobile_number: self.state.mobile_number,
        status: false
      },
      method: "PUT",
      url: self.props.base_url + "/users"
    };
    const regex_name = /^(?![\s.]+$)[a-zA-Z\s.']*$/;
    const regex_password = /^[a-zA-Z1-9]{8,15}$/;
    // check the data validation
    if (
      this.state.name == null ||
      this.state.email == null ||
      this.state.mobile_number == null ||
      this.state.password == null ||
      this.state.name == ""
    ) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Lengkapi data terlebih dahulu!"
      });
      return false;
    } else if (!regex_name.test(this.state.name)) {
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
    await axios(config)
      .then(function(response) {
        self.props.history.replace("/home");
        swal("Profile anda sudah diperbarui!", "success");
      })
      .catch(function(error) {
        swal("Oooppss!", "Ada yang error!", "error");
      });
  };

  render() {
    const { errors } = this.state;
    return (
      <MDBContainer style={{ padding: "0" }}>
        <MDBBtn
          id="buttonHover"
          className="font"
          style={{ width: "125px", borderRadius: "20px" }}
          color="dark-green"
          onClick={this.toggle(14)}
        >
          Edit
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalHeader toggle={this.toggle(14)}>Edit</MDBModalHeader>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="10">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div className="grey-text">
                      <MDBInput
                        style={{ marginBottom: "5px" }}
                        label="Masukkan Namamu"
                        value={this.state.name}
                        group
                        type="text"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                        noValidate
                        name="name"
                      />
                      <span className="error">{errors.name}</span>

                      <MDBInput
                        style={{ marginBottom: "5px", marginTop: "13px" }}
                        label="Masukkan Emailmu"
                        value={this.state.email}
                        group
                        type="email"
                        validate
                        error="wrong"
                        success="right"
                        onChange={this.handleChange}
                        noValidate
                        name="email"
                      />
                      <span className="error">{errors.email}</span>
                      <MDBInput
                        style={{ marginBottom: "4px", marginTop: "10px" }}
                        label="Masukkan Nomor Handphonemu"
                        value={this.state.mobile_number}
                        group
                        type="text"
                        validate
                        onChange={this.handleChange}
                        noValidate
                        name="mobile_number"
                      />
                      <span className="error">{errors.mobile_number}</span>

                      <label className="password" style={{ width: "100%" }}>
                        <MDBInput
                          className="password__input"
                          onChange={this.handleChange}
                          style={{ marginBottom: "10px", marginTop: "0px" }}
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
                color="dark-green"
                className="font buttonHover"
                style={{
                  borderRadius: "20px",
                  backgroundColor: "green",
                  color: "white"
                }}
                onClick={e => {
                  this.doEdit(e);
                }}
                isOpen={this.state.modal14}
                color="dark-green"
              >
                Edit
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
)(withRouter(EditProfile));
