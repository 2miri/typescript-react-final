import { Link } from "react-router";
import PostCard from "./PostCard";
// import PostMainZero from "./PostMainZero";

export default function PostGrid() {
  // 게시글이 없으면 PostMainZero 컴포넌트를 보여줍니다.
  // return <PostMainZero />;
  return (
    <section className="py-10">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-bold text-white">Latest Post</h2>
        <Link
          to="/"
          className="text-sm text-blue-400 hover:text-blue-300 transition-colors"
        >
          View All Post
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array.from({ length: 6 }, (_, i) => `Post ${i}`).map((_, index) => (
          <PostCard key={index} />
        ))}
      </div>
    </section>
  );
}
