export default function Comments({
  article_id,
  author,
  body,
  created_at,
  votes,
  hasPosted,
}) {
  // const [comments, setComments] = useState([]);

  // const { articleId } = useParams();

  // useEffect(() => {
  //   api.getComments(article_id).then((comments) => {
  //     setComments(comments);
  //     return comments;
  //   });
  // }, [article_id, comments, hasPosted]); //has Posted - passed thru on props <<

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
