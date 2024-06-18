import axios, { CanceledError } from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  params: {},
});


export default apiClient;