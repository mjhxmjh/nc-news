// import Article from "./ArticlePage";
import { Link } from "react-router-dom";
import Voter from "./Voter";

export default function ArticleCard({ article_id, title, topic, author, body, created_at, votes, comment_count }) {

    return (
      <article className="article-card">

        <div>
          <Link to={`/articles/${article_id}`}>
          <h3 className="article-title">{title}</h3>
          </Link>
          <h2 className="article-topic">{topic}</h2>
        </div>

        <dl className="article-detail-list">
          <dt>By: {author}</dt>
          <dt>{body}</dt>
          <dt>Date: {created_at}</dt>
          <dt>Votes: {votes}</dt>
          <dt>{comment_count} comments</dt>
        </dl>
        <p><Voter /></p>
      </article>
    );
  }

  
  
  
  