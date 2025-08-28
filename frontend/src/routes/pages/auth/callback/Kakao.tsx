import { Mail } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router";
import Redirection from "../../../../components/common/Redirection";
import { axiosInstance } from "../../../api/axios";
import { authStore } from "../../../../store/authStore";

export default function Kakao() {
  const navigate = useNavigate();
  const setUserData = authStore((state) => state.setUserData);
  const [searchParam] = useSearchParams();
  const accessToken = searchParam.get("access_token");
  const emailYn = searchParam.get("email");

  const [showForm, setShowForm] = useState(false);
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const handleFormAction = async () => {
    setError("");
    try {
      if (accessToken) sessionStorage.setItem("access_token", accessToken);
      const {
        data: { user },
      } = await axiosInstance.patch("/auth/update-email", {
        email,
      });

      setUserData({
        id: user._id,
        kakaoId: user.kakaoId,
        profileImage: user.profileImage,
        nickname: user.nickname,
        email: user.email,
      });
      navigate("/");
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    }
  };

  const fetchAndSaveUser = async () => {
    setError("");
    try {
      if (accessToken) sessionStorage.setItem("access_token", accessToken);
      const { data } = await axiosInstance.get("/auth/me");
      setUserData(data);
      navigate("/");
    } catch (e) {
      setError(e instanceof Error ? e.message : "unknown error");
    }
  };

  useEffect(() => {
    if (emailYn === "N") {
      setShowForm(true);
    } else {
      fetchAndSaveUser();
    }
  }, [emailYn]);

  return (
    <>
      <>
        {showForm ? (
          <div className="min-h-[calc(100vh-64px)] flex items-center justify-center px-4">
            <div className="w-full max-w-md">
              <div className="bg-slate-800 rounded-lg shadow-xl p-8">
                <div className="text-center mb-8">
                  <h1 className="text-2xl font-bold text-white mb-2">
                    You're almost there
                  </h1>
                  <p className="text-gray-400">Sign up with just your email!</p>
                </div>

                <form action={handleFormAction} className="space-y-4">
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
                      <input
                        type="email"
                        id="email"
                        className="w-full bg-slate-700 text-white pl-10 pr-4 py-3 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                        placeholder="Enter your email"
                        autoComplete="off"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    {error && <p className="text-rose-500 mt-2">{error}</p>}
                  </div>
                  <div className="flex gap-3">
                    <button
                      type="button"
                      className="flex-1 py-3 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors"
                      onClick={() => navigate(-1)}
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="flex-1 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
                    >
                      Continue
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        ) : (
          <Redirection />
        )}
      </>
    </>
  );
}
