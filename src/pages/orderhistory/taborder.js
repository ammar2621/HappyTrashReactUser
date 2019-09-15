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
      status: null,
      orders: [],
      waiting: []
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

  cancelOrder = (e, id) => {
    e.preventDefault();
    const self = this;
    let config = {
      method: "PUT",
      url: self.props.base_url + "/orders/" + id,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        status: 'cancelled'
      }
    }
    axios(config)
      .then(function (response) {
        console.log(response);
        self.componentDidMount();
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  componentDidMount() {
    const self = this;
    let config = {
      method: "GET",
      url: self.props.base_url + "/orders/user",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    }

    axios(config)
      .then(function (response) {
        console.log(response);
        response.data.forEach(element => {
          if (element.Order.status === 'waiting' || element.Order.status === 'confirmed') {
            self.state.waiting.push(element)
          } else {
            self.state.orders.push(element)
          }
        });
      })
      .catch(function (error) {
        console.log(error)
      })
  }

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
            {this.state.waiting.map((elm, key) => {
              let color = null;
              let status = null;
              let cancel = null;
              if (elm.Order.status === 'waiting') {
                color = "yellow";
                status = "Menunggu Konfirmasi";
                cancel = (<div>
                  <button className="btn btn-success" onClick={e => this.cancelOrder(e, elm.Order.id)}>
                    Batalkan
                  </button>
                </div>)

              } else if (elm.Order.status === 'confirmed') {
                color = "blue";
                status = "Diterima";
              } else {
                console.log("error")
              }
              return (
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
                    <p style={{ margin: "0" }}>ID Pesanan: {elm.Order.id}</p>
                    <p style={{ margin: "0", color }}>Status: {status}</p>
                    <p style={{ margin: "0" }}>{elm.Order.time}</p>
                    {cancel}
                  </MDBMedia>
                </MDBMedia>
              )
            })}
          </div>

          {/* Switch Tabs */}

          <div style={Object.assign({}, styles.slide)}>
            {this.state.orders.map((elm, key) => {
              let color = null;
              let status = null;
              let detail = null;
              if (elm.Order.status === 'done') {
                color = "green";
                status = "Selesai";
                detail = (<div><Link to={"/orderdetails/" + elm.Order.id}>
                  <button className="btn btn-success">
                    Detail
                  </button></Link>
                </div>)

              } else if (elm.Order.status === 'rejected') {
                color = "red";
                status = "Ditolak";
              } else if (elm.Order.status === 'cancelled') {
                color = "red";
                status = "Dibatalkan";
              } else {
                console.log("error")
              }
              return (
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
                    <p style={{ margin: "0" }}>ID Pesanan: {elm.Order.id}</p>
                    <p style={{ margin: "0", color }}>Status: {status}</p>
                    <p style={{ margin: "0" }}>{elm.Order.time}</p>
                    {detail}
                  </MDBMedia>
                </MDBMedia>
              )
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
export default connect("base_url", actions)(TabOrder);
