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
          <img className='nav-icon' title='Users' src="https://media.istockphoto.com/vectors/user-profile-icon-vector-avatar-portrait-symbol-flat-shape-person-vector-id1270368615?k=20&m=1270368615&s=170667a&w=0&h=qpvA8Z6L164ZcKfIyOl-E8fKnfmRZ09Tks7WEoiLawA=" alt="profile icon" />
          <h3 className="nav-tags">User</h3>
        </Link>

      </header>


    );
  }

