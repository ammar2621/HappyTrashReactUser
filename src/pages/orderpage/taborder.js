import React, { Component } from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBMedia
} from "mdbreact";

class Pills extends Component {
  state = {
    items: {
      default: "1"
    }
  };

  togglePills = (type, tab) => e => {
    e.preventDefault();
    if (this.state.items[type] !== tab) {
      let items = { ...this.state.items };
      items[type] = tab;
      this.setState({
        items
      });
    }
  };

  render() {
    return (
      <MDBContainer className="mt-4">
        <MDBRow>
          <MDBCol md="12">
            <MDBNav>
              <MDBNav className="mt-2 nav-pills">
                <MDBNavItem>
                  <MDBNavLink
                    to="/orderdetails"
                    active={this.state.items["default"] === "1"}
                    onClick={this.togglePills("default", "1")}
                  >
                    Dalam Pesanan
                  </MDBNavLink>
                </MDBNavItem>
                <MDBNavItem>
                  <MDBNavLink
                    to="#"
                    active={this.state.items["default"] === "2"}
                    onClick={this.togglePills("default", "2")}
                  >
                    Riwayat Pesanan
                  </MDBNavLink>
                </MDBNavItem>
              </MDBNav>
              <MDBTabContent activeItem={this.state.items["default"]}>
                <MDBTabPane tabId="1">
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
                </MDBTabPane>
                <MDBTabPane tabId="2">
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
                      <p style={{ margin: "0", color: "red" }}>
                        Status: Canceled
                      </p>
                      <p style={{ margin: "0" }}>26 September 2019</p>
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
                      <p style={{ margin: "0", color: "green" }}>
                        Status: Completed
                      </p>
                      <p style={{ margin: "0" }}>29 September 2019</p>
                    </MDBMedia>
                  </MDBMedia>
                </MDBTabPane>
              </MDBTabContent>
            </MDBNav>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    );
  }
}

export default Pills;
