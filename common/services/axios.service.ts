import axios from "axios";
import appConfig from "../configs/app.config";

export const axiosIntance = axios.create({
  baseURL: appConfig,
});
