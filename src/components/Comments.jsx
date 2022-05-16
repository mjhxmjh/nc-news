import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
import api from "../api.js";

export default function Comments({
  article_id,
  author,
  body,
  created_at,
  votes,
}) {
  const [comments, setComments] = useState([]);
  // const { articleId } = useParams();

  useEffect(() => {
    api.getComments(article_id).then((comments) => {
      setComments(comments);
      return comments;
    });
  }, [article_id]);

  return (
    <>
      <div>
        <section className="article-card">
          {" "}
          {body}, by {author} on {created_at}, {votes} likes
        </section>
      </div>
    </>
  );
}

//properties on comments

// article_id: 4
// author: "jessjelly"
// body: "Soluta autem fuga non alias. Odit eligendi voluptas reiciendis repudiandae reiciendis doloribus adipisci qui consequuntur. Et dignissimos unde optio. Recusandae aspernatur eius error. Eos autem et iusto sunt fuga ipsam omnis voluptatem rerum."
// comment_id: 146
// created_at: "2018-01-03T22:36:49.051Z"
// votes: 6
