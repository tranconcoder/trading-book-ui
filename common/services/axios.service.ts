import axios from "axios";
import appConfig from "../configs/app.config";

const axiosInstance = axios.create({
  baseURL: appConfig.serverUrl,
  withCredentials: true,
});

export default axiosInstance;
