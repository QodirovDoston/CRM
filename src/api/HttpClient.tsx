import axios, {
  AxiosInstance,
  AxiosPromise,
  AxiosRequestConfig,
} from "axios";

class ApiClient {
  instance: AxiosInstance;

  constructor(baseURL: any) {
    this.instance = axios.create({
      baseURL,
      headers: {
        "Content-Type": "application/json",
      },
      timeout: 5000,
    });
    this.instance.interceptors.request.use(
      (config: any) => {
        const token = localStorage.getItem("accessToken");

        if (token) {
          config.headers.Authorization = `Bearer ${token}`; // for Node.js Express back-end
        }
        return config;
      },
      (error) => {
        debugger;
        return Promise.reject(error);
      },
    );
    this.instance.interceptors.response.use(
      (response) => {
        return response;
      },
      (error) => {
        // const datas = error.response.data;
        // const { data } = error.response;
        // const { status } = error.response;
        // checkErrorOne(data.slice(31, 37), status);
        // checkErrorTwo(data.slice(32, 38), status);
        // checkErrorThree(data.slice(63, 69), status);
        return Promise.reject(error);
      },
    );
  }

  fetch<T>(config: AxiosRequestConfig): AxiosPromise<T> {
    return this.instance({
      ...config,
      headers: {
        ...config.headers,
      },
    });
  }

  get<T>(url: string, params?: any): AxiosPromise<T> {
    return this.fetch<T>({ method: "GET", url, params });
  }

  delete<T>(url: string, data?: any): AxiosPromise<T> {
    return this.fetch<T>({ method: "DELETE", url, data });
  }

  post<T>(url: string, data: any): AxiosPromise<T> {
    return this.fetch<T>({ method: "POST", url, data });
  }

  put<T>(url: string, data: any): AxiosPromise<T> {
    return this.fetch<T>({ method: "PUT", url, data });
  }
}
// export default () => new ApiClient(import.meta.env.VITE_API_URL);
export default () => new ApiClient("https://api.crm.itechacademy.uz/")