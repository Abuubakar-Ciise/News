import React from "react";
import img from '../assets/download.jpeg'
const NewsItem = ({title,description,url,date,src})=> {  
     
    return(
        <div class="overflow-hidden bg-white rounded shadow">
                    <div class="p-5">
                        <div class="relative">
                            <a href="#" title="" class="block aspect-w-4 aspect-h-3">
                                <img class="object-cover w-full h-full" src={src?src:img} alt="" />
                            </a>
    
                            
                        </div>
                        <span class="block mt-6 text-sm font-semibold tracking-widest text-gray-500 uppercase">{date}</span>
                        <p class="mt-5 text-2xl font-semibold">
                            <a href="#" title="" class="text-black">{title}</a>
                        </p>
                        <p class="mt-4 text-base text-gray-600">{description}</p>
                        <a href={url} title="" class="inline-flex items-center justify-center pb-0.5 mt-5 text-base font-semibold text-blue-600 transition-all duration-200 border-b-2 border-transparent hover:border-blue-600 focus:border-blue-600">
                            Continue Reading
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
    )
}
export default NewsItem