import React from "react";
import Axios from "axios";
import { connect } from "unistore/react";
import { actions } from "../../Store/Store";
import Joyride from "react-joyride";
import { async } from "q";
import Home from "../Home/Home";
import OrderPage from "../Order/OrderPage";
import styled, { keyframes } from "styled-components";

import { BeaconRenderProps } from "react-joyride";

const pulse = keyframes`
  0% {
    transform: scale(1);
  }

  55% {
    background-color: rgba(255, 255, 255, 0.9);
    transform: scale(1.6);
  }
`;

const Beacon = styled.span`
  animation: ${pulse} 3s ease-in-out infinite;
  background-color: rgba(255, 27, 14, 0.6);
  border-radius: 0%;
  display: inline-block;
  height: 10rem;
  width: 20rem;
`;

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
          // floaterProps: {
          //   disableAnimation: true
          // },
          // spotlightPadding: 20,
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
          // styles: {
          //   options: {
          //     width: 300
          //   }
          // },
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
      isLogin: localStorage.getItem("isLogin")
    };
  }
  componentWillMount = async () => {
    // this.setState({ display: true });
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      this.setState({ run: true });
    }
  };

  componentDidMount = async () => {
    let config = {
      url: this.props.baseUrl + "users/after_first_login",
      method: "get",
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      }
    };

    let response = await Axios(config).then(() => {
      localStorage.setItem("status_first_login", false);
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
  "baseUrl, allBookedDates",
  actions
)(Basic);
