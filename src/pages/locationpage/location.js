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
import Upload from "../../component/time/foto";

class Location extends React.Component {
  state = {
    startDate: new Date(),
    startTime: new Time()
  };

  handleChange = date => {
    this.setState({
      startDate: date
    });
  };

  render() {
    return (
      <div>
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
                <br />
                <h1
                  className="font"
                  style={{ color: "#377C4E", fontWeight: "900", padding: "0" }}
                >
                  Sampah Online
                </h1>
                <br />
                <br />
                <div className="row" style={{ padding: "0", margin: "0" }}>
                  <div className="col-10 text-left">
                    <h2 className="font">Tukar Sampahmu</h2>
                  </div>
                </div>
                <div
                  style={{
                    height: "100vh",
                    backgroundColor: "white",
                    textAlign: "center",
                    padding: "0",
                    // borderTop: "0.5px solid grey",
                    // borderLeft: "0.5px solid grey",
                    // borderRight: "0.5px solid grey",
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

                  <div
                    className="row justify-content-center"
                    style={{ padding: "0", margin: "0" }}
                  ></div>
                  <div class="mapouter">
                    <div class="gmap_canvas">
                      <iframe
                        width="400"
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
                      <MDBInput label="Lokasi" />
                      <div className="text-left">
                        <p style={{ fontSize: "15px", margin: "0" }}>
                          Tentukan tanggal
                        </p>
                        <DatePicker
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
                          label="Tentukan tanggal"
                          style={{ width: "100%" }}
                          selected={this.state.startDate}
                          onChange={this.handleChange}
                          showTimeSelect
                          showTimeSelectOnly
                          timeIntervals={15}
                          timeCaption="Time"
                          dateFormat="h:mm aa"
                        />
                        <MDBInput label="Masukkan Note" size="lg" />
                        <p style={{ fontSize: "15px", margin: "0" }}>
                          Pilih Foto
                        </p>
                        <div className="text-left">
                          <Upload />
                        </div>
                      </div>
                      <MDBBtn
                        style={{ width: "100%" }}
                        href="https://www.mdbootstrap.com"
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
