import axios from "axios";

export const api = axios.create({
  baseURL: "https://feedbacks-app-mern.onrender.com/api",
});

