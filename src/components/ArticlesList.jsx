import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import api from '../api';
import ArticleCard from "./ArticleCard";


export default function ArticlesList () {
  
  const [articles, setArticles] = useState ([]);
  const [isLoading, setIsLoading] = useState(true);
  const { topic_slug } = useParams();

  useEffect(() => { 
      setIsLoading(true);
      api.getArticles(topic_slug).then((articles) => {
        setArticles(articles);
        setIsLoading(false);
    })
  }, [topic_slug]);

  if (isLoading) return <div><p>loading..</p><p className="loading"></p></div>

  return (
        <>
        <section className="sort-by">
          <label for="sort-by">Sort by: </label>
          <select name="sort-by" id="sort-by">
            <option>Date descending</option>
            <option>Date ascending</option>
           </select>
        </section>
        
        <section> 
          {articles.map(({ article_id, title, topic, author, created_at, votes, comment_count }) => {

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
                })}
        </section>
        </>
      );
  }
 
  
   
   
   
   
   
