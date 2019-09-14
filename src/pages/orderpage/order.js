import React, { Component } from "react";
import { MDBRow, MDBCol, MDBBtn, MDBContainer } from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Time from "../../component/time/time";
import Upload from "./foto";
import swal from "sweetalert";
import Header from "../../component/header";
import { storage } from "../../firebase/index";
import { connect } from "unistore/react";
import { actions } from "../../store";
import { withRouter, Link, Redirect } from "react-router-dom";
import axios from "axios";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startDate: new Date(),
      photo: null,
      urlPhoto: "",
      progress: 0,
      adress: null,
      time: null
    };
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
  }

  setAdress = e => {
    e.preventDefault();
    this.setState({ adress: e.target.value });
  };

  setTime = e => {
    e.preventDefault();
    this.setState({ password: e.target.value });
  };

  sweetAlertFunction() {
    const self = this;
    console.log("button clicks");
    swal(
      "Terima Kasih, Ammar!",
      "Harap tunggu tim kami akan menghubungi kamu!",
      "success"
    );
    self.props.history.push("/home");
  }

  // funtion to store date by user choose
  handleChange = date => {
    this.setState({
      startDate: date
    });
    console.log(this.state.startDate);
  };

  // funtion to store photo uploaded by user
  handleChangePhoto = e => {
    if (e.target.files[0]) {
      this.state.photo = e.target.files[0];
      console.log(e.target.files[0]);
    }
  };

  // function to upload photo to cloud storage
  handleUploadPhoto = event => {
    event.preventDefault();
    try {
      const uploadTask = storage
        .ref(`images/${this.state.photo.name}`)
        .put(this.state.photo);
      uploadTask.on(
        "state_changed",
        snapshot => {
          //progress Function
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          this.setState({ progress });
        },
        error => {
          console.log(error);
        },
        () => {
          //Complete Function
          storage
            .ref("images")
            .child(this.state.photo.name)
            .getDownloadURL()
            .then(url => {
              this.setState({ urlPhoto: url });
              console.log(this.state.urlPhoto);
            });
        }
      );
    } catch (err) {
      console.log("File Kosong");
    }
  };

  doOrder = async e => {
    e.preventDefault();
    const self = this;
    axios
      .post(self.props.base_url + "/users", {
        name: self.state.username,
        email: self.state.email,
        password: self.state.password,
        mobile_number: self.state.mobile_number,
        status: false
      })
      .then(function(response) {
        self.props.history.push("/home");
        swal(
          "Terima Kasih, Sudah Login!",
          "Sampah Online siap membantumu!",
          "success"
        );
      })
      .catch(function(error) {
        console.log("errrrrrr", error);
        swal("Oooppss!", "Ada yang error!", "error");
      });
  };

  render() {
    return (
      <div>
        <Header />
        <MDBContainer>
          <MDBRow className="justify-content-center" style={{ padding: "0" }}>
            <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
              <div
                style={{
                  height: "100vh",
                  backgroundColor: "blue",
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
                      <div class="mapouter">
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
                      </div>
                      <br />
                      <h6 className="text-left">
                        Dimana tempat penjemputan sampahmu?
                      </h6>
                      <input
                        type="email"
                        id="defaultFormLoginEmailEx"
                        className="form-control"
                      />
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
                        <p style={{ fontSize: "15px", margin: "0" }}>
                          Masukkan Note
                        </p>
                        <input
                          type="text-area"
                          id="defaultFormLoginEmailEx"
                          className="form-control"
                        />
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
                        <input type="file" onChange={this.handleChangePhoto} />
                        <image src={this.state.photo} />
                        <br />
                        <br />
                        <button onClick={this.handleUploadPhoto}>Upload</button>
                        <br />
                        <br />
                      </div>
                      <MDBBtn
                        onClick={this.sweetAlertFunction}
                        style={{ width: "100%", borderRadius: "15px" }}
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
      </div>
    );
  }
}

export default Location;
