import React from "react";
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

const Location = () => {
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
                  border: "0.5px solid grey",
                  borderRadius: "20px"
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
                    <div className="col-2">
                      <h6>haii</h6>
                    </div>
                    <div className="col-9">
                      <MDBInput label="Lokasi" />
                    </div>
                    <MDBBtn
                      style={{ width: "100%" }}
                      href="https://www.mdbootstrap.com"
                      target="_blank"
                      color="secondary"
                    >
                      Secondary href target blank
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
};

export default Location;
