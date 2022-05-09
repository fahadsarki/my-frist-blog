import React from "react";
import { useParams } from "react-router-dom";
import articleContent from './articleContent';

const ArticlePage =()=> {
    const { name } = useParams();
    const article = articleContent.find(article=> article.name===name);
    if (!article) return <h1>Article does not exist!</h1>
    return(
        <>
        <div>           
           <h3> {article.title} </h3>
           <p> {article.content} </p> 
        </div>
        </>
    );
    
}

export default ArticlePage;