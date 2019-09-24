import React, { Component } from "react";
import { MDBMedia, MDBBadge } from "mdbreact";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionTabReward";
import { withRouter } from "react-router-dom";
import "../Order/order.css";

class TabReward extends Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      name: "",
      point: null,
      photo: "",
      stock: null,
      data: [],
      history: [],
      notFoundReward: "",
      notFoundHistoryReward: ""
    };
  }

  // Function to claim a reward
  claimReward = (e, id) => {
    e.preventDefault();
    this.props.claimReward(id);
  };

  // to call a function from store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.setAllRewards();
      await this.props.setRewardHistory();
    }
  };

  handleChange = (event, value) => {
    this.setState({
      index: value
    });
  };

  handleChangeIndex = index => {
    this.setState({
      index
    });
  };

  state = {
    activeItem: "1"
  };

  toggle = tab => e => {
    if (this.state.activeItem !== tab) {
      this.setState({
        activeItem: tab
      });
    }
  };

  render() {
    const { index } = this.state;

    return (
      <div className="text-center">
        <Tabs
          value={index}
          fullWidth
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab label="Hadiah" />
          <Tab label="Riwayat Hadiah" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {/* Tab 1 */}
          <div style={Object.assign({}, styles.slide)}>
            <p className="text-center" style={{ fontSize: "20px" }}>
              {this.props.notFoundReward}
            </p>
            {this.props.reward.map((elm, key) => {
              if (elm.stock > 0)
                return (
                  <MDBMedia className="mt-3" style={{ width: "100%" }}>
                    <MDBMedia
                      left
                      className="mr-3 ml-3 text-center"
                      style={{
                        height: 75,
                        width: 75
                      }}
                    >
                      <img
                        className="p-2"
                        style={{
                          height: 75,
                          width: 75
                        }}
                        src={elm.photo}
                        alt={elm.photo}
                      />
                    </MDBMedia>
                    <MDBMedia body className="text-left font">
                      <p style={{ margin: "0" }}>{elm.name}</p>
                      <p style={{ margin: "0" }}>
                        Point yang dibutuhkan : {elm.point_to_claim}
                      </p>
                      <p className="m-0 p-0">Stok Hadiah: {elm.stock}</p>
                      <MDBBadge
                        id="buttonHover"
                        onClick={e => this.claimReward(e, elm.id)}
                        style={{ width: "70px", height: "20px" }}
                        color="green"
                      >
                        Tukar
                      </MDBBadge>
                    </MDBMedia>
                  </MDBMedia>
                );
            })}
          </div>

          {/* Tab 2 */}
          <div style={Object.assign({}, styles.slide)}>
            <p className="text-center font" style={{ fontSize: "20px" }}>
              {this.props.notFoundHistoryReward}
            </p>
            {this.props.rewardHistory.map((elm, key) => {
              return (
                <MDBMedia className="mt-3" style={{ width: "100%" }}>
                  <MDBMedia left className="mr-3 ml-3">
                    <img
                      className="p-2"
                      style={{
                        height: 75,
                        width: 75
                      }}
                      src="https://i.ibb.co/X2sFzjV/reward.png"
                      alt="reward"
                      border="0"
                    />
                  </MDBMedia>
                  <MDBMedia body className="text-left font">
                    <p style={{ margin: "0" }}>{elm.reward_name}</p>
                    <p style={{ margin: "0", color: "blue" }}>
                      ID hadiah : {elm.id}
                    </p>
                    <p style={{ margin: "0" }}>{elm.created_at.slice(0, 22)}</p>
                  </MDBMedia>
                </MDBMedia>
              );
            })}
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

const styles = {
  tabs: {
    background: "#fff"
  },
  slide: {
    padding: 15,
    minHeight: 100
  }
};

export default connect(
  "token, reward, rewardHistory, notFoundReward, notFoundHistoryReward",
  actions
)(withRouter(TabReward));
