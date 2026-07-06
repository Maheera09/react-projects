import { useContext, useEffect, useState } from "react";
import Post from "./Post";
import { PostListContext } from "../store/post-list-store";
import WelcomeMsg from "./WelcomeMsg";
import Loading from "./loading";

function PostList() {
  const { postList, addInitialPosts } = useContext(PostListContext);
  const [fetching, setFetching] = useState(false);

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
    <>
      {fetching && <Loading />}
      {!fetching && postList.length === 0 && <WelcomeMsg />}
      {!fetching && postList.map((post) => <Post key={post.id} post={post} />)}
    </>
  );
}

export default PostList;
