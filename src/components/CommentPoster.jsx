import { useState } from "react";
import { useParams } from "react-router-dom";
import api from "../api";

export default function CommentPoster() {
  const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();

  //  useEffect - renders whatever is in this function once on each mount of the component, unless there is a condition inside the []
  // in which case it will render every time this changes.

  const handleSubmit = (event) => {
    event.preventDefault();
    // allComments = [...comments, newComment];
    // setComments(allComments);
    console.log("click button", article_id);
    api.postComment(article_id, "", newComment).then(() => {});
    setNewComment("");
  };

  return (
    <div>
      <form>
        Enter your name: <input></input>
        <label>
          Add a comment:
          <textarea
            id="comment-box"
            value={newComment}
            onChange={(event) => setNewComment(event.target.value)}
          ></textarea>
        </label>
      </form>
      <button type="submit" onClick={handleSubmit}>
        Submit Comment
      </button>
    </div>
  );
}

// tweak this for the comment posting function (from NC notes)
// const ItemAdder = ({ setList }) => {
//   const [newItem, setNewItem] = useState('');

//   const handleSubmit = (event) => {
//     // prevent the forms default behaviour
//     event.preventDefault();
//     // add the newItem to our list in App
//     setList((currList) => {
//       return [newItem, ...currList];
//     });
//     // reset the input to be empty
//     setNewItem('');
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <label>
//         Add a new item:
//         <input
//           value={newItem}
//           onChange={(event) => setNewItem(event.target.value)}
//         />
//       </label>
//       <button type="submit">Add item</button>
//     </form>
//   );
// };

// the comment component should render with updated state when a new comment is posted
