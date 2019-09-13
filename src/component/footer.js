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
import { Link } from "react-router-dom";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <MDBContainer
        style={{ maxWidth: "100%", padding: "0" }}
        className="container-fluid justify-content-center"
      >
        <MDBRow style={{ padding: "0" }}>
          <MDBCol style={{ maxWidth: "480px", backgroundColor: "#F0F0F0" }}>
            <div className="footer">
              <div
                className="container-fluid"
                style={{ maxWidth: "100%", padding: "0" }}
              >
                <div className="row justify-content-center">
                  <div
                    className="col pt-2"
                    style={{
                      maxWidth: "480px",
                      backgroundColor: "#F0F0F0",
                      borderTopLeftRadius: "10px",
                      borderTopRightRadius: "10px"
                    }}
                  >
                    <div className="row justify-content-center text-center py-0">
                      <div
                        className="col-2 "
                        style={{
                          padding: "0",
                          margin: "0"
                        }}
                      >
                        <Link to="/home">
                          <img
                            style={{ width: "25px" }}
                            src="https://image.flaticon.com/icons/svg/263/263115.svg"
                          ></img>
                          <br />
                          <p className="my-0">Home</p>
                        </Link>
                      </div>
                      <div className="col-2" style={{ padding: "0" }}>
                        <Link to="/order">
                          <img
                            style={{ width: "25px" }}
                            src="https://image.flaticon.com/icons/svg/151/151917.svg"
                          ></img>
                          <br />
                          <p className="my-0">Pesanan</p>
                        </Link>
                      </div>
                      <div className="col-2" style={{ padding: "0" }}>
                        <img
                          style={{ width: "25px" }}
                          src="https://image.flaticon.com/icons/svg/906/906794.svg"
                        ></img>
                        <br />
                        <p className="my-0">Help</p>
                      </div>
                      <div className="col-2" style={{ padding: "0" }}>
                        <Link to="/profile">
                          <img
                            style={{ width: "25px" }}
                            src="https://image.flaticon.com/icons/svg/1738/1738760.svg"
                          ></img>
                          <br />
                          <p className="my-0">Me</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Footer;
