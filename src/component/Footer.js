import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
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
                        className="col-2 mx-2"
                        style={{
                          padding: "0",
                          margin: "0"
                        }}
                      >
                        <Link to="/home">
                          <img
                            style={{ width: "25px" }}
                            src="https://i.ibb.co/nsNx54W/home.png"
                            alt="home"
                            border="0"
                          ></img>
                          <br />
                          <p className="my-0 font">Home</p>
                        </Link>
                      </div>
                      <div className="col-2 mx-2" style={{ padding: "0" }}>
                        <Link to="/orderhistory">
                          <img
                            style={{ width: "25px" }}
                            src="https://i.ibb.co/st4hBVd/list.png"
                            alt="list"
                            border="0"
                          />
                          <br />
                          <p className="my-0 font">Pesanan</p>
                        </Link>
                      </div>
                      <div className="col-2 mx-2" style={{ padding: "0" }}>
                        <Link to="/help">
                          <img
                            style={{ width: "25px" }}
                            src="https://i.ibb.co/CBhWx2w/information.png"
                            alt="list"
                            border="0"
                          />
                          <br />
                          <p className="my-0 font">Bantuan</p>
                        </Link>
                      </div>
                      <div className="col-2 mx-2" style={{ padding: "0" }}>
                        <Link to="/profile">
                          <img
                            style={{ width: "25px" }}
                            src="https://i.ibb.co/DW2f78j/account.png"
                            alt="account"
                            border="0"
                          />
                          <br />
                          <p className="my-0 font">Me</p>
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
