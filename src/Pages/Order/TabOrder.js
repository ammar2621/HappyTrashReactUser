import React from "react";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import { MDBMedia } from "mdbreact";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionOrderPage";
import { Link } from "react-router-dom";

class TabOrder extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      index: 0,
      adress: null,
      time: null,
      photo: "https://image.flaticon.com/icons/svg/401/401176.svg",
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

  // Function to cancel order
  cancelOrder = async (e, id) => {
    e.preventDefault();
    await this.props.cancelOrder(id);
    this.componentDidMount();
  };

  // To call function at store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.setUserOrder();
    }
  };

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
            <br />
            <p className="text-center" style={{ fontSize: "20px" }}>
              {this.props.notFoundWaiting}
            </p>
            {this.props.waiting.map((elm, key) => {
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
              }
              return (
                <div>
                  <MDBMedia className="mt-3" style={{ width: "100%" }}>
                    <MDBMedia left className="mr-3">
                      <img
                        className="p-2"
                        alt=""
                        style={{
                          height: "100px",
                          width: "100px"
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
            <Link to="./order">
              <img
                style={{
                  marginLeft: "300px",
                  width: "50px",
                  marginBottom: "300px"
                  // position: "fixed",
                  // bottom: "0"
                }}
                src="https://i.ibb.co/YyQRkmm/add-button-inside-black-circle.png"
                alt="add-button-inside-black-circle"
                border="0"
              ></img>
            </Link>
          </div>

          {/* Switch Tabs */}

          <div style={Object.assign({}, styles.slide)}>
            <p className="text-center" style={{ fontSize: "20px" }}>
              {this.props.notFoundOrder}
            </p>
            {this.props.orders.map((elm, key) => {
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
              }
              return (
                <MDBMedia
                  className="mt-3 h-100 w-100"
                  style={{ width: "100%" }}
                >
                  <MDBMedia left className="mr-3">
                    <img
                      className="p-2"
                      alt=""
                      style={{
                        height: "100px",
                        width: "100px"
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
  "base_url, orders, waiting, notFoundOrder, notFoundWaiting,  ",
  actions
)(TabOrder);
