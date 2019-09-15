import createStore from 'unistore';
import axios from 'axios';

export const store = createStore({
  email: '',
  full_name: '',
  is_login: false,
  api_key: '',
  keyword: '',
  values: [],
  jumlah: 0,
  total: '',
  listName: [],
  gender: '',
  name: '',
  token: '',

  // base_url: 'http://backend.fikriamri.xyz/v1',
  base_url: 'http://localhost:5000/v1',

  // data (made by Fikri)
  trashCategories: [],

  // url
  urlBase: 'http://backend.fikriamri.xyz/v1',
  urlTrashCategories: '/trash_category',

});

export const actions = (store) => ({
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
  setQuestion(state, value) {
    return { question: value };
  },
  setTotal(state, value) {
    return { total: value };
  },
  setJumlah(state, value) {
    return { jumlah: value };
  },
  setPic(state, value) {
    return { pic: value };
  },
  ubahMale: (state) => {
    store.setState({ gender: 'male' });
  },
  ubahFemale: (state) => {
    store.setState({ gender: 'female' });
  },
  ubahListName: (state, baru) => {
    store.setState({ listName: baru });
  },
  ubahName: (state, baru) => {
    store.setState({ name: baru });
  },
  setToken: (state, value) => {
    store.setState({ token: value });
  },

  async setTrashCategories(state) {
    const req = {
      method: 'get',
      url: store.getState().urlBase + store.getState().urlTrashCategories,
      headers: {
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    };
    await axios(req)
      .then((response) => {
        store.setState({ trashCategories: response.data });
      })
      .catch((error) => {
        alert(error);
      });
  },

});
