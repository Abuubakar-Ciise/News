import React, { useEffect, useState } from "react";
import NewsItem from "../components/NewsItem";
import Loading from "./Loading";
import Error from "./Error"; // Corrected import statement for Error component

const News = ({ category, selectedLanguage }) => {
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null); 

  async function getArticles() {
    setLoading(true); 
    setError(null);   
    try {
      let url = `https://newsapi.org/v2/top-headlines?country=${selectedLanguage}&category=${category}&apiKey=${import.meta.env.VITE_API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) {
        throw new Error("Network response is not ok");
      }
      const data = await res.json();
      setArticles(data.articles);
    } catch (error) {
      console.error(error);
      setError(error.message); // Set error message
    } finally {
      setLoading(false); // Set loading to false after data is fetched or an error occurs
    }
  }

  useEffect(() => {
    getArticles();
  }, [category, selectedLanguage]);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        {/* Show Loading component when loading is true */}
        {loading ? (
          <Loading />
        ) : error ? (
          <Error message={error} /> // Show Error component if there's an error
        ) : (
          <div className="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
            {articles.map((news, index) => (
              <NewsItem
                key={index}
                title={news.title}
                description={news.description}
                src={news.urlToImage}
                url={news.url}
                date={news.publishedAt}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default News;
