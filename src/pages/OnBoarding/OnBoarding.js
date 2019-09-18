import React from "react";
import SwipeableViews from "react-swipeable-views";
import {
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBView,
  MDBContainer,
  MDBRow,
  MDBCol
} from "mdbreact";

const styles = {
  slide: {
    padding: 15,
    minHeight: 100,
    height: "100vh",
    color: "#fff"
  },
  slide1: {
    backgroundColor: "#FEA900"
  },
  slide2: {
    backgroundColor: "#B3DC4A"
  },
  slide3: {
    backgroundColor: "#6AC0FF"
  }
};

function OnBoarding() {
  return (
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
              id="carouselExampleIndicators"
              class="carousel slide"
              data-ride="carousel"
              data-interval="false"
            >
              <ol class="carousel-indicators">
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="0"
                  class="active"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="1"
                ></li>
                <li
                  data-target="#carouselExampleIndicators"
                  data-slide-to="2"
                ></li>
              </ol>
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <div style={Object.assign({}, styles.slide, styles.slide1)}>
                    <img
                      style={{
                        width: "300px",
                        height: "400px",
                        paddingTop: "100px"
                      }}
                      src="https://image.flaticon.com/icons/svg/1559/1559859.svg"
                    />
                    <div className="row font justify-content-center">
                      <div className="col-10  text-center">
                        <h3 className="font">Tukar Sampahmu</h3>
                        <h5>Dengan Aplikasi Loakin</h5>
                        <h6>
                          Anda dapat menukar sampah kepada kami dan kami akan
                          menjemput sampah tersebut ke lokasi Anda.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div style={Object.assign({}, styles.slide, styles.slide2)}>
                    <img
                      style={{
                        width: "300px",
                        height: "300px",
                        paddingTop: "100px",
                        paddingBottom: "20px",
                        marginTop: "100px"
                      }}
                      src="https://image.flaticon.com/icons/svg/138/138281.svg"
                    />
                    <div className="row font justify-content-center">
                      <div className="col-10  text-center">
                        <h3 className="font">Dapat Uang dan Poin</h3>
                        <h5>Dengan Aplikasi Loakin</h5>
                        <h6>
                          Anda akan mendapatkan uang dan poin dari setiap sampah
                          yang anda tukarkan dengan ketentuan yang ada.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <div style={Object.assign({}, styles.slide, styles.slide3)}>
                    <img
                      style={{
                        width: "300px",
                        height: "300px",
                        paddingTop: "100px",
                        paddingBottom: "20px",
                        marginTop: "100px"
                      }}
                      src="https://image.flaticon.com/icons/svg/1355/1355982.svg"
                    />
                    <div className="row font justify-content-center">
                      <div className="col-10  text-center">
                        <h3 className="font">Tukar Poin</h3>
                        <h5>Dengan Aplikasi Loakin</h5>
                        <h6>
                          Anda dapat menukar poin yang anda dapatkan dari
                          menukar sampah dengan hadiah yang telah kami sediakan.
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleIndicators"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default OnBoarding;
