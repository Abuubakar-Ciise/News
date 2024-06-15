import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const News = ({ category, selectedLanguage }) => {
  const [articles, setArticles] = useState([]);

  async function getArticles() {
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${selectedLanguage}&category=${category}&apiKey=${process.env.REACT_APP_API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("network response is not ok");
      }
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, [category, selectedLanguage]);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
          {articles.map((news, index) => (
            <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url} date={news.publishedAt} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;
