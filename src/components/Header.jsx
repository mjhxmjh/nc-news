import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="App-header">
      <Link to="/" className="Nav__Link">
        <h1 id="main-title">Mattcoders News</h1>
      </Link>

      <Link to="/user">
        <h3 className="nav-tags">User Log-in</h3>
      </Link>
    </header>
  );
}
