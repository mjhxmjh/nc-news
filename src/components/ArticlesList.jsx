import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";
import ArticleCard from "./ArticleCard";
import ErrorPage from "./ErrorPage";

// sort articles - sort by date, by comment count, by votes, (ascending and descending options) - find the object key which we want
// to sort by and create a new array...push the ordered list in to a new array and use if/elses

export default function ArticlesList() {
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    api
      .getArticles(topic_slug)
      .then((articles) => {
        setArticles(articles);
        setIsLoading(false);
      })
      .catch((error) => {
        setError({ error });
        setIsLoading(false);
      });
  }, [topic_slug]);

  if (isLoading)
    return (
      <div>
        <p>loading..</p>
        <p className="loading"></p>
      </div>
    );

  if (error) {
    return <ErrorPage message={error.status} />;
  }
  // use a <Sort /> component in the return here to render wth calls to the database for returning a sorted by list
  return (
    <>
      <section className="sort-by">
        <label for="sort-by">Sort by: </label>
        <select onClick={console.log("change")} name="sort-by" id="sort-by">
          <option>Date descending</option>
          <option>Date ascending</option>
        </select>
      </section>

      <section>
        {articles.map(
          ({
            article_id,
            title,
            topic,
            author,
            created_at,
            votes,
            comment_count,
          }) => {
            return (
              <ArticleCard
                key={article_id}
                article_id={article_id}
                title={title}
                topic={topic}
                author={author}
                created_at={created_at}
                votes={votes}
                comment_count={comment_count}
              />
            );
          }
        )}
      </section>
    </>
  );
}
