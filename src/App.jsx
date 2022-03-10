import './App.css';
import Header from './components/Header';
import Nav from './components/Nav';
import { Route, Routes } from 'react-router-dom';
import ArticlesList from './components/ArticlesList';

function App () {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path='/' element={<ArticlesList />}/>
        <Route path='/articles/:topic_slug' element={<ArticlesList />} />
      </Routes>
    </div> );
}

export default App;

