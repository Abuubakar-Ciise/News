import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";


const News = ({ category, selectedLanguage })=>{
    
    const [articles,setArticles]=useState([])

    async function getArticles() {
        try {
            let url = `https://newsapi.org/v2/top-headlines?country=${selectedLanguage}&category=${category}&apiKey=009b899d1044432382df437cbe483de9`
            const res = await fetch(url)
            if(!res.ok){
                throw new Error('newtork res is not ok')
            }
            const data = await res.json()
            setArticles(data.articles)
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=> {
        getArticles();
    },[category,selectedLanguage])

    return(
        <section class="py-10 bg-gray-50 sm:py-16 lg:py-24">
        <div class="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
            
           
            <div class="grid max-w-md grid-cols-1 gap-6 mx-auto mt-8 lg:mt-16 lg:grid-cols-3 lg:max-w-full">
                {articles.map((news,index) => (
                    <NewsItem key={index}  title={news.title} description={news.description} src={news.urlToImage}  url={news.url} date={news.publishedAt}/>
                ))}
               
               
            </div>
    
            {/* <div class="flex items-center justify-center mt-8 space-x-3 lg:hidden">
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
                    </svg>
                </button>
    
                <button type="button" class="flex items-center justify-center text-gray-400 transition-all duration-200 bg-transparent border border-gray-300 rounded w-9 h-9 hover:bg-blue-600 hover:text-white focus:bg-blue-600 focus:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                    </svg>
                </button>
            </div> */}
        </div>
    </section>
    
    )
}
export default News
