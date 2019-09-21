// import createStore from "unistore";
import axios from "axios";
import store from "./Store";

export const actions = store => ({
  // Function to get a trash category
  async setTrashCategories(state) {
    const req = {
      method: "get",
      url: store.getState().urlBase + store.getState().urlTrashCategories,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ trashCategories: response.data });
      })
      .catch(error => {
        alert(error);
      });
  },
  // Function to get a trash's name
  async setTrashes(state) {
    const req = {
      method: "get",
      url: store.getState().urlBase + store.getState().urlTrashes,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    await axios(req)
      .then(response => {
        store.setState({ trashes: response.data });
      })
      .catch(error => {
        alert(error);
      });
  }
});
