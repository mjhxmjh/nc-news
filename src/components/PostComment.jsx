export default function PostComment({
  handleSubmit,
  setUserName,
  setNewComment,
  username,
  newComment,
}) {
  return (
    <div>
      <form class="comment-form">
        <p>
          Enter your name:{" "}
          <input
            name="username"
            value={username}
            onChange={(event) => handleSubmit(setUserName(event.target.value))}
            required
          ></input>
        </p>
        <p>
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
        </p>
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

// the comment component should render with updated state when a new comment is posted - still not done

//  useEffect - renders whatever is in this function once on each mount of the component, unless there is a condition inside the []
// in which case it will render every time this changes.
