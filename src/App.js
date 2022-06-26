import React,{ useEffect } from "react";
import Header from "./Header";
import Rows from "./Rows";
import Banner from "./Banner";

export default function App(){
    const genres = [
        {
          "id": 28,
          "name": "Action"
        },
        {
          "id": 12,
          "name": "Adventure"
        },
        {
          "id": 16,
          "name": "Animation"
        },
        {
          "id": 35,
          "name": "Comedy"
        },
        {
          "id": 80,
          "name": "Crime"
        },
        {
          "id": 99,
          "name": "Documentary"
        },
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 10751,
          "name": "Family"
        },
        {
          "id": 14,
          "name": "Fantasy"
        },
        {
          "id": 36,
          "name": "History"
        },
        {
          "id": 27,
          "name": "Horror"
        },
        {
          "id": 10402,
          "name": "Music"
        },
        {
          "id": 9648,
          "name": "Mystery"
        },
        {
          "id": 10749,
          "name": "Romance"
        },
        {
          "id": 878,
          "name": "Science Fiction"
        },
        {
          "id": 10770,
          "name": "TV Movie"
        },
        {
          "id": 53,
          "name": "Thriller"
        },
        {
          "id": 10752,
          "name": "War"
        },
        {
          "id": 37,
          "name": "Western"
        }
      ]
      const API_KEY = "e654d4f95ed5a35b024a273c30a903c6";
    return(
        <>
        <Header />
        
        <Banner link={`trending/all/week?api_key=${API_KEY}`}/>
        
        <Rows trendingDivCSS="trendingDiv" trendingImageCSS="trendingImage" link={`trending/all/week?api_key=${API_KEY}`} genreName="TRENDING"/>
        
        {genres.map((data, idx) =>
        <Rows key={idx} rowId={data.name.toLowerCase()} link={`discover/movie?with_genres=${data.id}&api_key=${API_KEY}`}
        genreName={data.name.toUpperCase()} />
        )}
        </>  
    )
}