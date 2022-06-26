import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

export default function Header(){
    window.onscroll = () =>{
        const scroll = window.pageYOffset;
        console.log("scrolled", scroll)
        const headerClass = document.querySelector(".header")
        if(scroll > 85){
            headerClass.classList.add("headerColor")
        }
        else{
            headerClass.classList.remove("headerColor")
        }
    }
    return(
        <>
        <HeaderDiv className="header">
            <HeaderSubDiv>
                <Logo src="netflix-large.png"/>
                <Nav>
                    <li><a href="#action">Action</a></li>
                    <li><a href="#animation">Animation</a></li>
                    <li><a href="#crime">Crime</a></li>
                    <li><a href="#drama">Drama</a></li>
                    <li><a href="#fantasy">Fantasy</a></li>
                    <li><a href="#horror">Horror</a></li>
                    <li><a href="#mystery">Mystery</a></li>
                    <li><a href="#science fiction">Science Fiction</a></li>
                    <li><a href="#thriller">Thriller</a></li>
                </Nav>
                <User src="netflix-user-icon.png"/>
            </HeaderSubDiv>
        </HeaderDiv>
        </>
    )
}
const HeaderDiv = styled.div`
position : fixed;
width : 100%;
height : 55px;
// background-color : black;
color : white;
`
const HeaderSubDiv = styled.div`
width : 95%;
height : 100%; 
margin : 0 auto;
display : flex;
justify-content : space-between;
align-items : center;
`
const Logo = styled.img`
width : 120px;
`
const Nav = styled.ul`
display : flex;
list-style-type : none;
li{
    margin : 0 10px;
}
li a{
    text-decoration : none;
    color : white;
    text-shadow : 0 0 10px black;
}
`
const User = styled.img`
width : 35px;
`