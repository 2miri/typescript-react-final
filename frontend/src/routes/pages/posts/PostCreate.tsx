import axios from "axios";
import { ImagePlus, Loader2 } from "lucide-react";
import { useEffect, useState, useTransition } from "react";
import { useLoaderData, useNavigate } from "react-router";
import { axiosInstance } from "../../api/axios";

const categories = [
  "",
  "Technology",
  "Lifestyle",
  "Travel",
  "Business",
  "Economy",
  "Sports",
];

type FormStateType = {
  title: string;
  category: string;
  thumbnail: string;
  content: string;
};

const MAX_FILE_SIZE = 10 * 1024 * 1024; // 10MB

export default function PostCreate() {
  const navigate = useNavigate();
  const post: Post = useLoaderData();
  const [formState, setFormState] = useState<FormStateType>({
    title: "",
    category: "",
    thumbnail: "",
    content: "",
  });

  const [errorState, setErrorState] = useState<FormStateType>({
    title: "",
    category: "",
    thumbnail: "",
    content: "",
  });

  const [previewImage, setPreviewImage] = useState("");
  const [isPending, startTransition] = useTransition();

  const handleChangeFormState = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormState((formState) => ({
      ...formState,
      [e.target.name]: e.target.value,
    }));

    setErrorState((state) => ({
      ...state,
      [e.target.name]: "",
    }));
  };

  const handleChangeImage = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    const allowedExtensions = ["png", "webp", "jpeg", "jpg"];
    const fileExtension = selectedFile.name.split(".").pop()?.toLowerCase(); // ****.jpg

    if (!fileExtension || !allowedExtensions.includes(fileExtension)) {
      alert(`허용된 이미지 확장자는 ${allowedExtensions.join(", ")} 입니다.`);
      e.target.value = "";
      return;
    }

    if (selectedFile.size > MAX_FILE_SIZE) {
      alert("이미지 용량은 10MB 이하로 해주세요.");
      e.target.value = "";
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      setErrorState((error) => ({ ...error, thumbnail: "" }));
      setPreviewImage(reader.result as string);
    };
    reader.readAsDataURL(selectedFile);
  };

  const handleFormAction = async () => {
    console.log(formState);
    startTransition(async () => {
      try {
        // 폼 유효성 검사
        const newErors: FormStateType = {} as FormStateType;
        if (!formState.title.trim()) newErors.title = "Please enter a title";
        if (!formState.category.trim())
          newErors.category = "Please select a category";
        if (!previewImage) newErors.thumbnail = "Please upload a thumbnail";
        if (!formState.content.trim())
          newErors.content = "Please enter a content";

        if (Object.keys(newErors).length > 0) {
          setErrorState(newErors);
          return;
        }

        let thumbnail = post?.thumbnail || "";
        if (previewImage !== thumbnail) {
          const formData = new FormData();
          formData.append("file", previewImage);
          formData.append("upload_preset", "react_blog");

          const {
            data: { url },
          } = await axios.post(
            "https://api-ap.cloudinary.com/v1_1/desarsxkq/image/upload",
            formData
          );
          thumbnail = url;
        }

        if (post) {
          // 수정
          const { status } = await axiosInstance.put(`/posts/${post._id}`, {
            title: formState.title,
            category: formState.category,
            thumbnail: thumbnail,
            content: formState.content,
          });

          if (status === 200) {
            alert("Post updated!");
            navigate(`/post/${post._id}`);
          }
        } else {
          // 등록
          const { status } = await axiosInstance.post("/posts", {
            title: formState.title,
            category: formState.category,
            thumbnail: thumbnail,
            content: formState.content,
          });

          if (status === 201) {
            alert("Post added!");
            navigate("/");
          }
        }
      } catch (e) {
        console.error(e instanceof Error ? e.message : "unknwon error");
      }
    });
  };

  useEffect(() => {
    if (post) {
      setFormState({
        title: post.title,
        category: post.category,
        thumbnail: post.thumbnail,
        content: post.content,
      });
      setPreviewImage(post.thumbnail);
    }
  }, [post]);

  return (
    <div className="max-w-4xl mx-auto px-4 md:px-8 py-8">
      <h1 className="text-3xl font-bold text-white mb-8">
        Write {post ? "Modify" : "New"} Post
      </h1>

      <form action={handleFormAction} className="space-y-6">
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
            name="title"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Enter post title"
            value={formState.title}
            onChange={handleChangeFormState}
          />
          {errorState?.title && (
            <p className="text-rose-500 mt-1">{errorState.title}</p>
          )}
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
            name="category"
            className="w-full bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            value={formState.category}
            onChange={handleChangeFormState}
          >
            {categories.map((category) => (
              <option key={category} value={category}>
                {category === "" ? "Select a Category" : category}
              </option>
            ))}
          </select>
          {errorState?.category && (
            <p className="text-rose-500 mt-1">{errorState.category}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-300 mb-2">
            Featured Image
          </label>
          <div className="relative">
            {previewImage ? (
              <div className="relative w-full aspect-video mb-4">
                <img
                  src={previewImage}
                  alt="Preview"
                  className="w-full h-full object-cover rounded-lg"
                />
                <button
                  type="button"
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full hover:bg-red-600 transition-colors"
                  onClick={() => setPreviewImage("")}
                >
                  ✕
                </button>
              </div>
            ) : (
              <div className="border-2 border-dashed border-gray-600 rounded-lg p-8 text-center">
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  className="hidden"
                  onChange={handleChangeImage}
                />
                <label
                  htmlFor="image"
                  className="flex flex-col items-center cursor-pointer"
                >
                  <ImagePlus className="h-12 w-12 text-gray-400 mb-3" />
                  <span className="text-gray-300">Click to upload image</span>
                  <span className="text-gray-500 text-sm mt-1">
                    PNG, JPG, JPEG, WEBP up to 10MB
                  </span>
                </label>
              </div>
            )}
            {errorState?.thumbnail && (
              <p className="text-rose-500 mt-1">{errorState.thumbnail}</p>
            )}
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
            name="content"
            className="w-full h-96 bg-slate-800 text-white rounded-lg px-4 py-2.5 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your post content here..."
            value={formState.content}
            onChange={handleChangeFormState}
          />
          {errorState?.content && (
            <p className="text-rose-500 mt-1">{errorState.content}</p>
          )}
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            className="px-6 py-2.5 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition-colors disabled:bg-gray-400"
            disabled={isPending}
          >
            {isPending ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : post ? (
              "Modify Post"
            ) : (
              "Publish Post"
            )}
          </button>
          <button
            type="button"
            className="px-6 py-2.5 bg-slate-700 text-white font-medium rounded-lg hover:bg-slate-600 transition-colors"
            onClick={() => navigate(-1)}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
