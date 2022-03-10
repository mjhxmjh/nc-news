import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import * as api from '../api.js'


export default function Article() {

   const [article, setArticle] = useState([])
   const { article_id } = useParams();

   useEffect(() => { 
    api.getArticlesById(article_id).then((article) => {
      setArticle(article);
      return article;
     })
   }, [article_id]);

   return ( <article className="article-card">

            <div>
            <h2 className="article-title">{article.title}</h2>
            <h4><i>By {article.author}</i></h4>
            </div>
   
            <dl className="article-detail-list">
            <p>
            <dt>{article.body}</dt>
            </p>

            <dt>Date: {article.created_at}</dt>
            <dt>Votes: {article.votes}</dt>
            <p>
            <dt><button className="comments-button">{article.comment_count} comments</button></dt>
            </p>
            </dl>
           
            </article>)
}

