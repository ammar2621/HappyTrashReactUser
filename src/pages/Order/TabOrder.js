import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { MDBMedia, MDBBtn } from "mdbreact";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import { withRouter, Link, Redirect } from "react-router-dom";

class TabOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      adress: null,
      time: null,
      photo: "https://image.flaticon.com/icons/svg/401/401176.svg",
      status: null,
      orders: [],
      waiting: [],
      notFoundOrder: "---Tidak ada pesanan---",
      notFoundWaiting: "-----Tidak ada pesanan-----"
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
        status: "cancelled"
      }
    };
    axios(config)
      .then(function(response) {
        console.log(response);
        self.setState({ orders: [], waiting: [] });
        self.componentDidMount();
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  componentDidMount() {
    const self = this;
    let config = {
      method: "GET",
      url: self.props.base_url + "/orders/user",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    axios(config)
      .then(function(response) {
        self.setState({ waiting: [] });
        self.setState({ orders: [] });
        response.data.forEach(element => {
          if (
            element.Order.status === "waiting" ||
            element.Order.status === "confirmed"
          ) {
            self.state.waiting.push(element);
          } else {
            self.state.orders.push(element);
          }
          if (self.state.orders.length === 0) {
            self.setState({
              notFoundOrder: "Anda tidak memiliki pesanan yang belum selesai"
            });
          } else {
            self.setState({
              notFoundOrder: " "
            });
          }

          if (self.state.waiting.length === 0) {
            self.setState({ notFoundWaiting: "-----Tidak ada pesanan------" });
          } else {
            self.setState({ notFoundWaiting: " " });
          }
          console.log(element.Order.status);
        });
        self.handleChangeIndex(0);
      })
      .catch(function(error) {
        console.log(error);
      });
  }

  render() {
    const { index } = this.state;

    return (
      <div>
        <Tabs
          style={{ maxWidth: "480px" }}
          className="slideColor"
          value={index}
          // fullWidth
          onChange={this.handleChange}
          style={styles.tabs}
        >
          <Tab className="slideColor" label="Dalam Pesanan" />
          <Tab className="slideColor" label="Riwayat Pesanan" />
        </Tabs>
        <SwipeableViews
          style={{ maxWidth: "480px" }}
          className="slideColor"
          index={index}
          onChangeIndex={this.handleChangeIndex}
        >
          <div style={Object.assign({}, styles.slide)}>
            <p className="text-center" style={{ fontSize: "20px" }}>
              {this.state.notFoundWaiting}
            </p>
            {this.state.waiting.map((elm, key) => {
              let color = null;
              let status = null;
              let cancel = null;
              if (elm.Order.status === "waiting") {
                color = "green";
                status = "Menunggu Konfirmasi";
                cancel = (
                  <div>
                    <button
                      className="btn btn-success mx-0  mt-1"
                      onClick={e => this.cancelOrder(e, elm.Order.id)}
                      style={{ padding: 5 }}
                    >
                      Batalkan
                    </button>
                  </div>
                );
              } else if (elm.Order.status === "confirmed") {
                color = "blue";
                status = "Diterima";
              } else {
                console.log("error");
              }
              return (
                <div>
                  <MDBMedia className="mt-3" style={{ width: "100%" }}>
                    <MDBMedia left className="mr-3">
                      <img
                        className="p-2"
                        style={{
                          height: "100px"
                        }}
                        src={elm.Order.photo}
                      />
                    </MDBMedia>
                    <MDBMedia body className="text-left font">
                      <p style={{ margin: "0" }}>ID Pesanan: {elm.Order.id}</p>
                      <p style={{ margin: "0", color }}>Status: {status}</p>
                      <p style={{ margin: "0" }}>
                        {elm.Order.time.slice(0, 22)}
                      </p>
                      {cancel}
                    </MDBMedia>
                  </MDBMedia>
                </div>
              );
            })}
            {/* <img
              style={{
                marginLeft: "250px",
                width: "50px",
                marginBottom: "300px"
                // position: "fixed",
                // bottom: "0"
              }}
              src="https://i.ibb.co/YyQRkmm/add-button-inside-black-circle.png"
              alt="add-button-inside-black-circle"
              border="0"
            ></img> */}
          </div>

          {/* Switch Tabs */}

          <div style={Object.assign({}, styles.slide)}>
            <p className="text-center" style={{ fontSize: "20px" }}>
              {this.state.notFoundOrder}
            </p>
            {this.state.orders.map((elm, key) => {
              let color = null;
              let status = null;
              let detail = null;
              if (elm.Order.status === "done") {
                color = "green";
                status = "Selesai";
                detail = (
                  <div>
                    <Link to={"/orderdetails/" + elm.Order.id}>
                      <button
                        className="btn btn-success mx-0 mt-1 px-3"
                        style={{ padding: 5 }}
                      >
                        Detail
                      </button>
                    </Link>
                  </div>
                );
              } else if (elm.Order.status === "rejected") {
                color = "red";
                status = "Ditolak";
              } else if (elm.Order.status === "cancelled") {
                color = "red";
                status = "Dibatalkan";
              } else {
                console.log("error");
              }
              return (
                <MDBMedia
                  className="mt-3 h-100 w-100"
                  style={{ width: "100%" }}
                >
                  <MDBMedia left className="mr-3">
                    <img
                      className="p-2"
                      style={{
                        height: "100px"
                      }}
                      src={elm.Order.photo}
                    />
                  </MDBMedia>
                  <MDBMedia body className="text-left font">
                    <p style={{ margin: "0" }}>ID Pesanan: {elm.Order.id}</p>
                    <p style={{ margin: "0", color }}>Status: {status}</p>
                    <p style={{ margin: "0" }}>{elm.Order.time.slice(0, 22)}</p>
                    {detail}
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
  "base_url",
  actions
)(TabOrder);
