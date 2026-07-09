import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter, Route } from "react-router-dom";
import App from "./routes/App.jsx";
import CreatePost, { createPostAction } from "./components/CreatePost.jsx";
import PostList, { postLoader } from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <PostList />, loader: postLoader }, //declarative routes
      {
        path: "/create-post",
        element: <CreatePost />,
        action: createPostAction,
      },
    ],
  }, //layout routes

  // { path: "/", element: <App /> }, //declarative routes
  // {
  //   path: "/create-post",
  //   element: <CreatePost />,
  // }, //declarative routes
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
