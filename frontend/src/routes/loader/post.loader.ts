import { axiosInstance } from "../api/axios";

export const fetchOverview = async () => {
  try {
    const { data } = await axiosInstance.get("/posts/overview");
    return data;
  } catch (e) {
    console.error(e);
  }
};
