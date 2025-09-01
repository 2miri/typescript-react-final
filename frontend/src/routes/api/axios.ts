import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true, // 요청에 쿠키나 인증 정보 포함시킴 (CORS 인증 유지 시 필요)
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = sessionStorage.getItem("access_token");
    if (token) {
      config.headers = config.headers || {};
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

let retry = false;
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;
    if (error.response && error.response.status === 401 && !retry) {
      retry = true;
      try {
        const res = await axiosInstance.post("/auth/refresh");
        if (!res.data.accessToken) throw new Error("Access token is missing");
        retry = false;
        sessionStorage.setItem("access_token", res.data.accessToken);
        return axiosInstance(originalRequest);
      } catch (e) {
        sessionStorage.removeItem("access_token");
        await axiosInstance.post("/auth/logout");
        return Promise.reject(e);
      }
    }
  }
);
