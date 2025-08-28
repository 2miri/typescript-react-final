import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";
import { axiosInstance } from "../routes/api/axios";

interface User {
  id: string;
  kakaoId: string;
  nickname: string;
  profileImage: string;
  email?: string;
}

interface AuthStore {
  isLogin: boolean;
  user: User | null;
  setUserData: (userData: User) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>()(
  devtools(
    immer((set) => ({
      isLogin: false,
      user: null,
      setUserData: (userData) => {
        set((state) => {
          state.isLogin = true;
          state.user = userData;
        });
      },
      logout: async () => {
        await axiosInstance.post("/auth/logout");
        set((state) => {
          state.user = null;
          state.isLogin = false;
          sessionStorage.removeItem("access_token");
          console.log(state.user);
        });
      },
    }))
  )
);
