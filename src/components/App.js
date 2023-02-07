import React from "react";
import blogData from "../data/blog";
import Header from "./Header"
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  return (
    <div className="App">
     <Header blogName={blogData.name}/>
     <About blogImage={blogData.image} blogAbout={blogData.about}/>
     <ArticleList postTitle = {blogData.posts}/>
    </div>
  );
}

export default App;
