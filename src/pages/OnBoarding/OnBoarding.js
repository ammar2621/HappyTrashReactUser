import React from "react";
import Axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import Joyride from "react-joyride";
import { async } from "q";
import Home from "../Home/Home";
import OrderPage from "../Order/OrderPage";
import styled, { keyframes } from "styled-components";
import axios from "axios";

import { BeaconRenderProps } from "react-joyride";

class Basic extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      run: false,
      steps: [
        {
          content: (
            <h3 className="text-center font  p-4">
              Ini merupakan petunjuk menggunakan aplikasi ini.
            </h3>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          placement: "center",
          target: "body"
        },
        {
          content: (
            <p className="font">Pilih ini untuk kamu menukarkan sampahmu</p>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          placement: "top",
          target: ".first",
          title: "Fitur Tukar Sampahmu"
        },
        {
          content: (
            <p className="font">
              Pilih ini untuk kamu menukarkan poinmu dengan hadiah
            </p>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          placement: "top",
          target: ".second",
          title: "Fitur Tukan Poinmu"
        },
        {
          content: (
            <p className="font">
              Pilih ini jika kamu ingin kembali ke halaman awal
            </p>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          placement: "bottom",
          target: ".home",
          title: "Home"
        },
        {
          content: (
            <p className="font">
              Pilih ini jika kamu ingin melihat tentang pesanan
            </p>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          placement: "bottom",
          target: ".pesanan",
          title: "Pesanan"
        },
        {
          placement: "top",
          content: (
            <p className="font">Click here to see all of your events!</p>
          ),
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          target: ".bantuan",
          title: "Events"
        },
        {
          placement: "top",
          locale: {
            skip: (
              <strong
                className="font"
                aria-label="skip"
                style={{ color: "#377c4e" }}
              >
                Tidak Perlu
              </strong>
            )
          },
          content: <p className="font">accept and reject invitations</p>,
          target: ".profile",
          title: "Invitations"
        }
      ],
      onboarding_status: localStorage.getItem("onboarding_status")
    };
  }
  componentWillMount = async () => {
    // onboarding_status: localStorage.getItem("onboarding_status");
    if (
      localStorage.getItem("onboarding_status") === 0 ||
      localStorage.getItem("onboarding_status") === false ||
      localStorage.getItem("onboarding_status") === "false"
    ) {
      this.setState({ run: true });
      console.log("selesai");
      const self = this;
    }
  };

  componentDidMount = async () => {
    const self = this;
    const config = {
      method: "GET",
      url: self.props.base_url + "/users/" + localStorage.getItem("id"),
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    const configPUT = {
      method: "PUT",
      url: self.props.base_url + "/user_attributes",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };
    await axios(config)
      .then(function(response) {
        localStorage.setItem(
          "onboarding_status",
          response.data.onboarding_status
        );
        console.log(response.data);
        console.log(response.data);
        // localStorage.setItem("status_first_login", false);
      })
      .catch(function(error) {
        console.log(error);
      });
    await axios(configPUT)
      .then(function(response) {
        console.log(response.data);
      })
      .catch(function(error) {
        console.log(error);
      });
  };

  render() {
    const { run, steps } = this.state;
    return (
      <div className="HomePage font mbForFooter">
        <Joyride
          className="font"
          // beaconComponent={Beacon}
          continuous={true}
          run={run}
          scrollToFirstStep={true}
          showProgress={true}
          showSkipButton={true}
          steps={steps}
          styles={{
            options: {
              arrowColor: "yellow",
              backgroundColor: "white",
              overlayColor: "rgba(0, 0, 0, 0.8)",
              primaryColor: "#377c4e ",
              textColor: "black",
              width: 500,
              zIndex: 1000,
              beaconSize: 76
            }
          }}
        />
        <Home />
      </div>
    );
  }
}

export default connect(
  "base_url",
  actions
)(Basic);
