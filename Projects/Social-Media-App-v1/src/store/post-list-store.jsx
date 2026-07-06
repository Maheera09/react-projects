import React, { useReducer, useEffect, useState } from "react";
import { createContext } from "react";

export const PostListContext = createContext({
  postList: [],
  fetching: false,
  addPost: () => {},
  deletePost: () => {},
  //this is called API designing or contract designing
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter((post) => {
      return post.id !== action.payload.id;
    });
  } else if (action.type === "ADD_POST") {
    newPostList = [action.payload, ...currentPostList];
  } else if (action.type === "ADD_INITIAL_POSTS") {
    newPostList = action.payload.posts;
  }
  return newPostList;
};

export const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(postListReducer, []);
  const [fetching, setFetching] = useState(false);

  const addPost = (post) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: post,
    });
  };

  const addInitialPosts = (posts) => {
    dispatchPostList({
      type: "ADD_INITIAL_POSTS",
      payload: {
        posts,
      },
    });
  };

  const deletePost = (id) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        id,
      },
    });
  };

  useEffect(() => {
    setFetching(true);
    const controller = new AbortController(); //This creates an object whose job is to cancel a fetch request if needed.
    const signal = controller.signal; //This creates an object whose job is to cancel a fetch request if needed. You pass this signal to fetch(). Now the fetch is listening to the controller. If the controller says stop, the fetch stops immediately.

    fetch("https://dummyjson.com/posts", { signal })
      .then((res) => res.json())
      .then((data) => {
        addInitialPosts(data.posts);
        setFetching(false);
      });

    return () => {
      //React automatically runs it before the component is removed from the page (unmounted)or before running the effect again (if there are dependencies)
      console.log(`clean up`);
      controller.abort(); //cancels the request before it finishes.
    };
  }, []);

  return (
    <PostListContext.Provider
      value={{ postList, fetching, addPost, deletePost }}
    >
      {children}
    </PostListContext.Provider>
  );
};
