import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import { Article } from "./pages/Article";
import { ArticlesList } from "./pages/ArticlesList";
import { About } from "./pages/About";

function App() {
  return (
    <div className="max-w-screen-md mx-auto pt-20">
      <Routes>
        <Route path="/Article" element={<Article />} />
        <Route path="/ArticleList" element={<ArticlesList />} />
        <Route path="/About" element={<About />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
