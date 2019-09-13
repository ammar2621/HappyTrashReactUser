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
                className="font text-center "
                style={{
                  color: "white",
                  fontWeight: "900",
                  padding: "0",
                  margin: 0,
                  backgroundColor: "#377C4E"
                }}
              >
                Happy Trash
              </h1>
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Header;
