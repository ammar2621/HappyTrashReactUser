import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer, MDBMedia } from "mdbreact";
import swal from "sweetalert";
import TabOrder from "./TabOrder";
import "./order.css";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import axios from "axios";
import { Redirect } from "react-router-dom";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
    this.state = {
      orders: []
    };
  }

  sweetAlertFunction() {
    console.log("button clicks");
    swal(
      "Terima Kasih, Ammar!",
      "Harap tunggu tim kami akan menghubungi kamu!",
      "success"
    );
  }

  render() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (
        <div className="page">
          <Header />
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div
                  style={{
                    height: "100vh",
                    backgroundColor: "#FFFFFF",
                    textAlign: "center",
                    padding: "0"
                  }}
                >
                  <br />
                  <div
                    className="row justify-content-center"
                    style={{
                      padding: "0",
                      margin: "0"
                    }}
                  >
                    <div
                      className="col-11 text-left"
                      style={{
                        borderBottom: "1px solid grey",
                        padding: "0"
                      }}
                    >
                      <div
                        className="row justify-content-center"
                        style={{
                          padding: "0",
                          margin: "0"
                        }}
                      >
                        <div
                          className="col-12"
                          style={{
                            padding: "0",
                            margin: "0"
                          }}
                        >
                          <h5
                            className="font"
                            style={{
                              marginTop: "5px",
                              marginBottom: "10px",
                              fontWeight: "700"
                            }}
                          >
                            Pesanan
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center m-0">
                    <div className=" col-11 text-center p-0">
                      <TabOrder />
                    </div>
                  </div>
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default OrderHistory;
