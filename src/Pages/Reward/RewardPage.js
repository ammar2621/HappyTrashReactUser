import React from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import TabReward from "./TabReward";
import Header from "../../Component/Header";
import Footer from "../../Component/Footer";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionTabReward";
import { withRouter, Redirect } from "react-router-dom";
import "./reward.css";

class RewardPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      name: "",
      point: null,
      photo: "",
      stock: null,
      data: []
    };
  }

  // to call function from store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.setPointReward();
    }
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
                <div className="pageBody">
                  <br />
                  <div className="row p-0 m-0 justify-content-center">
                    <div className="col-11 text-left rewardBorderTop">
                      <div className="row p-0 m-0 justify-content-center">
                        <div className="col-11 p-0 m-0 text-center">
                          <h3 className="font textH3">Jumlah Poinmu</h3>
                        </div>
                      </div>
                    </div>
                    <div className="col-11 text-left rewardBorderBot">
                      <h6 className="text-center">
                        Total kamu sudah mengumpulkan Poin sebanyak
                      </h6>
                      <h3
                        className="text-center font"
                        style={{ fontWeight: "600" }}
                      >
                        {this.props.point}
                      </h3>
                    </div>
                  </div>
                  <br />
                  <div className="row justify-content-center m-0">
                    <div className=" col-11 text-center">
                      <TabReward />
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
  "is_login, base_url, token, point",
  actions
)(withRouter(RewardPage));
