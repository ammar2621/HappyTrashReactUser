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

const Footer = () => {
  return (
    <div>
      <MDBContainer>
        <MDBRow className="justify-content-center" style={{ padding: "0" }}>
          <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
            <div
              style={{
                // height: "100vh",
                backgroundColor: "white",
                textAlign: "center",
                padding: "0"
              }}
            >
              <div className="row justify-content-center">
                <div
                  className="col"
                  style={{ maxWidth: "480px", backgroundColor: "#377C4E" }}
                >
                  <div className="row justify-content-center text-center">
                    <div className="col-3" style={{ padding: "0" }}>
                      <img
                        style={{ width: "25px" }}
                        src="https://image.flaticon.com/icons/svg/263/263115.svg"
                      ></img>
                      <br />

                      <p>Home</p>
                    </div>
                    <div className="col-3" style={{ padding: "0" }}>
                      <img
                        style={{ width: "25px" }}
                        src="https://image.flaticon.com/icons/svg/151/151917.svg"
                      ></img>
                      <br />

                      <p>Order</p>
                    </div>
                    <div className="col-3" style={{ padding: "0" }}>
                      <img
                        style={{ width: "25px" }}
                        src="https://image.flaticon.com/icons/svg/906/906794.svg"
                      ></img>
                      <br />

                      <p>Help</p>
                    </div>
                    <div className="col-3" style={{ padding: "0" }}>
                      <img
                        style={{ width: "25px" }}
                        src="https://image.flaticon.com/icons/svg/1738/1738760.svg"
                      ></img>
                      <br />
                      <p>Me</p>
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
