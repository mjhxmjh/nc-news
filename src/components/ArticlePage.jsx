
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api.js";
import Comments from "./Comments.jsx";
import CommentPoster from "./CommentPoster.jsx";

export default function Article() {
  const [article, setArticle] = useState([]);
  const { article_id } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [comments, setComments] = useState([]);

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
  }, [article_id]);

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
        {comments.map(
          ({ article_id, author, body, comment_id, created_at, votes }) => {
            return (
              <Comments
                key={article_id}
                article_id={article_id}
                comment_id={comment_id}
                body={body}
                author={author}
                created_at={created_at}
                votes={votes}
              />
            );
          }
        )}
      </section>
      <section>
        <CommentPoster articleId={article_id} />
      </section>
    </>
  );
}

