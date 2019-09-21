import axios from "axios";
import Swal from "sweetalert2";
import swal from "sweetalert";

export const actions = store => ({
  // function for claiming a reward

  async claimReward(state, id) {
    const swalConfirmations = Swal.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });

    // making the confirmaton first before it deleted

    swalConfirmations
      .fire({
        title: "Apakah kamu yakin?",
        text: "Untuk membeli hadiah ini dengan pointmu?",
        type: "warning",
        showCancelButton: true,
        confirmButtonText: "Ya, aku yakin!",
        cancelButtonText: "Tidak jadi deh!",
        reverseButtons: true
      })
      .then(result => {
        if (result.value) {
          const config = {
            method: "PUT",
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`
            },
            data: {
              stock: 1
            },
            url: `${store.getState().base_url}${
              store.getState().urlReward
            }/${id}`
          };

          // delete with axios

          axios(config)
            .then(async response => {
              localStorage.setItem("point", response.data.user_point);
              await Swal.fire({
                type: "success",
                title: "Success",
                text:
                  "Poof! Hadiah berhasil dibeli dan akan dikirimkan saat order kamu selanjutnya."
              });
              window.location.reload();
            })
            .catch(error => {
              Swal.fire({
                type: "error",
                title: "Oops....",
                text: "Poinmu kurang untuk membeli hadiah ini!"
              });
            });
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          swalConfirmations.fire(
            "Ayo kumpulkan poinmu!",
            "Dan cari hadiah yang lain",
            "error"
          );
        }
      });
  },

  async setAllRewards() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };
    axios
      .get(store.getState().base_url + store.getState().urlReward, config)
      .then(response => {
        const data = response.data.filter(elm => elm.status === true);

        store.setState({ reward: data });

        if (store.getState().reward.length === 0) {
          store.setState({
            notFoundReward: "Mohon maaf, tidak ada hadiah saat ini"
          });
        } else {
          store.setState({
            notFoundReward: " "
          });
        }
      })

      .catch(error => {});
  },

  async setRewardHistory() {
    const config = {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("token")}`
      }
    };

    axios
      .get(store.getState().urlBase + store.getState().urlRewardHistory, config)
      .then(response => {
        store.setState({ rewardHistory: response.data });

        if (store.getState().rewardHistory.length === 0) {
          store.setState({
            notFoundHistoryReward: "Anda belum memiliki riwayat hadiah"
          });
        } else {
          store.setState({
            notFoundHistoryReward: " "
          });
        }
      })
      .catch(error => {});
  },
  async setPointReward(state) {
    axios
      .get(
        store.getState().base_url +
          store.getState().urlUsers +
          "/" +
          localStorage.getItem("id"),
        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token")
          }
        }
      )
      .then(function(response) {
        localStorage.setItem("point", response.data.point);
        store.setState({ point: response.data.point });
      })
      .catch(function(error) {
        swal("Oops ada yang salah!", "Coba lagi!", "error");
      });
  }
});
