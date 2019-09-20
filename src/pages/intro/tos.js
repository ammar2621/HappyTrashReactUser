import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBModalFooter,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBContainer,
  MDBInput
} from "mdbreact";
import Signin from "../../component/SignIn/SignIn";
import SignUp from "../../component/Register/Register";
// import "./welcome.css";
import { Redirect, Link } from "react-router-dom";

class Tos extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  render() {
    if (localStorage.getItem("isLogin") !== "true") {
      return (
        <div className="page">
          <MDBContainer>
            <MDBModalHeader>Terms Of Services</MDBModalHeader>
            <MDBModalBody>
              <ol className="text-justify">
                <li>
                  Customers are required to provide complete information
                  regarding the type and specifications of the goods to be
                  delivered.
                </li>
                <li>
                  Happy Trash does not provide specific box for shipping.
                  Customers are responsible for properly packing the goods to be
                  delivered. For fragile items made of glass, ceramic and
                  includes cakes, ice cream, food and fresh flowers, it is
                  suggested that the item is specially packaged. Happy Trash is
                  not responsible for damage or deformation that occurs upon
                  delivery of such goods.
                </li>
              </ol>
            </MDBModalBody>
            <MDBModalFooter>
              <Link to="./">
                <MDBBtn color="dark-green">Oke</MDBBtn>
              </Link>
            </MDBModalFooter>
          </MDBContainer>
        </div>
      );
    } else {
      return <Redirect to="/home" />;
    }
  }
}

export default Tos;
