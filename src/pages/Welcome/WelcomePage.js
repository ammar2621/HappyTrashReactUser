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
import Signin from "../../component/SignIn/SignIn";
import SignUp from "../../component/Register/Register";
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
                  <h1
                    className="font"
                    style={{
                      color: "#377C4E",
                      fontWeight: "900",
                      padding: "0"
                    }}
                  >
                    Happy Trash
                  </h1>
                  <div className="welcome" style={{ paddingTop: "100px" }}>
                    <img
                      src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                      style={{
                        width: "200px",
                        borderRadius: "30%"
                      }}
                    ></img>
                  </div>
                  <br />
                  <br />
                  <h5
                    className="font"
                    style={{ fontWeight: "bold", fontSize: "21px" }}
                  >
                    Selamat Datang di Happy Trash
                  </h5>
                  <MDBRow
                    className="justify-content-center"
                    style={{ margin: "0", padding: "0" }}
                  >
                    <div className="col-10">
                      <p
                        className="font"
                        style={{
                          textAlign: "justify",
                          margin: "0",
                          fontSize: "13px"
                        }}
                      >
                        Mau mendapatkan keuntungan dari sampahmu? Ayo Masuk!
                      </p>
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
                      <div className="row justify-content-left">
                        <div className="col-1 p-0">
                          <div class="form-check pl-4 m-0 text-center">
                            <input
                              class="form-check-input position-static"
                              type="checkbox"
                              id="blankCheckbox"
                              value="option1"
                              aria-label="..."
                            />
                          </div>
                        </div>
                        <div className="col-10 p-0">
                          <p
                            className="font"
                            style={{
                              textAlign: "justify",
                              margin: "0",
                              fontSize: "10px"
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
                            dan Privacy Policy Kami.
                          </p>
                        </div>
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
                                information regarding the type and
                                specifications of the goods to be delivered.
                              </li>
                              <li>
                                Happy Trash does not provide specific box for
                                shipping. Customers are responsible for properly
                                packing the goods to be delivered. For fragile
                                items made of glass, ceramic and includes cakes,
                                ice cream, food and fresh flowers, it is
                                suggested that the item is specially packaged.
                                Happy Trash is not responsible for damage or
                                deformation that occurs upon delivery of such
                                goods.
                              </li>
                            </ol>
                          </MDBModalBody>
                          <MDBModalFooter>
                            <MDBBtn
                              color="dark-green"
                              onClick={this.toggle(14)}
                            >
                              Oke
                            </MDBBtn>
                          </MDBModalFooter>
                        </MDBModal>
                      </div>
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
