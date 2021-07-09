import { Container } from "@material-ui/core";
import React from "react";
import "./NewsContent.css"
const NewsContent = () => {
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
      </div>
    </Container>
  );
};

export default NewsContent;
