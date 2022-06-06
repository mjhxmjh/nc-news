import "./App.css";
import Header from "./components/Header";
import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import ArticlesList from "./components/ArticlesList";
import Article from "./components/Article";
import ErrorPage from "./components/ErrorPage";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <Routes>
        <Route path="/" element={<ArticlesList />} />
        <Route path="/topics/:topic_slug" element={<ArticlesList />} />
        <Route path="/articles/:article_id" element={<Article />} />
        <Route path="/articles/:article_id/comments" element={<Comments />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </div>
  );
}

export default App;
