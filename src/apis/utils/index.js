import axios from "axios";

export const API = axios.create({
  baseURL: import.meta.env.VITE_APP_API_KEY,
  headers: {
    "Content-Type": "application/json"
  },
  withCredentials: true
});
