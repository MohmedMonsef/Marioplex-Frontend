import axios from "axios";

export default {
  namespaced: true,
  state: {
    userNotifications: [],
  },
  mutations: {   
    setUserNotifications(state, notification) {
      state.userNotifications = notification;
    }

  },
  actions: {
    showUserNotifications({ commit }) {
        axios
          .get("/api/me/notifications")
          .then((response) => {
            let notification = response.data;
            commit("setUserNotifications", notification);
          })
          .catch((error) => {
            console.log(error);
          });
      }
  },
  getters: {
    notifications: (state) => state.userNotifications,
  },
};
