export default function ArticleCard({ article_id, title, topic, author, body, created_at, votes, comment_count }) {

    return (
      <article className="article-card">
        <h3 className="article-title">{title}</h3>
         <dl className="article-detail-list">
          <dt>By: {author}</dt>
          <dt>{body}</dt>
          <dt>Date: {created_at}</dt>
          <dt>Votes: {votes}</dt>
          <dt>{comment_count} comments</dt>
          <dt>{topic}</dt>
        </dl>
      </article>
    );
  }
  
  
  