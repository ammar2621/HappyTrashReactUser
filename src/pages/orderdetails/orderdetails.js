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
import TablePage from "../../component/table/tableorder";
import TableTrash from "../../component/table/trashdetails";

class OrderDetails extends React.Component {
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
                <div
                  style={{
                    padding: "0",
                    backgroundColor: "#377C4E",
                    marginBottom: "20px"
                  }}
                >
                  <h1
                    className="font"
                    style={{
                      color: "white",
                      fontWeight: "900",
                      padding: "10px 0 15px 0",
                      backgroundColor: "#377C4E"
                    }}
                  >
                    Happy Trash
                  </h1>
                </div>
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
                        className="col-6"
                        style={{
                          padding: "0",
                          margin: "0"
                        }}
                      >
                        <h6
                          className="font"
                          style={{
                            marginTop: "5px",
                            marginBottom: "10px",
                            fontWeight: "600",
                            margin: "0"
                          }}
                        >
                          Tukar Sampahmu
                        </h6>
                        <h6
                          className="font"
                          style={{
                            marginTop: "5px",
                            marginBottom: "10px",
                            fontWeight: "600"
                          }}
                        >
                          Status: Berhasil
                        </h6>
                      </div>
                      <div
                        className="col-6 text-right"
                        style={{
                          padding: "0",
                          margin: "0"
                        }}
                      >
                        <h6
                          className="font"
                          style={{
                            marginTop: "5px",
                            marginBottom: "6px",
                            fontWeight: "200",
                            fontSize: "13px"
                          }}
                        >
                          26 September 2019
                        </h6>
                        <h6
                          className="font"
                          style={{
                            marginTop: "5px",
                            marginBottom: "10px",
                            fontWeight: "200",
                            fontSize: "13px"
                          }}
                        >
                          TS-2715100132
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div
                  className="row justify-content-center"
                  style={{
                    padding: "0",
                    margin: "0"
                  }}
                >
                  <div className="col-11 font">
                    <div className="text-left" style={{ fontWeight: "800" }}>
                      Detail Service
                    </div>
                    <TablePage />
                  </div>
                </div>
                <br />
                <div
                  className="row justify-content-center"
                  style={{
                    padding: "0",
                    margin: "0"
                  }}
                >
                  <div className="col-11 font">
                    <div className="text-left" style={{ fontWeight: "800" }}>
                      Detail Sampah
                    </div>
                    <TableTrash />
                  </div>
                </div>
                <br />
                <div
                  className="row justify-content-center"
                  style={{
                    padding: "0",
                    margin: "0"
                  }}
                >
                  <div
                    className="col-11"
                    style={{
                      //   border: "0.5px solid grey",
                      backgroundColor: "yellow"
                    }}
                  >
                    <div className="text-center">
                      <div className="mt-2 font">
                        <h4 className="font" style={{ fontWeight: "900" }}>
                          Kamu mendapat Rp 11.000!
                        </h4>
                        <h4 style={{ fontWeight: "200" }}>
                          Dan mendapat 11 Points
                        </h4>
                        <h4 style={{ fontWeight: "200" }}>Dari Order ini.</h4>
                      </div>
                    </div>
                  </div>
                </div>

                <br />
                <br />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    );
  }
}

export default OrderDetails;
