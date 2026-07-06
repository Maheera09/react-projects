import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./loading";

function PostList() {
  const { postList, fetching } = useContext(PostListContext);

  return (
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
