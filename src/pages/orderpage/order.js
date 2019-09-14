import React, { Component } from "react";
import {
  MDBRow,
  MDBCol,
  MDBInput,
  MDBCard,
  MDBCardHeader,
  MDBCardTitle,
  MDBCardText,
  MDBBtn,
  MDBCardFooter,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBContainer
} from "mdbreact";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Time from "../../component/time/time";
import Upload from "./foto";
import swal from "sweetalert";
import Header from "../../component/header";
import { storage } from "../../firebase/index";

class Location extends React.Component {
  constructor(props) {
    super(props);
    this.sweetAlertFunction = this.sweetAlertFunction.bind(this);
    this.state = {
      startDate: new Date(),
      startTime: new Time(),
      photo: null,
      urlPhoto: "",
      progress: 0,
    }
  }

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

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  // funtion to store photo uploaded by user
  handleChangePhoto = e => {
    if (e.target.files[0]) {
      this.state.photo = e.target.files[0];
      console.log(e.target.files[0])
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
                  backgroundColor: "#F0F0f0",
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
                          dateFormat="dd-MM-yyyy"
                          label="Tentukan tanggal"
                          style={{ width: "100%" }}
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                        />
                        <br />
                        <br />
                        <p style={{ fontSize: "15px", margin: "0" }}>
                          Tentukan Waktu
                        </p>
                        <DatePicker
                          timeFormat="HH:mm"
                          label="Tentukan waktu"
                          style={{ width: "100%" }}
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={30}
                          timeCaption="Time"
                          dateFormat="HH:mm"
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
                        <br />
                        <label for="inputPhotoURL">Pilih Foto Lalu Klik Upload</label>
                        <br />
                        <progress value={this.state.progress} max="100" style={{ width: "100%" }} />
                        <br />
                        <input type="file" onChange={this.handleChangePhoto} />
                        <image src={this.state.photo}/>
                        <br />
                        <br />
                        <button onClick={this.handleUploadPhoto}>Upload</button>
                        <br/>
                        <br/>
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
