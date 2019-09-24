import axios from "axios";
import Swal from "sweetalert2";

export const actions = store => ({
  // Function to clasification a user's orders
  async setUserOrder(state) {
    const config = {
      method: "GET",
      url: store.getState().base_url + store.getState().urlOrder,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    axios(config)
      .then(response => {
        store.setState({ waiting: [] });
        store.setState({ orders: [] });
        response.data.forEach(element => {
          if (
            element.Order.status === "waiting" ||
            element.Order.status === "confirmed"
          ) {
            store.getState().waiting.push(element);
          } else {
            store.getState().orders.push(element);
          }
          if (store.getState().orders.length === 0) {
            store.setState({
              notFoundOrder: "Anda tidak memiliki pesanan yang belum selesai"
            });
          } else {
            store.setState({
              notFoundOrder: " "
            });
          }

          if (store.getState().waiting.length === 0) {
            store.setState({
              notFoundWaiting: "Belum ada pesanan."
            });
          } else {
            store.setState({ notFoundWaiting: " " });
          }
        });
      })
      .catch(error => {});
  },

  // Function to a cancel order
  async cancelOrder(state, id) {
    const config = {
      method: "PUT",
      url: `${store.getState().base_url}/orders/${id}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      },
      data: {
        status: "cancelled"
      }
    };
    await axios(config)
      .then(response => {
        store.setState({ orders: [], waiting: [] });
        Swal.fire({
          type: "success",
          title: "Success",
          text: "Order berhasil dibatalkan!"
        });
      })
      .catch(error => {});
  },

  // Function to get a order by user id
  getSingleOrder(state, id) {
    const config = {
      method: "GET",
      url: `${store.getState().urlBase}${store.getState().urlOrder}`,
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    axios(config)
      .then(response => {
        let order = response.data.filter(elm => {
          return elm.Order.id === parseInt(id);
        });
        store.setState({ singleOrder: order[0] });
      })
      .catch(error => {});
  }
});
