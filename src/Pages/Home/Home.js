import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBContainer
} from "mdbreact";
import Footer from "../../Component/Footer";
import { Link, Redirect } from "react-router-dom";
import Header from "../../Component/Header";
import "./home.css";

const Home = () => {
  const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  if (isLogin) {
    return (
      <div className="page">
        <Header />
        <MDBContainer>
          <MDBRow className="justify-content-center" style={{ padding: "0" }}>
            <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
              <div className="pageBody">
                <br />
                <br />
                <div className="row p-0 m-0">
                  <div className="col-10 text-left">
                    <h2 className="font mb-0">Layanan Kami</h2>
                  </div>
                </div>
                <div
                  className="row justify-content-center pb-5"
                  style={{ margin: "0" }}
                >
                  <div className="col-11 ">
                    <div className="row justify-content-center link p-0 mt-0">
                      <div className="col-5 pr-2 pl-0">
                        <Link to="/order">
                          <MDBCard
                            border="success"
                            className="mt-3 first "
                            style={{ maxWidth: "18rem", width: "150px" }}
                          >
                            <MDBCardHeader className="font">
                              <h6 className="m-0">Tukar Sampahmu</h6>
                            </MDBCardHeader>
                            <MDBCardBody className="text-success h-100 pt-2 pb-3 px-0 w-100 text-center">
                              <img
                                style={{ width: "95px" }}
                                src="https://i.ibb.co/z2MprCk/tracking-1.png"
                                alt="tracking-1"
                                border="0"
                              ></img>
                            </MDBCardBody>
                          </MDBCard>
                        </Link>
                      </div>
                      <div
                        className="col-5 pr-0"
                        // style={{ paddingLeft: "80px" }}
                      >
                        <Link to="/reward">
                          <MDBCard
                            border="success"
                            className="mt-3 second "
                            style={{ maxWidth: "18rem", width: "150px" }}
                          >
                            <MDBCardHeader className="font">
                              <h6 className="mx-2 my-0">Tukar Poinmu</h6>
                            </MDBCardHeader>
                            <MDBCardBody className="text-success h-100 w-100 text-center">
                              <img
                                style={{ width: "80px" }}
                                src="https://i.ibb.co/1vg0tQV/treasure-2.png"
                                alt="treasure-2"
                                border="0"
                              ></img>
                            </MDBCardBody>
                          </MDBCard>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
                <br />
                <div className="row p-0 m-0">
                  <div className="col-10 text-left">
                    <h2 className="font mb-3">Campaign</h2>
                  </div>
                </div>
                <div
                  className="row justify-content-center pb-5"
                  style={{ margin: "0" }}
                >
                  <div className="col-11 homeColBorderTop">
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
                  <div className="col-11 homeColBorderBot pt-2">
                    <h4 className="font">Mari lestarikan lingkungan.</h4>
                    <p className="font" style={{ fontWeight: "200" }}>
                      20 Kg sampah yang kamu tukar di Sampah Online, setara
                      dengan 1 pohon yang kamu tanam.
                    </p>
                  </div>
                </div>
                <br />
                <br />
                <br />
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
        <Footer />
        <script src="/node_modules/popper.js/dist/umd/popper.min.js"></script>
        <script src="/node_modules/shepherd.js/dist/js/shepherd.min.js"></script>
        <script></script>
      </div>
    );
  } else {
    return <Redirect to="/" />;
  }
};

export default Home;
