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
import Header from "../../component/header";
import Footer from "../../component/footer";
import axios from 'axios';
import { connect } from "unistore/react";
import { actions } from "../../store";

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: { Order: { time: null, id: null }, User: null, Details: null }
    }
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

  componentDidMount() {
    const self = this;
    let config = {
      method: "GET",
      url: self.props.base_url + "/orders/user",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }

    axios(config)
      .then(function (response) {
        console.log(response.data)
        let id = self.props.match.params.id;
        let order = response.data.filter((elm) => {
          return elm.Order.id == id
        })
        self.setState({ order: order[0] })
      })
      .catch(function (error) {
        console.log(error)
      })
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
                  backgroundColor: "white",
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
                          {this.state.order.Order.time}
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
                          {this.state.order.Order.id}
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
                    <TablePage summary={this.state.order.Order} />
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
                    <TableTrash details={this.state.order.Details} />
                  </div>
                </div>
                <br />
                <div
                  className="row justify-content-center pb-5"
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
        <Footer />
      </div>
    );
  }
}

export default connect("base_url", actions)(OrderDetails);
