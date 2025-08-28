import { Clock, Filter, TrendingUp } from "lucide-react";
import PostCard from "../../../components/post/PostCard";
import AdBanner from "../../../components/common/AdBanner";

export default function Posts() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      {/* Header: Title + Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 md:mb-0">
          Blog Posts
        </h1>

        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-slate-800 p-2 rounded-lg">
            <Filter className="w-4 h-4 text-gray-500 dark:text-gray-400" />
            <select className="bg-transparent text-gray-700 dark:text-gray-300 focus:outline-none">
              <option>All</option>
              <option>Technology</option>
              <option>Lifestyle</option>
              <option>Travel</option>
              <option>Business</option>
              <option>Economy</option>
              <option>Sports</option>
            </select>
          </div>
          <div className="flex bg-gray-100 dark:bg-slate-800 rounded-lg">
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors bg-blue-500 text-white`}
            >
              <Clock className="w-4 h-4" />
              Latest
            </button>
            <button
              className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-slate-700`}
            >
              <TrendingUp className="w-4 h-4" />
              Popular
            </button>
          </div>
        </div>
      </div>

      {/* Post List - 정적 PostCard 예시 3개 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-12 gap-2">
        <button
          className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50"
          disabled
        >
          Previous
        </button>
        {/* 
        currentPage === page
          ? "bg-blue-500 text-white"
          : "bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300"
        */}
        <button className="w-10 h-10 rounded-lg bg-blue-500 text-white">
          1
        </button>
        <button className="w-10 h-10 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300">
          2
        </button>
        <button className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-gray-300 disabled:opacity-50">
          Next
        </button>
      </div>

      {/* Ad Banner */}
      <div className="mt-12">
        <AdBanner />
      </div>
    </div>
  );
}
