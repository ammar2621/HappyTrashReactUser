import React from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import Footer from "../../Component/Footer";
import { Redirect } from "react-router-dom";
import TableProfile from "./TableProfile";
import EditProfile from "./EditProfile";
import Header from "../../Component/Header";
import swal from "sweetalert";
import "./profile.css";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import { withRouter } from "react-router-dom";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      total_trash: null
    };
  }

  render() {
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
                  <div className="row p-0 m-0 justify-content-center">
                    <div
                      className="col-11 text-left"
                      style={{
                        padding: "5px 0 8px 0"
                      }}
                    >
                      <div className="row p-0 m-0 justify-content-center">
                        <div className="col-11 p-0 m-0 text-center profileBorderTop">
                          <h2
                            className="font pt-2 pb-2"
                            style={{
                              marginTop: "5px",
                              marginBottom: "10px",
                              fontWeight: "700",
                              margin: "0"
                            }}
                          >
                            Profile
                          </h2>
                        </div>
                      </div>
                      <div className="row justify-content-center p-0 m-0">
                        <div className="col-11 p-0 m-0 text-center profileBorderBot">
                          <img
                            className="pt-3"
                            style={{ width: "25%" }}
                            src="https://i.ibb.co/ynBHG1g/account-1.png"
                            alt="account-1"
                            border="0"
                          ></img>
                          <br />
                          <br />
                          <TableProfile className="font" />
                          <div className="row justify-content-center pb-4">
                            <div
                              className="col-6 text-center"
                              style={{ padding: "0" }}
                            >
                              <EditProfile />
                            </div>
                            <div className="col-6" style={{ padding: "0" }}>
                              <MDBBtn
                                id="buttonHover"
                                className="font"
                                style={{
                                  width: "125px",
                                  borderRadius: "20px",
                                  backgroundColor: "#377c4e"
                                }}
                                color="dark-green"
                                onClick={async () => {
                                  localStorage.removeItem("token");
                                  localStorage.removeItem("isLogin");
                                  localStorage.removeItem("id");
                                  localStorage.removeItem("name");
                                  localStorage.removeItem("email");
                                  localStorage.removeItem("mobile_number");
                                  localStorage.removeItem("point");
                                  localStorage.removeItem("status_first_login");

                                  await swal(
                                    "Anda berhasil keluar",
                                    "Terima kasih",
                                    "success"
                                  );
                                  window.location.reload();
                                }}
                              >
                                Keluar
                              </MDBBtn>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <br />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}
export default connect(
  "is_login, base_url, token",
  actions
)(withRouter(Profile));
