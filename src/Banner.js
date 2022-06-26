import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "./axios.js";
import "./index.css";

export default function Banner(props){
    const IMG_PATH = "https://image.tmdb.org/t/p/original";
    const [bannerData, setBannerData] = useState([]);
    useEffect(() => {
        axios.get(`${props.link}`)
        .then((res) => {
            console.log(res)
            setBannerData(res.data.results[Math.floor(Math.random() * (res.data.results.length))])
        })
        .catch((err) => {
            console.log(err)
        })
    },[])

    return(
        <>
        <BannerMaster>
            <BannerDiv 
            style={{backgroundImage : `url(${IMG_PATH}${bannerData.backdrop_path})`,
            backgroundSize : "cover", backgroundPosition : "center",
            backgroundRepeat : "no-repeat"}} >
                <CTA>
                    <h1>{bannerData.title}</h1>
                    <div className="buttonGroup">
                        <a href="#">Play</a>
                        <a href="#">My List</a>
                    </div>
                    <p>{bannerData.overview}</p>
                </CTA>
            </BannerDiv>
        </BannerMaster>
        </>
    )
}
const BannerMaster = styled.div`
width : 100%;
height : 100vh;
`
const BannerDiv = styled.div`
width : 100%;
height : 100%;
display : flex;
align-items : center;
`
const CTA = styled.div`
width : 95%;
margin : 0 auto;
h1{
    font-size : 4rem;
    color : white;
    width : 60%;
    text-shadow : 0 0 10px black;
}
.buttonGroup{
    margin : 20px 0;
}
.buttonGroup a{
    font-weight : bolder;
    color : white;
    text-decoration : none;
    display : inline-block;
    border : 1px solid white;
    width : 100px;
    text-align : center;
    padding : 5px 0; 
    background-color : rgba(50,50,50,0.7);
    margin : 0px 5px;
}
a:hover{
color : rgb(50,50,50);
background-color : white;
}
p{
    width : 40%;
    color : white;
    font-weight : bolder;
    text-shadow : 0 0 10px black;
}
`