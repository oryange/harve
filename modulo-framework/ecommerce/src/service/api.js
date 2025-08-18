import axios from "axios";

const api = axios.create({
    baseURL: "https://6895301e039a1a2b288e9d77.mockapi.io/api/ecommerce",
});

export default api;
