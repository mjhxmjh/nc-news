import React from 'react'
import {Link} from 'react-router-dom'


export default function Header() {
    return (
      <header className="App-header">

        <Link to='/' className="Nav__Link">
          <h1 id="main-title">Northcoders News</h1>
        </Link>
          
          <h2 id="tagline">“Bringing you best fake news since 2022”</h2>

       <Link to='/user'>
          <h3 className="nav-tags">User Log-in</h3>
        </Link>

      </header>


    );
  }

