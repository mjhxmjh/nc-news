import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api.js";
import Comments from "./Comments.jsx";
import PostComment from "./PostComment.jsx";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);
  const [username, setUsername] = useState("");
  const [newComment, setNewComment] = useState("");
  const [hasPosted, setHasPosted] = useState(false);

  useEffect(() => {
    api.getArticlesById(article_id).then((article) => {
      setArticle(article);
      setIsLoading(false);
      return article;
    });
    api.getComments(article_id).then((comments) => {
      setComments(comments);
      setIsLoading(false);
    });
  }, [article_id, hasPosted]);

  const handleSubmit = (event) => {
    event.preventDefault();
    api.postComment(article_id, username, newComment).then(() => {
      setHasPosted(true);
      setNewComment("");
      setUsername("");
    });
    setNewComment(event.newComment);
    setUsername(event.setUsername);
    setHasPosted(false);
  };

  if (isLoading)
    return (
      <div>
        <p>loading..</p>
        <p className="loading"></p>
      </div>
    );

  return (
    <>
      <article className="article-card">
        <div>
          <h2 className="article-title-on-page">{article.title}</h2>
          <h4>
            <i>
              By{" "}
              {`${article.author}`[0].toUpperCase() +
                `${article.author}`.slice(1)}{" "}
              / {`${article.created_at}`.substring(0, 10)}
            </i>
          </h4>
        </div>
        <dl className="article-detail-list">
          <p>
            <dt>{article.body}</dt>
          </p>
          <dt>{article.votes} people like this article</dt>
          <p>
            <dt>
              <button className="comments-button">
                {article.comment_count} comments
              </button>
            </dt>
          </p>
        </dl>
      </article>

      <section>
        <div className="comment-breaker">- COMMENTS -</div>
        {comments.map(
          ({ article_id, author, body, comment_id, created_at, votes }) => {
            return (
              <Comments
                key={article_id.id}
                article_id={article_id}
                comment_id={comment_id}
                body={body}
                author={author}
                created_at={created_at}
                votes={votes}
                hasPosted={hasPosted}
              />
            );
          }
        )}
      </section>

      <section>
        <PostComment
          handleSubmit={handleSubmit}
          articleId={article_id}
          username={username}
          newComment={newComment}
          setNewComment={setNewComment}
          setUserName={setUsername}
        />
      </section>
    </>
  );
}
