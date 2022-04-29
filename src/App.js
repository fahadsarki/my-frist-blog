import React from 'react';
import './App.css';
import HomePage from "./pages/HomePage";
import ArticlesList from "./pages/ArticlesList";
import AboutPage from "./pages/AboutPage";
import ArticlePage from "./pages/ArticlePage";
import { BrowserRouter, Routes, Route,} from 'react-router-dom';
import NavBar from "./NavBar";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar/>
        <div id='page-body'>
          <Routes>
            <Route path="/" element={<HomePage />}/>
            <Route path="/about" element={<AboutPage />}/>
            <Route path="/articles-list" element={<ArticlesList />}/>
            <Route path="/articles-page" element={<ArticlePage />}/>
         </Routes>
        </div>  
      </BrowserRouter>         
    </div>
  );
}

export default App;
