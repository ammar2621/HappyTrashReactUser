import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBModalFooter,
  MDBBtn,
  MDBModal,
  MDBModalHeader,
  MDBModalBody,
  MDBContainer
} from "mdbreact";
import Signin from "./SignIn";
import SignUp from "./Register";
import "./welcome.css";
import { Redirect } from "react-router-dom";

class Welcome extends Component {
  state = {
    modal14: false
  };

  toggle = nr => () => {
    let modalNumber = "modal" + nr;
    this.setState({
      [modalNumber]: !this.state[modalNumber]
    });
  };

  // function to set intro at local storage
  componentDidMount() {
    localStorage.setItem("intro", true);
  }

  render() {
    if (localStorage.getItem("isLogin") !== "true") {
      return (
        <div className="page">
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div
                  style={{
                    height: "100vh",
                    backgroundColor: "white",
                    textAlign: "center",
                    padding: "0"
                  }}
                >
                  <br />
                  <div
                    className="welcome"
                    style={{ paddingTop: "100px", paddingBottom: "70px" }}
                  >
                    <h2 className="font pb-0" style={{ fontWeight: "900" }}>
                      Ayo Mulai Loakin
                    </h2>
                  </div>

                  <img
                    src="https://i.ibb.co/c3XFvhT/2633457.jpg"
                    alt="2633457"
                    border="0"
                    style={{
                      width: "250px",
                      borderRadius: "50%",
                      marginBottom: "50px"
                    }}
                  ></img>
                  <MDBRow
                    className="justify-content-center"
                    style={{ margin: "0", padding: "0" }}
                  >
                    <div className="col-10">
                      <br />
                      <div className="row justify-content-center">
                        <div className="col-6" style={{ padding: "0" }}>
                          <Signin />
                        </div>
                        <div className="col-6" style={{ padding: "0" }}>
                          <SignUp />
                        </div>
                      </div>
                      <br />
                      <p
                        className="font px-3"
                        style={{
                          textAlign: "justify",
                          margin: "0",
                          fontSize: "13px"
                        }}
                      >
                        Dengan masuk atau mendaftar, saya setuju dengan
                        <a
                          className="mx-1"
                          style={{ color: "red" }}
                          onClick={this.toggle(14)}
                        >
                          Terms of Services
                        </a>
                        Kami.
                      </p>
                      <MDBModal
                        isOpen={this.state.modal14}
                        toggle={this.toggle(14)}
                        centered
                      >
                        <MDBModalHeader toggle={this.toggle(14)}>
                          Terms Of Services
                        </MDBModalHeader>
                        <MDBModalBody>
                          <ol className="text-justify">
                            <li>
                              Customers are required to provide complete
                              information regarding the type and specifications
                              of the goods to be delivered.
                            </li>
                            <li>
                              Happy Trash does not provide specific box for
                              shipping. Customers are responsible for properly
                              packing the goods to be delivered. For fragile
                              items made of glass, ceramic and includes cakes,
                              ice cream, food and fresh flowers, it is suggested
                              that the item is specially packaged. Happy Trash
                              is not responsible for damage or deformation that
                              occurs upon delivery of such goods.
                            </li>
                          </ol>
                        </MDBModalBody>
                        <MDBModalFooter>
                          <MDBBtn color="dark-green" onClick={this.toggle(14)}>
                            Oke
                          </MDBBtn>
                        </MDBModalFooter>
                      </MDBModal>
                    </div>
                  </MDBRow>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      );
    } else {
      return <Redirect to="/home" />;
    }
  }
}

export default Welcome;
