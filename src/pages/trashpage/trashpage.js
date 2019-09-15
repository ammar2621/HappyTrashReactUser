import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer
} from "mdbreact";
import Footer from "../../component/footer";
import { Link } from "react-router-dom";
import EditProfile from "../../component/editprofile.js/editprofile";
import Header from "../../component/header";
import { connect } from "unistore/react";
import { actions } from "../../store";

const TrashPage = () => {
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
                        Kategori Sampah
                      </h3>
                    </div>
                  </div>
                  <div
                    className="row justify-content-center list"
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
                      <h4
                        className="mx-3 mt-4 pb-2 font border-bottom"
                        style={{ color: "black", textDecoration: "None" }}
                      >
                        Sampah Plastik
                      </h4>
                      <h4 className="mx-3 mt-1 pb-2 border-bottom font">
                        Sampah Kertas
                      </h4>
                      <h4 className="mx-3 mt-1 pb-2 border-bottom font">
                        Sampah Kaca
                      </h4>
                      <h4 className="mx-3 mt-1 pb-2 mb-3 border-bottom font">
                        Sampah Logam
                      </h4>
                      <Link to="./help">
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
};

export default TrashPage;
