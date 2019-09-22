import React, { Component } from "react";
import { MDBRow, MDBCol, MDBContainer } from "mdbreact";
import Footer from "../../Component/Footer";
import { Redirect } from "react-router-dom";
import Header from "../../Component/Header";
import { connect } from "unistore/react";
import { actions } from "../../Store/ActionTrashCategoryPage";
import Swal from "sweetalert2";
import "./trashcategory.css";

class TrashCategory extends Component {
  // to call a function from store
  componentDidMount = async () => {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      await this.props.setTrashCategories();
      await this.props.setTrashes();
    }
  };

  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = (e, photo, price, point) => {
    e.preventDefault();
    Swal.fire({
      imageUrl: photo,
      imageWidth: "100%",
      width: "80vw",
      html: `<p>Rp ${price} <br> Poin: ${point}</p>`
    });
  };

  render() {
    const isLogin = JSON.parse(localStorage.getItem("isLogin"));
    if (isLogin) {
      return (
        <div className="page">
          <Header />
          <MDBContainer>
            <MDBRow className="justify-content-center" style={{ padding: "0" }}>
              <MDBCol style={{ maxWidth: "480px", padding: "0" }}>
                <div className="pageBody">
                  <br />
                  <br />
                  <div className="row justify-content-center p-0 m-0">
                    <div
                      className="col-11 text-left"
                      style={{
                        padding: "5px 0 8px 0",
                        marginBottom: "20px"
                      }}
                    >
                      <div className="row justify-content-center m-0 p-0">
                        <div className="col-11 p-0 m-0 text-center trashBorderTop">
                          <h2 className="font pt-2 pb-2 trashH2">
                            Kategori Sampah
                          </h2>
                        </div>
                      </div>
                      <div className="row p-0 m-0 justify-content-center list">
                        <div className="col-11 trashBorderBot text-left px-0 py-0 mb-5 ">
                          {this.props.trashCategories.map((item, index) => {
                            return (
                              <div>
                                <div
                                  className="accordion"
                                  id={"accordion" + index}
                                >
                                  <div className="card font p-0">
                                    <div
                                      className="card-header p-0"
                                      data-toggle="collapse"
                                      data-target={"#collapse" + index}
                                      aria-expanded="true"
                                      aria-controls="collapseOne"
                                      id="headingOne"
                                    >
                                      <button
                                        className="btn btn-link"
                                        type="button"
                                      >
                                        <h4
                                          id="capitalize"
                                          className="mb-0 accordion font"
                                        >
                                          {item.category_name}
                                        </h4>
                                      </button>
                                    </div>

                                    <div
                                      id={"collapse" + index}
                                      className="collapse"
                                      aria-labelledby="headingOne"
                                      data-parent={"#accordion" + index}
                                    >
                                      <div className="card-body">
                                        <ul>
                                          {this.props.trashes
                                            .filter(element => {
                                              return (
                                                element.trash_category_id ===
                                                item.id
                                              );
                                            })
                                            .map((elm, key) => {
                                              return (
                                                <li>
                                                  <div className="row">
                                                    <div className="col-6">
                                                      <a
                                                        onClick={e =>
                                                          this.toggle(
                                                            e,
                                                            elm.photo,
                                                            elm.price,
                                                            elm.point
                                                          )
                                                        }
                                                      >
                                                        {elm.trash_name}
                                                      </a>
                                                    </div>
                                                  </div>
                                                </li>
                                              );
                                            })}
                                        </ul>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                          <br />
                        </div>
                      </div>
                    </div>
                  </div>
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

// export default TrashPage;
export default connect(
  "trashCategories, trashes",
  actions
)(TrashCategory);
