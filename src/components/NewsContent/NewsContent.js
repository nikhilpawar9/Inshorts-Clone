import { Container } from "@material-ui/core";
import React, { Fragment } from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css"
const NewsContent = ({newsArray, newsResults, loadmore, setloadmore}) => {
  return (
    <Container maxWidth='md'>
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
          For the best experience use inshorts app on your smartphone
          </span>
          <img
            src="https://assets.inshorts.com/website_assets/images/appstore.png"
            alt="app store"
            height="80%"
          />
          <img
            src="https://assets.inshorts.com/website_assets/images/playstore.png"
            alt="app store"
            height="80%"
          />
        </div>

        
        {
          newsArray.map((newsItem)=>(
            <NewsCard newsItem={newsItem} key={newsItem.title} />
          ))
        }
       

        {loadmore<=newsResults && (
          <>
           <hr />
           <button className="loadMore" onClick={() => setloadmore(loadmore+20)}> 
           Load  More
         </button>
         </>
 
        )}
       
      </div>
    </Container>
  );
};

export default NewsContent;
