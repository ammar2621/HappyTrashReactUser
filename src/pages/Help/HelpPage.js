import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Footer from "../../component/Footer";
import { Link, Redirect } from "react-router-dom";
import Header from "../../component/Header";
import { borderRadius } from "@material-ui/system";
import axios from "axios";
import "./help.css";

class Help extends React.Component {
  doOnboarding = async () => {
    const self = this;
    localStorage.setItem("onboarding_status", false);
  };
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
                  className="helpBody pageBody"
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
                      className="col-11 text-left"
                      style={{
                        padding: "5px 0 8px 0"
                      }}
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
                          className="col-11 colBorderTop text-center"
                          style={
                            {
                              // padding: "0",
                              // margin: "0",
                              // border: "0.5px solid green",
                              // borderLeft: "0.5px solid green",
                              // borderRight: "0.5px solid green",
                              // borderTopLeftRadius: "20px",
                              // borderTopRightRadius: "20px"
                            }
                          }
                        >
                          <h2
                            className="font helpTextBantuan pt-2 pb-2"
                            style={
                              {
                                // marginTop: "5px",
                                // marginBottom: "10px",
                                // fontWeight: "700",
                                // margin: "0"
                              }
                            }
                          >
                            Bantuan
                          </h2>
                        </div>
                      </div>
                      <div
                        className="row justify-content-center p-0 m-0 link"
                        style={
                          {
                            // padding: "0",
                            // margin: "0"
                          }
                        }
                      >
                        <div
                          className="col-11 helpColoBorderBot text-left px-0 py-0 "
                          style={
                            {
                              // border: "0.5px solid green",
                              // borderBottomLeftRadius: "20px",
                              // borderBottomRightRadius: "20px"
                            }
                          }
                        >
                          <Link to="./trashcategory">
                            <h4 className="mx-3 mt-4 pb-3 mb-4 font border-bottom">
                              Kategori Sampah
                            </h4>
                          </Link>
                          <Link to="./onboarding" onClick={this.doOnboarding}>
                            <h4 className="mx-3 mt-1 pb-3 mb-4 border-bottom font">
                              Cara Order
                            </h4>
                          </Link>

                          <h4 className="mx-3 mt-1 pb-3 mb-5 border-bottom font">
                            FAQ
                          </h4>
                        </div>
                      </div>
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
export default Help;
