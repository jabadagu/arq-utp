import axios from "axios";
import { Environment } from "./env";

export const axiosInstanceLogin = axios.create({
  baseURL: Environment.backend.loginMS,
});

export const axiosInstanceRegister = axios.create({
  baseURL: Environment.backend.registerMS,
});

export const axiosInstanceCategory = axios.create({
  baseURL: Environment.backend.categoryMS,
});
