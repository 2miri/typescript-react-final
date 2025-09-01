import { Send } from "lucide-react";
import { useState } from "react";
import { useAuthStore } from "../../store/authStore";
import { useNavigate, useParams } from "react-router";
import { axiosInstance } from "../../routes/api/axios";

export default function CommentForm() {
  const params = useParams();
  const navigate = useNavigate();
  const user = useAuthStore((state) => state.user);
  const [text, setText] = useState("");
  const handleCommendAdd = async () => {
    try {
      if (!text.trim()) return;
      await axiosInstance.post(`/posts/${params.id}/comments`, {
        content: text,
      });
      setText("");
    } catch (e) {
      alert(e instanceof Error ? e.message : "unknown error");
    }
  };
  const handleFocus = () => {
    if (!user) navigate("/auth/login");
  };
  return (
    <form action={handleCommendAdd} className="mt-4">
      <div className="flex gap-4">
        {user && (
          <img
            src={user.profileImage}
            alt={user.nickname}
            className="w-10 h-10 rounded-full"
          />
        )}

        <div className="flex-1">
          <textarea
            placeholder={"Write a comment..."}
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows={3}
            value={text}
            onChange={(e) => setText(e.target.value)}
            onFocus={handleFocus}
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed"
              disabled={!user}
            >
              <Send className="w-4 h-4" />
              Comment
            </button>
          </div>
        </div>
      </div>
    </form>
  );
}
