import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import TabReward from "./TabReward";
import Header from "../../component/Header";
import Footer from "../../component/Footer";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionTabReward";
import { withRouter, Redirect } from "react-router-dom";
import "./reward.css";

class RewardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      point: null,
      photo: "",
      stock: null,
      data: []
    };
    // this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  // to call function from store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.setPointReward();
    }
  };
  // setName = e => {
  //   e.preventDefault();
  //   this.setState({ name: e.target.value });
  // };

  // setPoint = e => {
  //   e.preventDefault();
  //   this.setState({ point: e.target.value });
  // };

  // setPhoto = e => {
  //   e.preventDefault();
  //   this.setState({ photo: e.target.value });
  // };

  // setStock = e => {
  //   e.preventDefault();
  //   this.setState({ stock: e.target.value });
  // };

  // }
  // componentDidMount() {
  //   const self = this;
  //   axios
  //     .get(self.props.base_url + "/users/" + localStorage.getItem("id"), {
  //       headers: {
  //         Authorization: "Bearer " + localStorage.getItem("token")
  //       }
  //     })
  //     .then(function(response) {
  //       localStorage.setItem("point", response.data.point);
  //       self.setState({ point: response.data.point });
  //     })
  //     .catch(function(error) {
  //       swal("Oops ada yang salah!", "Coba lagi!", "error");
  //     });
  // }

  // sweetAlertFunction() {
  //   swal(
  //     "Terima Kasih, Ammar!",
  //     "Harap tunggu tim kami akan menghubungi kamu!",
  //     "success"
  //   );
  // }

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
                    className="row p-0 m-0 justify-content-center"
                    style={
                      {
                        // padding: "0",
                        // margin: "0"
                      }
                    }
                  >
                    <div
                      className="col-11 text-left rewardBorderTop"
                      style={
                        {
                          // borderTop: "0.5px solid green",
                          // borderLeft: "0.5px solid green",
                          // borderRight: "0.5px solid green",
                          // borderTopLeftRadius: "20px",
                          // borderTopRightRadius: "20px",
                          // padding: "5px 0 8px 0"
                        }
                      }
                    >
                      <div
                        className="row p-0 m-0 justify-content-center"
                        style={
                          {
                            // padding: "0",
                            // margin: "0"
                          }
                        }
                      >
                        <div
                          className="col-11 p-0 m-0 text-center"
                          style={
                            {
                              // padding: "0",
                              // margin: "0"
                            }
                          }
                        >
                          <h3
                            className="font textH3"
                            style={
                              {
                                // marginTop: "5px",
                                // marginBottom: "10px",
                                // fontWeight: "600",
                                // margin: "0"
                              }
                            }
                          >
                            Jumlah Poinmu
                          </h3>
                        </div>
                      </div>
                    </div>
                    <div
                      className="col-11 text-left rewardBorderBot"
                      style={
                        {
                          // borderBottom: "0.5px solid green",
                          // borderLeft: "0.5px solid green",
                          // borderRight: "0.5px solid green",
                          // paddingTop: "5px",
                          // borderBottomLeftRadius: "20px",
                          // borderBottomRightRadius: "20px"
                        }
                      }
                    >
                      <h6 className="text-center">
                        Total kamu sudah mengumpulkan Poin sebanyak
                      </h6>
                      <h3
                        className="text-center font"
                        style={{ fontWeight: "600" }}
                      >
                        {this.props.point}
                      </h3>
                    </div>
                  </div>
                  <br />
                  <div className="row justify-content-center m-0">
                    <div className=" col-11 text-center">
                      <TabReward />
                    </div>
                  </div>
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
  "is_login, base_url, token, point",
  actions
)(withRouter(RewardPage));
