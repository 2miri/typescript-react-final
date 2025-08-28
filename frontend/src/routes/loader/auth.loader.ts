import { useAuthStore } from "../../store/authStore";
import { axiosInstance } from "../api/axios";

export const fetchUserData = async () => {
  try {
    const user = useAuthStore.getState().user;
    const accessToken = sessionStorage.getItem("access_token");
    if (!user && accessToken) {
      const { data } = await axiosInstance.get("/auth/me");
      const setUserData = useAuthStore.getState().setUserData;
      setUserData(data);
    }
  } catch (e) {
    console.error(e);
  }
};
