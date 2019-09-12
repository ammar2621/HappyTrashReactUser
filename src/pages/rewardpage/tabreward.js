import React, { Component } from "react";
import {
  MDBContainer,
  MDBTabPane,
  MDBTabContent,
  MDBNav,
  MDBNavItem,
  MDBNavLink,
  MDBMedia,
  MDBBadge
} from "mdbreact";
import swal from "sweetalert";

class TabReward extends Component {
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
    return (
      <MDBContainer>
        <MDBNav className="nav-tabs mt-5">
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "1"}
              onClick={this.toggle("1")}
              role="tab"
            >
              Hadiah
            </MDBNavLink>
          </MDBNavItem>
          <MDBNavItem>
            <MDBNavLink
              to="#"
              active={this.state.activeItem === "2"}
              onClick={this.toggle("2")}
              role="tab"
            >
              Riwayat Hadiah
            </MDBNavLink>
          </MDBNavItem>
        </MDBNav>
        <MDBTabContent activeItem={this.state.activeItem}>
          {/* Tab 1 */}
          <MDBTabPane tabId="1" role="tabpanel">
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
          </MDBTabPane>

          {/* Tab 2 */}
          <MDBTabPane tabId="2" role="tabpanel">
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
          </MDBTabPane>
        </MDBTabContent>
      </MDBContainer>
    );
  }
}
export default TabReward;
