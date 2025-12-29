import axios from "axios";

const api = axios.create({
  baseURL: "https://ai-resume-builder-backend-lalu.onrender.com"
});

export default api;
