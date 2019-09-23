import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Footer from "../../Component/Footer";
import { Link, Redirect } from "react-router-dom";
import Header from "../../Component/Header";
import "./help.css";

class Help extends React.Component {
  // Function to show unboarding again
  doOnboarding = async () => {
    localStorage.setItem("onboarding_status", false);
  };
  render() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (
        <div className="page">
          <Header />
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div className="helpBody pageBody">
                  <br />
                  <br />
                  <div className="row justify-content-center p-0 m-0">
                    <div
                      className="col-11 text-left"
                      style={{
                        padding: "5px 0 8px 0"
                      }}
                    >
                      <div className="row justify-content-center p-0 m-0">
                        <div className="col-11 colBorderTop text-center">
                          <h2 className="font helpTextBantuan pt-2 pb-2">
                            Bantuan
                          </h2>
                        </div>
                      </div>
                      <div className="row justify-content-center p-0 m-0 link">
                        <div className="col-11 helpColoBorderBot text-left px-0 py-0 ">
                          <Link to="./trashcategory">
                            <h4 className="mx-3 mt-4 pb-3 mb-4 font border-bottom">
                              Kategori Sampah
                            </h4>
                          </Link>
                          <Link to="./onboarding" onClick={this.doOnboarding}>
                            <h4 className="mx-3 mt-1 pb-3 mb-4 border-bottom font">
                              Cara Order
                            </h4>
                          </Link>

                          <h4 className="mx-3 mt-1 pb-3 mb-5 border-bottom font">
                            FAQ
                          </h4>
                        </div>
                      </div>
                    </div>
                  </div>
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
export default Help;
