import axios from "axios";

const fetch = axios.create({
  baseURL: "https://628bf017667aea3a3e387e51.mockapi.io",
  headers: {
    "Content-Type": "application/json",
  },
});

export default fetch;
