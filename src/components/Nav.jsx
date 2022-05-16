
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../api";

export default function Nav() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.fetchTopics().then((topics) => {
      setTopics(topics);
    });
  }, []);

  return (
    <nav className="nav">
      <p className="nav-link">
        <Link to="/" className="nav-tags">
          All
        </Link>
      </p>

      {topics.map(({ slug }) => {
        return (
          <p className="nav-link" key={slug}>
            {" "}
            <Link to={`/topics/${slug}`}>
              {`${slug}`[0].toUpperCase() + `${slug}`.slice(1)}
            </Link>
          </p>
        );
      })}
    </nav>
  );
