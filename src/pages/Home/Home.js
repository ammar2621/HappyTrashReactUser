import React from "react";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardHeader,
  MDBCardBody,
  MDBContainer
} from "mdbreact";
import Footer from "../../component/Footer";
import { Link, Redirect } from "react-router-dom";
import Header from "../../component/Header";
import Shepherd from "shepherd.js";
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
              <div
                className="pageBody"
                style={
                  {
                    // height: "100vh",
                    // backgroundColor: "white",
                    // textAlign: "center",
                    // padding: "0"
                  }
                }
              >
                <br />
                <br />
                <div
                  className="row p-0 m-0"
                  // style={{ padding: "0", margin: "0" }}
                >
                  <div className="col-10 text-left">
                    <h2 className="font">Layanan Kami</h2>
                  </div>
                </div>
                <div
                  className="row justify-content-center link p-0 m-0"
                  style={
                    {
                      // padding: "0",
                      // margin: "0"
                    }
                  }
                >
                  <div className="col-6">
                    <Link to="/order">
                      <MDBCard
                        border="success"
                        className="mt-3 first"
                        style={{ maxWidth: "18rem", width: "100%" }}
                      >
                        <MDBCardHeader
                          className="font"
                          // style={{ fontSize: "13px" }}
                        >
                          <h6 className="m-0">Tukar Sampahmu</h6>
                        </MDBCardHeader>
                        <MDBCardBody className="text-success h-100 pt-2 pb-3 px-2 w-100 text-center">
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
                  <div className="col-6">
                    <Link to="/reward">
                      <MDBCard
                        border="success"
                        className="mt-3 second"
                        style={{ maxWidth: "18rem", width: "100%" }}
                      >
                        <MDBCardHeader
                          className="font"
                          // style={{ fontSize: "13px" }}
                        >
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
                <br />
                <div className="row p-0 m-0">
                  <div className="col-10 text-left">
                    <h2 className="font">Campaign</h2>
                  </div>
                </div>
                <div
                  className="row justify-content-center pb-5"
                  style={{ margin: "0" }}
                >
                  <div
                    className="col-11 homeColBorderTop"
                    style={
                      {
                        // backgroundColor: "black",
                        // borderTopLeftRadius: "20px",
                        // borderTopRightRadius: "20px",
                        // backgroundImage:
                        //   "url(" +
                        //   "https://images.unsplash.com/photo-1503334849647-1d48ae0ba696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80" +
                        //   ")",
                        // backgroundPosition: "center",
                        // backgroundSize: "cover",
                        // backgroundRepeat: "no-repeat"
                      }
                    }
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
                    className="col-11 homeColBorderBot pt-2"
                    style={
                      {
                        // borderLeft: "0.5px solid #51C953",
                        // borderRight: "0.5px solid #51C953",
                        // borderBottom: "0.5px solid #51C953",
                        // borderBottomLeftRadius: "20px",
                        // borderBottomRightRadius: "20px"
                      }
                    }
                  >
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
