import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import TabOrder from "./TabOrder";
import "./order.css";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { Redirect } from "react-router-dom";

class OrderHistory extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      orders: []
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
                  <div className="row p-0 m-0 justify-content-center">
                    <div className="col-11 p-0 text-left border-bottom">
                      <div className="row p-0 m-0 justify-content-center">
                        <div className="col-12 p-0 m-0">
                          <h5
                            className="font mt-2 p-0 mb-2"
                            style={{
                              fontWeight: "700"
                            }}
                          >
                            Pesanan
                          </h5>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="row justify-content-center m-0">
                    <div className=" col-11 text-center p-0">
                      <TabOrder />
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

export default OrderHistory;
