import axios, { AxiosResponse } from "axios";

const apiClient = axios.create({
  baseURL: "https://api.github.com",
  headers: {
    Accept: "application/json"
  }
});

export default {
  getUser(username: string): Promise<AxiosResponse> {
    return apiClient.get("/users/" + username);
  },
  getUserRepositories(username: string): Promise<AxiosResponse> {
    return apiClient.get(`/users/${username}/repos`);
  }
};
