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
import TableProfile from "./tableprofile";
import EditProfile from "../../component/editprofile.js/editprofile";
import Header from "../../component/header";

const Profile = () => {
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
                        Profile
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
                      className="col-11 text-center"
                      style={{
                        padding: "0",
                        margin: "0",
                        border: "0.5px solid green",
                        borderLeft: "0.5px solid green",
                        borderRight: "0.5px solid green"
                      }}
                    >
                      <img
                        className="pt-3"
                        style={{ width: "25%" }}
                        src="https://image.flaticon.com/icons/svg/1738/1738760.svg"
                      ></img>
                      <br />
                      <br />
                      <TableProfile className="font" />
                      <div className="row justify-content-center pb-4">
                        <div
                          className="col-6 text-center"
                          style={{ padding: "0" }}
                        >
                          <EditProfile />
                        </div>
                        <div className="col-6" style={{ padding: "0" }}>
                          <MDBBtn
                            id="buttonHover"
                            className="font"
                            style={{ width: "125px", borderRadius: "15px" }}
                            color="dark-green"
                          >
                            Keluar
                          </MDBBtn>
                        </div>
                      </div>
                    </div>
                  </div>
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
};

export default Profile;
