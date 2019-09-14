import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer,
  MDBMedia
} from "mdbreact";
import swal from "sweetalert";
import TabOrder from "./taborder";
import "./order.css";
import DemoTabs from "./coba";
import Header from "../../component/header";
import Footer from "../../component/footer";

class Order extends React.Component {
  constructor(props) {
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
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
    return (
      <div>
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
                <div className="row justify-content-center">
                  <div className=" col-11 text-center">
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
  }
}

export default Order;
