import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import SwipeableViews from "react-swipeable-views";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBMedia
} from "mdbreact";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";

class TabOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      adress: null,
      time: null,
      photo: null,
      status: null
    };
  }
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

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs
          value={index}
          fullWidth
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab label="Dalam Pesanan" />
          <Tab label="Riwayat Pesanan" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          <div style={Object.assign({}, styles.slide)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3" href="/orderdetails">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/401/401176.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Tukar Sampahmu</p>
                <p style={{ margin: "0" }}>Status: Ongoing</p>
                <p style={{ margin: "0" }}>26 September 2019</p>
              </MDBMedia>
            </MDBMedia>
          </div>
          <div style={Object.assign({}, styles.slide)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3" href="#">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/401/401176.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Tukar Sampahmu</p>
                <p style={{ margin: "0", color: "red" }}>Status: Canceled</p>
                <p style={{ margin: "0" }}>21 September 2019</p>
              </MDBMedia>
            </MDBMedia>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3" href="#">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/401/401176.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Tukar Sampahmu</p>
                <p style={{ margin: "0", color: "green" }}>Status: Completed</p>
                <p style={{ margin: "0" }}>22 September 2019</p>
              </MDBMedia>
            </MDBMedia>
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
export default TabOrder;
