import axios from "axios";
import { React, useEffect, useState } from "react";
import "./Home.css";
import { Footer, CategoryBar, NewsContent, NavBar } from "../../components";
import apikey from "../../data/config";

const Home = () => {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();
  const [loadmore, setloadmore] = useState(20);

  const newsApi = async () => {
    try {
      const proxyUrl = "https://cors-anywhere.herokuapp.com/";
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}&pageSize=${loadmore}`
      );
      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  // console.log(newsArray);

  useEffect(() => {
    newsApi();
    // eslint-disable-next-line
  }, [newsResults, category, loadmore]);

  return (
    <div className="App">
      <CategoryBar setCategory={setCategory} />
      <NewsContent
        setloadmore={setloadmore}
        loadmore={loadmore}
        newsArray={newsArray}
        newsResults={newsResults}
      />
    </div>
  );
};

export default Home;
