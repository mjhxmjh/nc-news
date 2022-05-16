// import Article from "./ArticlePage";
import { Link } from "react-router-dom";
import Voter from "./Voter";

export default function ArticleCard({
  article_id,
  title,
  topic,
  author,
  created_at,
  votes,
  comment_count,
}) {
  return (
    <>
      <article className="article-card">
        <div>
          <Link to={`/articles/${article_id}`}>
            <h3 className="article-title-on-main">{title}</h3>
          </Link>
          <h4 className="article-topic">{topic}</h4>
        </div>

        <dl className="article-detail-list">
          <dt>By {`${author}`[0].toUpperCase() + `${author}`.slice(1)}</dt>
          <dt>{`${created_at}`.substring(0, 10)}</dt>
          <dt>{comment_count} comments</dt>
        </dl>
        <p> </p>
        <p>
          <Voter votes={votes} articleId={article_id} />
        </p>
      </article>
    </>
  );
}
