import React from "react";
// import { useParams } from "react-router-dom";
import articleContent from './articleContent';
// import { Link } from "react-router-dom";

const ArticlePage =()=> {
    // const { name } = useParams();
    // const article = articleContent.find(article=> article.name===name);
    // if (!article) return <h1>Article does not exist!</h1>
    return(
        <>

            {articleContent.map(
                (paragraph, key) => (
                   <div>
                       {/* <h1>Article Name: {paragraph.name} </h1> */}
                    <h2>Title: {paragraph.title}</h2>
                    <p>{paragraph.content}</p>
                    </div> 
                ))}
        </>
    
    );
    
}

export default ArticlePage;