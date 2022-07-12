export default function PostComment({
  handleSubmit,
  setUserName,
  setNewComment,
  username,
  newComment,
}) {
  return (
    <div>
      <form class="comment-form">
        <p>
          Enter your name:{" "}
          <input
            name="username"
            value={username}
            onChange={(event) => handleSubmit(setUserName(event.target.value))}
            required
          ></input>
        </p>
        <p>
          <label>
            Add a comment:
            <textarea
              name="comment"
              value={newComment}
              onChange={(event) =>
                handleSubmit(setNewComment(event.target.value))
              }
              required
            ></textarea>
          </label>
        </p>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit Comment
      </button>
    </div>
  );
}
