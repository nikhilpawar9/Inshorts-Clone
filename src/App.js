import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Footer from "./components/Footer/Footer";
import NavInshorts from "./components/NavInshorts";
import NewsContent from "./components/NewsContent/NewsContent";
import apikey from "./data/config";

function App() {
  const [category, setCategory] = useState("general");
  const [newsArray, setnewsArray] = useState([]);
  const [newsResults, setnewsResults] = useState();

  const newsApi = async () => {
    try {
      const news = await axios.get(
        `https://newsapi.org/v2/top-headlines?country=in&apiKey=${apikey}&category=${category}`
      );
      setnewsArray(news.data.articles);
      setnewsResults(news.data.totalResults);
    } catch (error) {
      console.log(error);
    }
  };

  console.log(newsArray);

  useEffect(() => {
    newsApi();
  }, [newsResults, category]);

  return (
    <div className="App">
      <NavInshorts setCategory={setCategory} />
      <NewsContent newsArray={newsArray} newsResults={newsResults} />
      <Footer />
    </div>
  );
}

export default App;
