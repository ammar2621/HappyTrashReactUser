import React, { Component } from "react";
import { MDBMedia, MDBBadge } from "mdbreact";
import swal from "sweetalert";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import SwipeableViews from "react-swipeable-views";
import axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter } from "react-router-dom";

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
      history: []
    };
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  // setName = e => {
  // e.preventDefault();
  // this.setState({ name: e.target.value });
  // };
  //
  // setPoint = e => {
  // e.preventDefault();
  // this.setState({ point: e.target.value });
  // };
  //
  // setPhoto = e => {
  // e.preventDefault();
  // this.setState({ photo: e.target.value });
  // };
  //
  // setStock = e => {
  // e.preventDefault();
  // this.setState({ stock: e.target.value });
  // };
  //

  claimReward = (e, id) => {
    e.preventDefault();
    const self = this;
    const config = {
      method: "PUT",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        stock: 1
      },
      url: self.props.base_url + "/rewards/" + id
    };

    axios(config)
      .then(async function(response) {
        console.log(response.data);
        localStorage.setItem("point", response.data.user_point);
        await swal(
          "Terbeli ! Hadiahmu akan dikirim pada transaksi berikutnya",
          {
            icon: "success"
          }
        );
        window.location.reload();
      })
      .catch(function(error) {
        console.log(error);
      });

    // self.componentDidMount();
  };

  componentDidMount() {
    const self = this;
    var config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    console.log("token", localStorage.getItem("token"));
    axios
      .get(self.props.base_url + "/rewards", config)
      .then(response => {
        let data = response.data.filter(elm => {
          return elm.status === true;
        });
        self.setState({ data });
        console.log("data", response.data);
      })
      .catch(error => {
        console.log("error rewards", error);
      });
    axios
      .get(self.props.base_url + "/reward_history/user", config)
      .then(response => {
        self.setState({ history: response.data });
        console.log("history", response.data);
      })
      .catch(error => {
        console.log("error rewards history", error);
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

  sweetAlertFunction() {
    console.log("button clicks");
    swal({
      title: "Apa kamu yakin?",
      text: "Untuk membeli hadiah ini dengan pointmu?",
      icon: "warning",
      buttons: true,
      dangerMode: true
    }).then(claimReward => {
      if (claimReward) {
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
            {this.state.data.map((elm, key) => {
              return (
                <MDBMedia className="mt-3" style={{ width: "100%" }}>
                  <MDBMedia left className="mr-3 ml-3">
                    <img
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
                    <MDBBadge
                      onClick={e => this.claimReward(e, elm.id)}
                      style={{ width: "70px", height: "20px" }}
                      color="primary"
                    >
                      Beli
                    </MDBBadge>
                  </MDBMedia>
                </MDBMedia>
              );
            })}
          </div>

          {/* Tab 2 */}
          <div style={Object.assign({}, styles.slide)}>
            {this.state.history.map((elm, key) => {
              return (
                <MDBMedia className="mt-3" style={{ width: "100%" }}>
                  <MDBMedia left className="mr-3 ml-3" href="#">
                    <img
                      style={{
                        height: 75,
                        width: 75
                      }}
                      src="https://image.flaticon.com/icons/svg/1996/1996901.svg"
                    />
                  </MDBMedia>
                  <MDBMedia body className="text-left font">
                    <p style={{ margin: "0" }}>{elm.reward_name}</p>
                    <p style={{ margin: "0", color: "blue" }}>
                      ID hadiah : {elm.id}
                    </p>
                    <p style={{ margin: "0" }}>{elm.created_at}</p>
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
  "base_url, token",
  actions
)(withRouter(TabReward));
