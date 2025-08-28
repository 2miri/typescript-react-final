import { CalendarDays } from "lucide-react";
import { Link } from "react-router";

export default function PostCard() {
  return (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl">
      <Link
        to="/post/1"
        className="block relative aspect-video overflow-hidden"
        data-discover="true"
      >
        <img
          alt="The Impact of Technology on the Workplace: How Technology Is Changing"
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
          src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=1260&amp;h=750&amp;dpr=1"
        />
        <div className="absolute top-3 left-3">
          <span className="bg-blue-500 text-white text-xs font-semibold px-2.5 py-1 rounded-md">
            Technology
          </span>
        </div>
      </Link>
      <div className="p-4">
        <Link to="/post/1" data-discover="true">
          <h2 className="text-white text-lg font-bold line-clamp-2 mb-3 hover:text-blue-400">
            The Impact of Technology on the Workplace: How Technology Is
            Changing
          </h2>
        </Link>
        <div className="flex items-center">
          <img
            alt="Jason Francisco"
            className="w-6 h-6 rounded-full mr-2"
            src="https://gravatar.com/avatar/42b0d0e8377b33f970e9eeded0cb5a61?d=identicon"
          />
          <span className="text-gray-300 text-sm mr-3">Jason Francisco</span>
          <div className="flex items-center text-xs text-gray-400">
            <CalendarDays className="h-3 w-3 mr-1" aria-hidden="true" />
            <span>August 20, 2025</span>
          </div>
        </div>
      </div>
    </div>
  );
}
