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

const Home = () => {
  return (
    <div>
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
              <div
                style={{
                  padding: "0",
                  backgroundColor: "#377C4E",
                  marginBottom: "10px"
                }}
              >
                <h1
                  className="font"
                  style={{
                    color: "white",
                    fontWeight: "900",
                    padding: "10px 0 15px 0",
                    backgroundColor: "#377C4E"
                  }}
                >
                  Happy Trash
                </h1>
              </div>
              <br />
              <br />
              <div className="row" style={{ padding: "0", margin: "0" }}>
                <div className="col-10 text-left">
                  <h2 className="font">Layanan Kami</h2>
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{
                  padding: "0",
                  margin: "0"
                }}
              >
                <div className="col-6">
                  <Link to="/service">
                    <MDBCard
                      border="success"
                      className="m-3"
                      style={{ maxWidth: "18rem" }}
                    >
                      <MDBCardHeader
                        className="font"
                        style={{ fontSize: "13px" }}
                      >
                        Tukar Sampahmu
                      </MDBCardHeader>
                      <MDBCardBody className="text-success">
                        <img
                          style={{ width: "80px" }}
                          src="https://image.flaticon.com/icons/svg/401/401176.svg"
                        ></img>
                      </MDBCardBody>
                    </MDBCard>
                  </Link>
                </div>
                <div className="col-6">
                  <MDBCard
                    border="success"
                    className="m-3"
                    style={{ maxWidth: "18rem" }}
                  >
                    <MDBCardHeader
                      className="font"
                      style={{ fontSize: "13px" }}
                    >
                      Tukar Pointmu
                    </MDBCardHeader>
                    <MDBCardBody className="text-success">
                      <img
                        style={{ width: "80px" }}
                        src="https://image.flaticon.com/icons/svg/744/744922.svg"
                      ></img>
                    </MDBCardBody>
                  </MDBCard>
                </div>
              </div>
              <br />
              <div className="row" style={{ padding: "0", margin: "0" }}>
                <div className="col-10 text-left">
                  <h2 className="font">Campaign</h2>
                </div>
              </div>
              <div
                className="row justify-content-center"
                style={{ padding: "0", margin: "0" }}
              >
                <div
                  className="col-10"
                  style={{
                    backgroundColor: "black",
                    borderTopLeftRadius: "20px",
                    borderTopRightRadius: "20px",
                    backgroundImage:
                      "url(" +
                      "https://images.unsplash.com/photo-1503334849647-1d48ae0ba696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
                      ")",

                    backgroundPosition: "center",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat"
                  }}
                >
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
                <div
                  className="col-10"
                  style={{
                    borderLeft: "0.5px solid grey",
                    borderRight: "0.5px solid grey",
                    borderBottom: "0.5px solid grey"
                  }}
                >
                  <h4 className="font">Mari lestarikan lingkungan.</h4>
                  <p
                    className="font"
                    style={{ fontWeight: "200", fontSize: "13px" }}
                  >
                    20 Kg sampah yang kamu tukar di Sampah Online, setara dengan
                    1 pohon yang kamu tanam.
                  </p>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
            </div>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <Footer />
    </div>
  );
};

export default Home;
