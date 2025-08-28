import { Send } from "lucide-react";

export default function CommentForm() {
  return (
    <form className="mt-4">
      <div className="flex gap-4">
        <img
          src="https://gravatar.com/avatar/default?d=identicon"
          alt="Your avatar"
          className="w-10 h-10 rounded-full"
        />
        <div className="flex-1">
          <textarea
            placeholder={"Write a comment..."}
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none resize-none"
            rows={3}
          />
          <div className="flex justify-end mt-2">
            <button
              type="submit"
              className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
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
