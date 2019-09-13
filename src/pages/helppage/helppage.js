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

const Help = () => {
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
                    className="row justify-content-center"
                    style={{
                      padding: "0",
                      margin: "0"
                    }}
                  >
                    <div
                      className="col-11 text-left px-0 py-0 "
                      style={{
                        border: "0.5px solid green"
                      }}
                    >
                      <h4 className="mx-2 mt-4 pb-2 font border-bottom">
                        List Sampah
                      </h4>
                      <h4 className="mx-2 mt-1 pb-2 border-bottom font">
                        Cara Order
                      </h4>
                      <h5 className="mx-2 mt-1 pb-2 mb-5 border-bottom font">
                        Pertanyaan yang sering ditanyakan
                      </h5>
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

export default Help;
