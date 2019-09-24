// import axios from "axios";
// import Swal from "sweetalert2";
// import swal from "sweetalert";
// import store from "./Store";

// export const actions = store => ({
//   // Function to set a point of user
//   async setPointReward(state) {
//     axios
//       .get(
//         store.getState().base_url +
//           store.getState().urlUsers +
//           "/" +
//           localStorage.getItem("id"),
//         {
//           headers: {
//             Authorization: "Bearer " + localStorage.getItem("token")
//           }
//         }
//       )
//       .then(function(response) {
//         localStorage.setItem("point", response.data.point);
//         store.setState({ point: response.data.point });
//       })
//       .catch(function(error) {
//         swal("Oops ada yang salah!", "Coba lagi!", "error");
//       });
//   }
// });
