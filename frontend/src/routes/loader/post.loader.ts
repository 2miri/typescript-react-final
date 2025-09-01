import { LoaderFunctionArgs } from "react-router";
import { axiosInstance } from "../api/axios";
import { requireAuth } from "./auth.loader";

export const fetchOverview = async () => {
  try {
    const { data } = await axiosInstance.get("/posts/overview");
    return data;
  } catch (e) {
    console.error(e);
  }
};

export const fetchPostsDetail = async ({ params }: LoaderFunctionArgs) => {
  try {
    const { data } = await axiosInstance.get(`/posts/${params.id}`);
    const { data: relatedPosts } = await axiosInstance.get(
      `/posts?category=${data.category}&limit=3`
    );
    return { post: data, relatedPosts };
  } catch {
    return { post: null, relatedPosts: null };
    // console.error(e);
  }
};

export const petchPostModify = async ({ params }: LoaderFunctionArgs) => {
  try {
    const auth = requireAuth();
    if (auth) return auth;
    const { data } = await axiosInstance.get(`/posts/${params.id}`);
    return data;
  } catch (e) {
    console.error(e);
  }
};
