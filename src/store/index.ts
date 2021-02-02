import { createStore } from "vuex";
import services from "@/services";

export interface User {
  avatar_url: string;
  html_url: string;
  linkedinUrl: string;
}

export interface Repository {
  name: string;
  html_url: string;
  description: string;
  created_at: string;
  updated_at: string;
}
export interface State {
  reposList: Repository[];
  language: "pt-BR" | "en-US";
  theme: "dark" | "light";
  user?: User;
}

const store = createStore<State>({
  state() {
    return { user: undefined, reposList: [], language: "pt-BR", theme: "dark" };
  },
  mutations: {
    SET_USER(state, user) {
      state.user = user;
    },
    SET_REPOS(state, reposList: Repository[]) {
      state.reposList = reposList.reverse();
    },
    TOGGLE_LANGUAGE(state) {
      state.language = state.language === "pt-BR" ? "en-US" : "pt-BR";
    },
    TOGGLE_THEME(state) {
      state.theme = state.theme === "dark" ? "light" : "dark";
    }
  },
  actions: {
    toggleLanguage({ commit }) {
      commit("TOGGLE_LANGUAGE");
    },
    toggleTheme({ commit }) {
      commit("TOGGLE_THEME");
    },
    fetchUser({ commit }) {
      services
        .getUser("victor-r")
        .then(response => {
          commit("SET_USER", {
            linkedinUrl:
              "https://www.linkedin.com/in/victor-henrique-ribeiro-34172811a/",
            ...response.data
          });
        })
        .catch(error => {
          console.log("Something went wrong: " + error);
        });
    },
    fetchRepositories({ commit }) {
      services
        .getUserRepositories("victor-r")
        .then(response => {
          commit("SET_REPOS", response.data);
        })
        .catch(error => {
          console.log("Something went wrong: " + error);
        });
    }
  },
  modules: {}
});

export default store;
