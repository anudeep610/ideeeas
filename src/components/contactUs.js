import React from 'react';
import "./css/contactUs.css";
import chat from "../images/contactUs/chat.webp"
import email from "../images/contactUs/email.webp";
import phone from "../images/contactUs/phone.webp"
import instagram from '../images/contact/instagram.webp'
import youtube from '../images/contact/youtube.webp'
import email1 from '../images/contact/email.webp'
import blog from '../images/contact/blog.webp'
export default function contactUs() {
    return(
        <div id="contactUs">
        <center className='skyblue' id="i-head">IDEEEAS 2K22</center>
        <center  className="c-head">CONTACT US</center>

        <div className='flex1'>
        <img alt="chat" src={chat} id="chat"></img>

            <div className='flex2'>
                <div className='flex3'>
                    <div className='contact-card'>
                        <h3 className='name'>Shray Vijay</h3>
                        <h3 className='deets'>Chair-person, IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 87640 97571</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> shrayvijay028@gmail.com</span></h3>
                    </div>
                    <div className='contact-card'>
                        <h3 className='name'>Y Rachana</h3>
                        <h3 className='deets'>Chair-person, WIE IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 89702 24455</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> yrachana03@gmail.com</span></h3>
                    </div>
                </div>
                <div className='flex4'>
                    <div className='contact-card'>
                        <h3 className='name'>Darshan S P</h3>
                        <h3 className='deets'>Vicechair-person, IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 98447 20559</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> darshansp1819@gmail.com</span></h3>
                    </div>
                    <div className='contact-card'>
                        <h3 className='name'>Aishwarya A</h3>
                        <h3 className='deets'>Vicechair-person, WIE IEEE SIT SB</h3>
                        <h3 className='deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 93802 72924</span></h3>
                        <h3 className='deets'><img alt="email" src={email} className="deets-img"></img><span> aishwaryaarun1215@gmail.com</span></h3>
                    </div>
                </div>

            </div>

        </div>
        <center  className="c-head">WebDev Team</center>
        <div className='flex5'>
        <div className='dev-card'>
                        <h3 className='dev-name'>Aishwarya A</h3>
                        <h3 className='dev-deets'>Vicechair-person, WIE IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 93802 72924</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> aishwaryaarun1215@gmail.com</span></h3>
        </div>
        <div className='dev-card'>
                        <h3 className='dev-name'>ANVS Anudeep</h3>
                        <h3 className='dev-deets'>Board Member, IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 63637 64172</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> anvsanudeep@gmail.com</span></h3>
        </div>
        <div className='dev-card'>
                        <h3 className='dev-name'>M Wasim Khan</h3>
                        <h3 className='dev-deets'>Board Member, IEEE SIT SB</h3>
                        <h3 className='dev-deets'><img alt="phone" src={phone} className="deets-img"></img><span> +91 93912 31767</span></h3>
                        <h3 className='dev-deets'><img alt="email" src={email} className="deets-img"></img><span> wkhan5776@gmail.com</span></h3>
        </div>

        </div>
        <center className='c-head'id="contact">Follow Us On</center>
            <div id="contact-icons">
                <a href="https://www.instagram.com/ieeesitsb/" rel="noreferrer" target="_blank"><img alt="insta" src={instagram} className="dev-icons"></img></a>
                <a href="https://www.youtube.com/channel/UCPatXnxDMcEDlFEQKX3q3rg"  style={{"marginTop":"2vh"}} rel="noreferrer" target="_blank"><img alt="youtube" src={youtube} className="dev-icons"></img></a>
                <a href="ieee2021.22@gmail.com"><img alt="email" src={email1} className="dev-icons" data-tip="ieee2021.22@gmail.com" ></img></a>
                <a href="http://ieeesitstudentbranch.blogspot.com/" rel="noreferrer" target="_blank"><img alt="blog" src={blog} className="dev-icons"></img></a>

            </div>

        </div>
    );}