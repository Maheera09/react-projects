import { useContext, useRef } from "react";
import { PostListContext } from "../store/post-list-store";

function CreatePost() {
  const useridElement = useRef();
  const posttitleElement = useRef();
  const postbodyElement = useRef();
  const postreactionsElement = useRef();
  const posttagsElement = useRef();

  const { addPost } = useContext(PostListContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const userid = useridElement.current.value;
    const posttitle = posttitleElement.current.value;
    const postbody = postbodyElement.current.value;
    const postreactions = postreactionsElement.current.value;
    const posttags = posttagsElement.current.value.split(" ");

    useridElement.current.value = "";
    posttitleElement.current.value = "";
    postbodyElement.current.value = "";
    postreactionsElement.current.value = "";
    posttagsElement.current.value = "";

    fetch("https://dummyjson.com/posts/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: posttitle,
        body: postbody,
        reactions: postreactions,
        userId: userid,
        tags: posttags,
      }),
    })
      .then((res) => res.json())
      .then((resObj) => addPost(resObj));
  };

  return (
    <>
      <form className="create-post" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            ref={posttitleElement}
            className="form-control"
            id="title"
            aria-describedby="emailHelp"
            placeholder="How are you feeling today?"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="body" className="form-label">
            Content
          </label>
          <textarea
            type="text"
            ref={postbodyElement}
            className="form-control"
            id="body"
            rows="3"
            aria-describedby="emailHelp"
            placeholder="Tell us more about it"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="id" className="form-label">
            Id
          </label>
          <input
            type="text"
            ref={useridElement}
            className="form-control"
            id="id"
            aria-describedby="emailHelp"
            placeholder="Enter your post ID"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="reactions" className="form-label">
            Reactions
          </label>
          <input
            type="number"
            ref={postreactionsElement}
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="Number of people reacted to this post"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="tags" className="form-label">
            Tags
          </label>
          <input
            type="tags"
            ref={posttagsElement}
            className="form-control"
            id="reactions"
            aria-describedby="emailHelp"
            placeholder="Enter your tags with Spaces"
          />
        </div>

        <button type="submit" className="btn btn-primary">
          Post
        </button>
      </form>
    </>
  );
}

export default CreatePost;
