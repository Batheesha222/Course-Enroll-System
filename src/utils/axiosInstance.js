import axios from "axios";

const axiosInstance = axios.create({ baseURL: "http://localhost:5253/api" });

export default axiosInstance;