import React, { Component } from "react";
import {
  MDBContainer,
  MDBBtn,
  MDBModal,
  MDBModalBody,
  MDBModalFooter,
  MDBRow,
  MDBCol,
  MDBInput
} from "mdbreact";
import axios from "axios";
import swal from "sweetalert";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

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

class EditProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      username: "",
      email: "",
      password: "",
      status: false,
      errors: {
        username: "",
        email: "",
        password: "",
        mobile_number: ""
      }
    };
    this.doEdit = this.doEdit.bind(this);
  }

  handleChange = event => {
    event.preventDefault();
    console.log("dsadsa");

    const { name, value } = event.target;
    let errors = this.state.errors;
    console.log(name, value);
    switch (name) {
      case "username":
        errors.username =
          value.length < 5 ? "Nama Lengkap must be 5 characters long!" : "";
        break;
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

  setStatus = e => {
    e.preventDefault();
    this.setState({ status: e.target.value });
  };

  doEdit = async e => {
    e.preventDefault();
    const self = this;
    var config = {
      headers: {
        Authorization: "Bearer " + this.props.token
      },
      data: {
        name: self.state.username,
        email: self.state.email,
        password: self.state.password,
        mobile_number: self.state.mobile_number,
        status: false
      },
      method: "PUT",
      url: self.props.base_url + "/users"
    };
    console.log("token", self.props.token);
    axios(config)
      .then(function(response) {
        self.props.history.replace("/home");
        swal("Profile anda sudah diperbarui!", "success");
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
          className="font"
          style={{ width: "125px", borderRadius: "15px" }}
          color="dark-green"
          onClick={this.toggle(14)}
        >
          Edit
        </MDBBtn>
        <MDBModal isOpen={this.state.modal14} toggle={this.toggle(14)} centered>
          <MDBModalBody>
            <MDBContainer>
              <MDBRow className="justify-content-center">
                <MDBCol md="10">
                  <form onSubmit={this.handleSubmit} noValidate>
                    <div className="grey-text">
                      <MDBInput
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
                      <span className="error">{errors.username}</span>
                      <MDBInput
                        label="Masukkan Nomor Handphonemu"
                        group
                        type="text"
                        validate
                        onChange={this.handleChange}
                        noValidate
                        name="mobile_number"
                      />
                      <span className="error">{errors.mobile_number}</span>
                      <MDBInput
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
                      <span className="error">{errors.email}</span>

                      <MDBInput
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
