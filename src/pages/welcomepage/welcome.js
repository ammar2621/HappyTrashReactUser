import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer
} from "mdbreact";
import Signin from "../../component/signin/signin";
import SignUp from "../../component/register/register";
import "./welcome.css";

const EcommercePage = () => {
  return (
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
            <h1
              className="font"
              style={{ color: "#377C4E", fontWeight: "900", padding: "0" }}
            >
              Sampah Online
            </h1>
            <div className="welcome" style={{ paddingTop: "100px" }}>
              <img
                src="https://images.unsplash.com/photo-1503596476-1c12a8ba09a9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                style={{
                  width: "200px",
                  borderRadius: "30%"
                }}
              ></img>
            </div>
            <br />
            <br />
            <h5 className="font" style={{ fontWeight: "bold" }}>
              Selamat Datang di Sampah Online
            </h5>
            <MDBRow
              className="justify-content-center"
              style={{ margin: "0", padding: "0" }}
            >
              <div className="col-10">
                <p
                  className="font"
                  style={{
                    textAlign: "justify",
                    margin: "0",
                    fontSize: "13px"
                  }}
                >
                  Mau mendapatkan keuntungan dari sampahmu? Ayo Masuk!
                </p>
                <br />
                <div className="row justify-content-center">
                  <div className="col-6" style={{ padding: "0" }}>
                    <Signin />
                  </div>
                  <div className="col-6" style={{ padding: "0" }}>
                    <SignUp />
                  </div>
                </div>
                <br />

                <p
                  className="font"
                  style={{
                    textAlign: "justify",
                    margin: "0",
                    fontSize: "10px"
                  }}
                >
                  Dengan masuk atau mendaftar, saya setuju dengan Terms of
                  Services dan Privacy Policy Kami.
                </p>
              </div>
            </MDBRow>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};

export default EcommercePage;
