import React from "react";
import articleContent from './articleContent';
import { Link } from "react-router-dom";
const ArticlesList =()=> {
    return(
        <>
                <h1>Articles</h1>
                {articleContent.map((article, key)=>(
                   <Link key={key} to={`./${article.name}`}>
                   <h3>{article.title}</h3>
                   </Link> 
                ))}
        </>
    
    );
    
}

export default ArticlesList;

//if article.name === true then <Link> {article.content} </Link>
//  {articleContent.map((article, key1) => ( 
//      <Link key={key1} to={`./${article.name}`}> 
//      <h3>{article.title}</h3> </Link> ? <p key={key1}>{article.content}</p> : "Not found" ))}