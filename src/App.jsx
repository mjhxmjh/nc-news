import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';
import Article from './components/ArticlePage';

function App () {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<ArticlesList />}/>
        <Route path='/topics/:topic_slug' element={<ArticlesList />} />
        <Route path='/articles/:article_id' element={<Article/>} />
      </Routes>
    </div> );
}

export default App;
