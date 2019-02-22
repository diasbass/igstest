import axios from "axios";

const api = axios.create({
  baseURL:
    "https://api-content.ingresso.com/v0/templates/highlights/1/partnership/home"
});

export default api;
