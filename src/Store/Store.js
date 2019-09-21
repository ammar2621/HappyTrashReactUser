import createStore from "unistore";
import axios from "axios";

export const store = createStore({
  email: "",
  full_name: "",
  is_login: false,
  api_key: "",
  values: [],
  jumlah: 0,
  total: "",
  listName: [],
  name: "",
  token: "",

  base_url: "https://api.loakin.online/v1",
  // base_url: 'http://localhost:5000/v1',

  // data (made by Fikri)
  // Trash
  trashCategories: [],
  trashes: [],
  // Order
  orders: [],
  waiting: [],
  singleOrder: { Order: { time: "", id: null }, User: null, Details: null },
  // Reward
  reward: [],
  rewardHistory: [],
  notFoundOrder: "Tidak ada pesanan",
  notFoundWaiting: "Tidak ada pesanan",
  notFoundReward: "Mohon maaf, tidak ada hadiah saat ini",
  notFoundHistoryReward: "Anda belum memiliki riwayat hadiah",
  point: null,
  // Profile
  name_Profile: "",
  email_Profile: "",
  mobile_number_Profile: null,

  // url
  urlBase: "https://api.loakin.online/v1",
  urlTrashCategories: "/trash_category",
  urlTrashes: "/trash",
  urlOrder: "/orders/user",
  urlReward: "/rewards",
  urlRewardHistory: "/reward_history/user",
  urlUsers: "/users"
});

export const actions = store => ({
  setEmail(state, value) {
    return { email: value };
  },
  setName(state, value) {
    return { full_name: value };
  },
  setLogin(state, value) {
    return { is_login: value };
  },
  setKeyword(state, value) {
    return { keyword: value };
  },
  setValue(state, value) {
    return { values: value };
  },
  setApiKey(state, value) {
    return { api_key: value };
  },
  ubahListName: (state, baru) => {
    store.setState({ listName: baru });
  },
  ubahName: (state, baru) => {
    store.setState({ name: baru });
  },
  setToken: (state, value) => {
    store.setState({ token: value });
  }

  // async setTrashCategories(state) {
  //   const isLogin = JSON.parse(localStorage.getItem("isLogin"));
  //   if (isLogin == false) return false;
  //   const req = {
  //     method: "get",
  //     url: store.getState().urlBase + store.getState().urlTrashCategories,
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     }
  //   };
  //   await axios(req)
  //     .then(response => {
  //       store.setState({ trashCategories: response.data });
  //     })
  //     .catch(error => {
  //       alert(error);
  //     });
  // },

  // async setTrashes(state) {
  //   const req = {
  //     method: "get",
  //     url: store.getState().urlBase + store.getState().urlTrashes,
  //     headers: {
  //       Authorization: `Bearer ${localStorage.getItem("token")}`
  //     }
  //   };
  //   await axios(req)
  //     .then(response => {
  //       store.setState({ trashes: response.data });
  //     })
  //     .catch(error => {
  //       alert(error);
  //     });
  // }
});
