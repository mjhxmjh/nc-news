import { Link } from "react-router-dom";

export default function ErrorPage({ status }) {
  return (
    <div>
      <h2>Ooops, looks like there's nothing here. Sorry.</h2>
      <h2>
        <Link to="/">
          <u>Go back to home page </u>
        </Link>
      </h2>
    </div>
  );
}

// {history.go(-1)} - goes back one page in the history
