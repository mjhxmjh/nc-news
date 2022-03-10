import React, { useState, useEffect } from 'react'
import {Link} from 'react-router-dom'
import * as api from '../api'


export default function Nav () {
    const [topics, setTopics] = useState([]);

    useEffect(() => {
        api.fetchTopics().then((topics) => {
            setTopics(topics)
        });
    }, []);

     return (

      <nav className="nav">
        <ul>
          <li>
            <Link to='/' className="nav-tags">All</Link>
          </li>
             {topics.map(({slug}) => {
                return <li key={slug}> <Link to={`/topics/${slug}`}>{slug}</Link></li>
            })}
        </ul>
      </nav>
    );
}
