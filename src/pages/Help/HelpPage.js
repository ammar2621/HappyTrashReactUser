import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Footer from "../../component/Footer";
import { Link, Redirect } from "react-router-dom";
import Header from "../../component/Header";
import { borderRadius } from "@material-ui/system";

const Help = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (isLogin) {
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
                      padding: "5px 0 8px 0"
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
                        className="col-11 text-center"
                        style={{
                          padding: "0",
                          margin: "0",
                          border: "0.5px solid green",
                          borderLeft: "0.5px solid green",
                          borderRight: "0.5px solid green",
                          borderTopLeftRadius: "15px",
                          borderTopRightRadius: "15px"
                        }}
                      >
                        <h3
                          className="font pt-2 pb-2"
                          style={{
                            marginTop: "5px",
                            marginBottom: "10px",
                            fontWeight: "700",
                            margin: "0"
                          }}
                        >
                          Bantuan
                        </h3>
                      </div>
                    </div>
                    <div
                      className="row justify-content-center link"
                      style={{
                        padding: "0",
                        margin: "0"
                      }}
                    >
                      <div
                        className="col-11 text-left px-0 py-0 "
                        style={{
                          border: "0.5px solid green",
                          borderBottomLeftRadius: "15px",
                          borderBottomRightRadius: "15px"
                        }}
                      >
                        <Link to="./trashcategory">
                          <h4 className="mx-3 mt-4 pb-2 font border-bottom">
                            Kategori Sampah
                          </h4>
                        </Link>
                        <h4 className="mx-3 mt-1 pb-2 border-bottom font">
                          Cara Order
                        </h4>
                        <h4 className="mx-3 mt-1 pb-2 mb-3 border-bottom font">
                          FAQ
                        </h4>
                        <Link to="./home">
                          <div
                            className="mb-4 mx-3 text-center"
                            style={{
                              height: "40px",
                              width: "70px",
                              backgroundColor: "green",
                              borderRadius: "5px"
                            }}
                          >
                            <img
                              className="mt-2"
                              style={{ width: "25px" }}
                              src="https://i.ibb.co/f8v4bQx/left-arrow-1.png"
                              alt="left-arrow-1"
                              border="0"
                            />
                          </div>
                        </Link>
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
};

export default Help;
