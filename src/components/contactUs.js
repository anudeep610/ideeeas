import React from 'react';
import "./css/contactUs.css";
import chat from "../images/chat.png"
import ieee from "../images/IEEE.webp";
import ieeeBlr from "../images/bang.webp";
import wie from "../images/WIE.webp";
import sit from "../images/sit.webp";
import emb from "../images/emb.webp";
import photonics from "../images/photonics.webp";
import spax from "../images/sponsors/SPAX.webp";
export default function contactUs() {
    return(
        <>
        <header className="header1" style={{"margin":"2vh"}}>
            <div className="header__logo-box">
                <img className="header__logo" src={sit} alt="logo"></img>
                <img className="header__logo" src={ieeeBlr} alt="logo"></img>
                <img className="header__logo" src={photonics} alt="logo"></img>
                <img className="header__logo" src={emb} alt="logo"></img>
                <img className="header__logo" src={wie} alt="logo"></img>
                <img className="header__logo" src={spax} alt="logo"></img>
                <img className="header__logo" src={ieee} alt="logo"></img>
            </div>
        </header>
        <center className='skyblue' id="i-head" style={{"marginTop":"20vh","marginBottom":"4vh"}}>IDEEEAS 2K22</center>
        <center  id="c-head">CONTACT US</center>

        <div className='flex1'>
        <img alt="chat" src={chat}></img>

            <div className='flex2'>
                <div className='flex3'>
                    <div className='contact-card'>
                        <h1></h1>
                    </div>
                    <div className='contact-card'></div>
                </div>
                <div className='flex4'>
                    <div className='contact-card'></div>
                    <div className='contact-card'></div>
                </div>
            </div>
        </div>
        </>
    );}