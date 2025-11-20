import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from "axios";
import cookies from "js-cookie";
import { Environment } from "./env";

const getAuthToken = (): string | undefined => {
  return cookies.get("token");
};

const setupAuthInterceptor = (axiosInstance: AxiosInstance): void => {
  axiosInstance.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
      const token = getAuthToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => response,
    (error: AxiosError) => {
      if (error.response?.status === 401) {
        cookies.remove("token");
        if (typeof window !== "undefined") {
          window.location.href = "/auth/login";
        }
      }
      return Promise.reject(error);
    }
  );
};

export const axiosInstanceLogin = axios.create({
  baseURL: Environment.backend.loginMS,
});

export const axiosInstanceRegister = axios.create({
  baseURL: Environment.backend.registerMS,
});

export const axiosInstanceCategory = axios.create({
  baseURL: Environment.backend.categoryMS,
});

export const axiosInstanceService = axios.create({
  baseURL: Environment.backend.serviceMS,
});

export const axiosInstanceEventType = axios.create({
  baseURL: Environment.backend.eventTypeMS,
});

export const axiosInstanceQuote = axios.create({
  baseURL: Environment.backend.quoteMS,
});

setupAuthInterceptor(axiosInstanceCategory);
setupAuthInterceptor(axiosInstanceService);
setupAuthInterceptor(axiosInstanceEventType);
setupAuthInterceptor(axiosInstanceQuote);
