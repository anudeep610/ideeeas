import React from 'react';
import "./css/footer.css";
import instagram from '../images/contact/instagram.webp'
import youtube from '../images/contact/youtube.webp'
import email from '../images/contact/email.webp'
import blog from '../images/contact/blog.webp'


export default function footer() {
    return(
        <>
            <center className='heading-primary--sub skyblue'id="contact">FOLLOW US ON</center>
            <div id="contact-icons">
                <a rel="noreferrer" href="https://www.instagram.com/ieeesitsb/" target="_blank"><img alt="insta" src={instagram} className="con-icons"></img></a>
                <a rel="noreferrer" href="https://www.youtube.com/channel/UCPatXnxDMcEDlFEQKX3q3rg" style={{"marginTop":"2vh"}} target="_blank"><img alt="youtube" src={youtube} className="con-icons"></img></a>
                <img alt="email" src={email} className="con-icons" data-tip="ieee2021.22@gmail.com"></img>
                <a rel="noreferrer" href="http://ieeesitstudentbranch.blogspot.com/" target="_blank"><img alt="blog" src={blog} className="con-icons"></img></a>

            </div>
            <center className='p' style={{"color":"#b7b4b4","marginTop":"2vh"}}>All rights reserved &#169; IdEEEas, IEEE SIT SB</center>

            </>
    );
}