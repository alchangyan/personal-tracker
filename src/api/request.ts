import axios, { AxiosRequestConfig, AxiosResponse } from "axios";

export const AUTH_ERROR_EVENT = "APP_AUTH_ERROR_EVENT";

const API_URL = import.meta.env.VITE_APP_API_URL as string;

const axiosApi = axios.create({
  baseURL: API_URL,
});

axiosApi.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");

  if (config.headers) {
    config.headers["Authorization"] = `Bearer ${token}`;
    config.headers["Accept"] = "application/json";
    config.headers["Content-Type"] = "application/json";
  }

  return config;
});

axiosApi.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error) => {
    if (error.response) {
      const status = error.response.status;

      switch (status) {
        case 401:
          localStorage.removeItem("token");
          localStorage.removeItem("userId");
          window.location.href = "/login";
          break;

        default:
          console.error("Unhandled error status:", status);
          break;
      }
    } else {
      console.error("Unknown error:", error);
    }

    return Promise.reject(error);
  }
);

export async function get<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi.get<T>(url, config).then((response) => response.data);
}

export async function post<T>(
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi.post<T>(url, data, config).then((response) => response.data);
}

export async function put<T>(
  url: string,
  data: unknown,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi.put<T>(url, data, config).then((response) => response.data);
}

export async function del<T>(
  url: string,
  config: AxiosRequestConfig = {}
): Promise<T> {
  return axiosApi.delete<T>(url, config).then((response) => response.data);
}

export const apiClient = axiosApi;
