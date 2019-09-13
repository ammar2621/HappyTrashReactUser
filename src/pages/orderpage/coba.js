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

const styles = {
  tabs: {
    background: "#fff"
  },
  slide: {
    padding: 15,
    minHeight: 100
  }
};

class DemoTabs extends React.Component {
  state = {
    index: 0
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
          <div style={Object.assign({}, styles.slide, styles.slide1)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3 ml-3" href="/orderdetails">
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
          <div style={Object.assign({}, styles.slide, styles.slide2)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3 ml-3" href="#">
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
              <MDBMedia left className="mr-3 ml-3" href="#">
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

export default DemoTabs;
