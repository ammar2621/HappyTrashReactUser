import axios from "axios";
import store from "./Store";

export const actions = store => ({
  // Function to load profile attributes
  async loadProfile(state) {
    const config = {
      method: "GET",
      url: `${store.getState().base_url}/users/${localStorage.getItem("id")}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    await axios(config)
      .then(response => {
        console.log(response.data);
        localStorage.setItem("name", response.data.name);
        localStorage.setItem("email", response.data.email);
        localStorage.setItem("mobile_number", response.data.mobile_number);
        localStorage.setItem("total_trash", response.data.total_trash);
      })
      .then(error => {
        console.log(error);
      });
  }
});
