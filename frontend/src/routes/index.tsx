import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./pages/Home";
import Default from "./layouts/Default";
import PostCreate from "./pages/posts/PostCreate";
import Login from "./pages/auth/Login";
import Posts from "./pages/posts/Posts";
import PostRead from "./pages/posts/PostRead";
import NotFoundPage from "./pages/NotFound";
import Kakao from "./pages/auth/callback/Kakao";
import Signup from "./pages/auth/Signup";
import EmailLogin from "./pages/auth/EmailLogin";
import { fetchUserData } from "./loader/auth.loader";
import FullLoading from "../components/common/FullLoading";
import ErrorState from "../components/common/ErrorState";

const router = createBrowserRouter([
  {
    Component: Default,
    loader: fetchUserData,
    HydrateFallback: FullLoading,
    errorElement: <ErrorState />,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "/posts",
        Component: Posts,
      },
      {
        path: "/create-post",
        Component: PostCreate,
      },
      {
        path: "/edit/:id",
        Component: PostCreate,
      },
      {
        path: "/post/:id",
        Component: PostRead,
      },
      {
        path: "/auth/login",
        Component: Login,
      },
      {
        path: "/auth/email-login",
        Component: EmailLogin,
      },
      {
        path: "/auth/signup",
        Component: Signup,
      },
      {
        path: "/auth/callback/kakao",
        Component: Kakao,
      },
      {
        path: "*",
        Component: NotFoundPage,
      },
    ],
  },
]);

export default function Route() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
