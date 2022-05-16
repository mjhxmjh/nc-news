
import React, { useState } from "react";
import api from "../api.js";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default function Voter({ votes, articleId }) {
  const [voteChange, setVoteChange] = useState(0);

  const handleChange = () => {
    setVoteChange((currentVote) => {
      return currentVote + 1;
    });
    api.patchArticle(articleId, 1);
  };

  return (
    <div className="voter">
      <dl>
        <dt>{votes + voteChange} people like this article</dt>
        <dt>
          <button onClick={handleChange} className="like-button">
            {" "}
            Like 👍{" "}
          </button>
        </dt>
      </dl>
    </div>
  );
}

