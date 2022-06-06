import { useState } from "react";
import { useParams } from "react-router-dom";
// import api from "../api";
// import ArticlePage from "./ArticlePage";

export default function PostComment({
  handleSubmit,
  setNewComment,
  setUserName,
  username,
  newComment,
  hasPosted,
}) {
  // const [newComment, setNewComment] = useState("");
  const { article_id } = useParams();
  // const [username, setUsername] = useState("");

  //  useEffect - renders whatever is in this function once on each mount of the component, unless there is a condition inside the []
  // in which case it will render every time this changes.
  hasPosted = true;
  // I think I had my handlesubmits in the parent, passed down on props

  return (
    <div>
      <form>
        Enter your name:{" "}
        <input
          name="username"
          value={username}
          onChange={(event) => handleSubmit(setUserName(event.target.value))}
          required
        ></input>
        <label>
          Add a comment:
          <textarea
            name="comment"
            value={newComment}
            onChange={(event) =>
              handleSubmit(setNewComment(event.target.value))
            }
            required
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
