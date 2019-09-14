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

const Header = () => {
  return (
    <div>
      <MDBContainer
        style={{ maxWidth: "100%", padding: "0" }}
        className="container-fluid justify-content-center"
      >
        <MDBRow className="justify-content-center" style={{ padding: "0" }}>
          <MDBCol style={{ maxWidth: "100%", padding: "0" }}>
            <div
              style={{
                padding: "0",
                backgroundColor: "#377C4E",
                marginBottom: "0"
              }}
            >
              <h1
                className="font text-center pt-3 pb-4 "
                style={{
                  color: "white",
                  fontWeight: "900"
                }}
              >
                Happy
                <img
                  className="mx-2"
                  style={{ width: "40px" }}
                  src="https://i.ibb.co/9vKwZGT/new-white.png"
                  alt="new-white"
                  border="0"
                />
                Trash
              </h1>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Header;
