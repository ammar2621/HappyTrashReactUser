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
        style={{ maxWidth: "100%", padding: "0", backgroundColor: "#377C4E" }}
        className="container-fluid justify-content-center"
      >
        <MDBRow className="justify-content-center p-0">
          <MDBCol
            className="justify-content-center text-center"
            style={{
              padding: "0",
              margin: "0",
              maxWidth: "480px"
            }}
          >
            <div className="header">
              <h1
                className="font text-center pt-3 pb-4 "
                style={{
                  maxWidth: "480px",
                  padding: "0",
                  margin: "0",
                  color: "white",
                  fontWeight: "900"
                }}
              >
                Happy
                <img
                  className="mx-2 p-0"
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
