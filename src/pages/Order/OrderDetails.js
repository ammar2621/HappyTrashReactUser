import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import TablePage from "./TableOrder";
import TableTrash from "./TableTrash";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionOrderPage";
import { Redirect } from "react-router-dom";
import "./order.css";

class OrderDetails extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      order: { Order: { time: "", id: null }, User: null, Details: null }
    };
  }

  // to call funciton at store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.getSingleOrder(this.props.match.params.id);
    }
  };

  // componentDidMount() {
  //   const self = this;
  //   let config = {
  //     method: "GET",
  //     url: self.props.base_url + "/orders/user",
  //     headers: {
  //       Authorization: "Bearer " + localStorage.getItem("token")
  //     }
  //   };

  //   axios(config)
  //     .then(function(response) {
  //       let id = self.props.match.params.id;
  //       let order = response.data.filter(elm => {
  //         return elm.Order.id == id;
  //       });
  //       self.setState({ order: order[0] });
  //     })
  //     .catch(function(error) {
  //     });
  // }

  render() {
    const formatter = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR"
      // minimumFractionDigits: 2
    });
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (
        <div className="page">
          <Header />
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div
                  className="pageBody"
                  style={
                    {
                      // height: "100vh",
                      // backgroundColor: "white",
                      // textAlign: "center",
                      // padding: "0"
                    }
                  }
                >
                  <br />
                  <div
                    className="row justify-content-center p-0 m-0"
                    style={
                      {
                        // padding: "0",
                        // margin: "0"
                      }
                    }
                  >
                    <div
                      className="col-11 text-left p-0 bottomBorder"
                      style={
                        {
                          // padding: "0"
                        }
                      }
                    >
                      <div
                        className="row justify-content-center p-0 m-0"
                        style={
                          {
                            // padding: "0",
                            // margin: "0"
                          }
                        }
                      >
                        <div
                          className="col-6 p-0 m-0"
                          style={
                            {
                              // padding: "0",
                              // margin: "0",
                            }
                          }
                        >
                          <h6
                            className="font orderDetailsText"
                            style={
                              {
                                // borderBottom: "1px solid grey",
                                // marginTop: "5px",
                                // marginBottom: "10px",
                                // fontWeight: "600",
                                // margin: "0"
                              }
                            }
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
                            className="font "
                            style={{
                              marginTop: "5px",
                              marginBottom: "6px",
                              fontWeight: "200",
                              fontSize: "13px"
                            }}
                          >
                            {this.props.singleOrder.Order.time.slice(0, 22)}
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
                            {this.props.singleOrder.Order.id}
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
                      <TablePage summary={this.props.singleOrder.Order} />
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
                      <TableTrash details={this.props.singleOrder.Details} />
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
                            {"Kamu mendapat " +
                              formatter.format(
                                this.props.singleOrder.Order.total_price
                              ) +
                              " !"}
                          </h4>
                          <h4 style={{ fontWeight: "200" }}>
                            Dan mendapat{" "}
                            {this.props.singleOrder.Order.total_point} Points
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
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default connect(
  "singleOrder",
  actions
)(OrderDetails);
