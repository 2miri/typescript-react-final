import { ImagePlus } from "lucide-react";

const categories = [
  "Technology",
  "Lifestyle",
  "Travel",
  "Business",
  "Economy",
  "Sports",
];
export default function PostCreate() {
  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">Write New Post</h1>

      <form className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Title
          </label>
          <input
            type="text"
            id="title"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Category
          </label>
          <select
            id="category"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            required
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
          </label>
          <div className="relative">
            {/* 이미지 선택 후 화면 (미리보기) */}
            {/* <div className="relative w-full aspect-video mb-4">
              <img
                src={
                  "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                }
                alt="Preview"
                className="w-full h-full object-cover rounded-lg"
              />
              <button
                type="button"
                className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
              >
                ✕
              </button>
            </div> */}
            {/* 이미지 선택 전 화면 */}
            <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
              <input
                type="file"
                id="image"
                accept="image/*"
                className="hidden"
              />
              <label
                htmlFor="image"
                className="flex flex-col items-center cursor-pointer"
              >
                <ImagePlus className="h-12 w-12 text-gray-400 mb-3" />
                <span className="text-gray-300">Click to upload image</span>
                <span className="text-gray-500 text-sm mt-1">
                  PNG, JPG up to 10MB
                </span>
              </label>
            </div>
          </div>
        </div>

        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-300 mb-2"
          >
            Content
          </label>
          <textarea
            id="content"
            className="w-full h-96 bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your post content here..."
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors"
          >
            Publish Post
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
