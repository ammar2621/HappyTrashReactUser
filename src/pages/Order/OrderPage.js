import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import swal from "sweetalert";
import Header from "../../component/Header";
import { storage } from "../../firebase/index";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionOrderPage";
import { withRouter, Link, Redirect } from "react-router-dom";
import axios from "axios";
import Footer from "../../component/Footer";
import Swal from "sweetalert2";
import GoogleMaps from "./GoogleMaps"
import './order.css'


class Order extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      photo: null,
      urlPhoto: "",
      progress: 0,
      adress: null
    };
  }

  setAdress = e => {
    e.preventDefault();
    this.setState({ adress: e.target.value });
  };

  setTime = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  // funtion to store date by user choose
  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  };

  // funtion to store photo uploaded by user
  handleChangePhoto = e => {
    e.preventDefault();
    const regexImage = /([/|.|\w|\s|-])*\.(?:jpg|gif|png)/;
    console.log(e.target.files[0]);
    if (!regexImage.test(e.target.files[0].name)) {
      Swal.fire({
        type: "error",
        title: "Oops...",
        text: "Gunakan ekstensi .jpg .png atau .gif saja! "
      });
      return false;
    } else if (e.target.files[0]) {
      console.log(e.target.files[0]);
      if (e.target.files[0].size < 5000000) {
        this.setState({ photo: e.target.files[0] });
        try {
          const uploadTask = storage
            .ref(`images/${e.target.files[0].name}`)
            .put(e.target.files[0]);
          uploadTask.on(
            "state_changed",
            snapshot => {
              //progress Function
              const progress =
                (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
              this.setState({ progress });
            },
            error => {},
            () => {
              //Complete Function
              storage
                .ref("images")
                .child(this.state.photo.name)
                .getDownloadURL()
                .then(url => {
                  this.setState({ urlPhoto: url });
                });
            }
          );
        } catch (err) {}
      } else {
        Swal.fire({
          type: "error",
          title: "Oops...",
          text: "Maksimal file 5MB!"
        });
      }
    }
  };

  doOrder = async e => {
    e.preventDefault();
    const self = this;
    const year = self.state.startDate.getFullYear();
    const month = self.state.startDate.getMonth();
    const date = self.state.startDate.getDate();
    const hour = self.state.startDate.getHours();
    const minute = self.state.startDate.getMinutes();
    const second = self.state.startDate.getSeconds();
    // var mili = self.state.startDate.getMiliseconds()
    let config = {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token")
      },
      data: {
        adress: self.state.adress,
        time:
          year +
          "-" +
          month +
          "-" +
          date +
          "T" +
          hour +
          ":" +
          minute +
          ":" +
          second +
          ".000",
        photo: this.state.urlPhoto
      },
      method: "POST",
      url: self.props.base_url + "/orders"
    };
    axios(config)
      .then(function(response) {
        self.props.history.push("/orderhistory");
        swal(
          "Terima Kasih, Sudah Order!",
          "Tim kami akan menghubungimu secepatnya!",
          "success"
        );
      })
      .catch(function(error) {
        console.log("error Order", error);
        swal("Oooppss!", "Ada yang error!", "error");
      });
  };

  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {

    }
  };

  render() {
    const isLogin = true;
    // const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (
        <div>
          <Header />
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div
                  style={{
                    height: "100vh",
                    backgroundColor: "white",
                    textAlign: "center",
                    padding: "0"
                  }}
                >
                  <div
                    style={{
                      height: "100vh",
                      backgroundColor: "white",
                      textAlign: "center",
                      padding: "0",
                      borderTopLeftRadius: "20px",
                      borderTopRightRadius: "20px"
                    }}
                  >
                    <div
                      className="row justify-content-center"
                      style={{
                        padding: "0",
                        margin: "0"
                      }}
                    ></div>
                    <br />
                    <div className="col-10 text-left">
                      <h2 className="font">Tukar Sampahmu</h2>
                    </div>
                    <div
                      className="row justify-content-center"
                      style={{ padding: "0", margin: "0" }}
                    ></div>

                    <br />
                    <div
                      className="row text-center justify-content-center"
                      style={{
                        padding: "0",
                        margin: "0"
                      }}
                    >
                      <div className="col-11">
                      <h6 className="text-left">
                          Dimana tempat penjemputan sampahmu?
                        </h6>
                   
                        <input
                          onChange={this.setAdress}
                          type="text"
                          id="defaultFormLoginEmailEx"
                          className="form-control"
                        />
                      </div>
                      <div className="col-11">
                        <div className="maps">
                          

                        <GoogleMaps/>
                        </div>
                      </div>
                      <div className="col-11">
                        {/* <div class="mapouter">
                          <div class="gmap_canvas">
                            <iframe
                              width="100%"
                              padding="10px"
                              height="300"
                              id="gmap_canvas"
                              src="https://maps.google.com/maps?q=sepulsa%20lodge%20malang&t=&z=13&ie=UTF8&iwloc=&output=embed"
                              frameborder="0"
                              scrolling="no"
                              marginheight="0"
                              marginwidth="0"
                            ></iframe>
                            Google Maps Generator by{" "}
                            <a href="https://www.embedgooglemap.net">
                              embedgooglemap.net
                            </a>
                          </div>
                        </div> */}
                        <br />
                        
                 
                        <br />
                        <div className="text-left">
                          <p style={{ fontSize: "15px", margin: "0" }}>
                            Tentukan tanggal
                          </p>
                          <DatePicker
                            showTimeSelect
                            timeFormat="HH:mm"
                            timeIntervals={15}
                            timeCaption="time"
                            dateFormat="d MMMM, yyyy HH:mm"
                            style={{ width: "200px" }}
                            selected={this.state.startDate}
                            onChange={this.handleChange}
                          />
                          <br />

                          <br />
                          <label for="inputPhotoURL">
                            Pilih Foto Lalu Klik Upload
                          </label>
                          <br />
                          <progress
                            value={this.state.progress}
                            max="100"
                            style={{ width: "100%" }}
                          />
                          <br />
                          <input
                            type="file"
                            onChange={this.handleChangePhoto}
                          />
                          <image src={this.state.photo} />
                          <br />
                          <br />
                          <br />
                          <br />
                        </div>
                        
                        <MDBBtn
                          onClick={e => {
                            this.doOrder(e);
                          }}
                          style={{
                            width: "100%",
                            borderRadius: "15px",
                            marginBottom: "100px"
                          }}
                          target="_blank"
                          color="dark-green"
                        >
                          Tukar Sampahmu
                        </MDBBtn>
                      </div>
                    </div>
                  </div>
                  <br />
                  <br />
                </div>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
          <Footer />
        </div>
      );
    } else {
      return <Redirect to="/" />;
    }
  }
}

export default connect(
  "is_login, base_url, token, provinces",
  actions
)(withRouter(Order));
