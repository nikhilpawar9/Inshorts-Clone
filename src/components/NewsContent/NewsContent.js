import { Container } from "@material-ui/core";
import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./NewsContent.css"
const NewsContent = ({newsArray, newsResults}) => {
  return (
    <Container maxWidth="md">
      <div className="content">
        <div className="downloadMessage">
          <span className="downloadText">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus!
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


      </div>
    </Container>
  );
};

export default NewsContent;
