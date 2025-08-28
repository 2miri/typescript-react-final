import AdBanner from "../../components/common/AdBanner";
import FeaturedPost from "../../components/post/FeaturedPost";
import PostGrid from "../../components/post/PostGrid";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-8 py-8">
      <FeaturedPost />

      <div className="mt-8">
        <AdBanner />
      </div>

      <PostGrid />

      <div className="mt-8">
        <AdBanner />
      </div>

      <PostGrid />
    </div>
  );
}
