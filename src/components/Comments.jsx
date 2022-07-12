export default function Comments({ author, body, created_at, votes }) {
  return (
    <>
      <div>
        <section className="article-card">
          {" "}
          {body}, by {author} on {created_at}, {votes} likes
          <p>
            <button>Delete</button>
          </p>
        </section>
      </div>
    </>
  );
}
