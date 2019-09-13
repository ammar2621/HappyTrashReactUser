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

class TabReward extends React.Component {
  state = {
    index: 0
  };

  constructor(props) {
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  sweetAlertFunction() {
    console.log("button clicks");
    swal({
      title: "Apa kamu yakin?",
      text: "Untuk membeli hadiah ini dengan pointmu?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(willDelete => {
      if (willDelete) {
        swal(
          "Poof! Hadiah berhasil dibeli dan akan dikirimkan saat order kamu selanjutnya.",
          {
            icon: "success"
          }
        );
      } else {
        swal("Ayo cari hadiah lainnya!");
      }
    });
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
          <Tab label="Hadiah" />
          <Tab label="Riwayat Hadiah" />
        </Tabs>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
          {/* Tab 1 */}
          <div style={Object.assign({}, styles.slide)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3 ml-3" href="/orderdetails">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/481/481368.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Voucher Indomaret Rp 10.000</p>
                <p style={{ margin: "0" }}>Point: 10</p>
                <MDBBadge
                  onClick={this.sweetAlertFunction}
                  style={{ width: "70px", height: "20px" }}
                  color="primary"
                >
                  Beli
                </MDBBadge>
              </MDBMedia>
            </MDBMedia>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3 ml-3" href="/orderdetails">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/481/481368.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Voucher Indomaret Rp 20.000</p>
                <p style={{ margin: "0" }}>Point: 20</p>
                <MDBBadge
                  onClick={this.sweetAlertFunction}
                  style={{ width: "70px", height: "20px" }}
                  color="primary"
                >
                  Beli
                </MDBBadge>
              </MDBMedia>
            </MDBMedia>
          </div>

          {/* Tab 2 */}
          <div style={Object.assign({}, styles.slide)}>
            <MDBMedia className="mt-3" style={{ width: "100%" }}>
              <MDBMedia left className="mr-3 ml-3" href="#">
                <img
                  style={{
                    width: "75px"
                  }}
                  src="https://image.flaticon.com/icons/svg/1996/1996901.svg"
                />
              </MDBMedia>
              <MDBMedia body className="text-left font">
                <p style={{ margin: "0" }}>Sedotan Stainless</p>
                <p style={{ margin: "0", color: "red" }}>Status: Berhasil</p>
                <p style={{ margin: "0" }}>26 September 2019</p>
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
export default TabRewad;
