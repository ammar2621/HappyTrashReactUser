import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge
} from "mdbreact";

const EcommercePage = () => {
  return (
    <MDBRow className="justify-content-center">
      <MDBCol style={{ maxWidth: "480px" }}>
        <div
          style={{
            height: "100vh",
            backgroundColor: "#377C4E",
            textAlign: "center"
          }}
        >
          <br />
          <h1 style={{ color: "#F0F0F0" }}>Sampah Online</h1>
        </div>
      </MDBCol>
    </MDBRow>
  );
};

export default EcommercePage;
