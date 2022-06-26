import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { StyleSheetConsumer } from "styled-components";
import axios from "./axios.js";
import "./index.css";

export default function Rows(props){
    const IMG_PATH = "https://image.tmdb.org/t/p/original/";
    // const API_KEY = "e654d4f95ed5a35b024a273c30a903c6";
    const [data, setData] = useState([]);
    useEffect(() => {
        // axios.get(`discover/movie?with_genres=${props.genreId}&api_key=${API_KEY}`)
        axios.get(`${props.link}`)
        .then((res) => {
            console.log(res)
            setData(res.data.results)
        })
        .catch((err) => {
            console.log(err);
        })
    },[])

    return(
        <>
        <RowsMaster>
            <GenreHeading id={props.rowId}>{props.genreName}</GenreHeading>
            <RowDiv className = {`rowDiv ${props.trendingDivCSS}`} >
                {data.map((data, idx) =>
                    <Image className={`image ${props.trendingImageCSS}`} src={`${IMG_PATH}${data.poster_path}`} alt={data.title} /> 
                )}
            </RowDiv>
        </RowsMaster>
        </>
    )
}
const RowsMaster = styled.div`
// height : 50vh;
display : flex;
flex-direction : column;
// justify-content : space-evenly;
`
const GenreHeading = styled.h2`
text-align : center;
height : 50px;
display : flex;
justify-content : center;
align-items : center;
`
const RowDiv = styled.div`
display : flex;
align-items : center;
overflow-x : scroll;
overflow-y : visible;
height : 250px;
`
const ImageDiv = styled.div``
const Image = styled.img`
    width: 150px;
    margin-right : 10px;
    transition: all 0.3s linear;
    .image:hover{
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
        overflow-y: visible;
    }
`