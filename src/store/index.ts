import { createStore } from "vuex";
import services from "@/services";

export interface User {
  avatar_url: string;
  html_url: string;
  linkedinUrl: string;
}
export interface State {
  user: User;
}

export default createStore({
  state: {
    user: {}
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    }
  },
  actions: {
    fetchUser({ commit }) {
      services
        .getUser("victor-r")
        .then(response => {
          commit("SET_USER", {
            linkedinUrl:
              "https://www.linkedin.com/in/victor-henrique-ribeiro-34172811a/",
            ...response.data
          });
          console.log(
            "🚀 ~ file: index.ts ~ line 19 ~ fetchUser ~ response.data",
            response.data
          );
        })
        .catch(error => {
          console.log("Something went wrong: " + error);
        });
    }
  },
  modules: {}
});
