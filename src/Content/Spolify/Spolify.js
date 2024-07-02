import axios from "axios";

const authEndpoint = "https://accounts.spotify.com/authorize?";
const clientId = "d838f1f8bc344cedbba777f1bdec03c2";
const redirectUri = "http://localhost:3000/";
const response_type = "token";
const scopes = [
  "user-library-read",
  "playlist-read-private",
  "user-follow-read",
  "user-follow-modify",
  "playlist-read-collaborative",
  "playlist-modify-private",
  "playlist-modify-public",
];

export const loginEndpoint = `${authEndpoint}client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
  "%20"
)}&response_type=token&show_dialog=true`;

const apiClient = axios.create({
  baseURL: "https://api.spotify.com/v1/",
});

export const setClientToken = (token) => {
  apiClient.interceptors.request.use(async function (config) {
    config.headers.Authorization = "Bearer " + token;
    return config;
  });
};

export default apiClient;
