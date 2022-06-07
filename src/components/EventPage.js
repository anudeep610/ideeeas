import React from 'react';
import { useParams } from 'react-router-dom';
import details from "./events.json";
import "./css/event.css";
import Slider from "react-slick";
import essenceBanner from "../images/sponsors/essence_banner.webp";

export default function EventPage(props) {
  const {eventNum}=useParams();
  const eventDetails=details.details[parseInt(eventNum)-1];
  var settings = {
    arrows:false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed:1000
  };

  const bannerRender=(id)=>{
    if(id===10){
      console.log("hii")
      return <img src={essenceBanner} alt="banner" className='banner'/>
    }
  }
  return (
    <>
    <section className="event">
      <div >
      <img alt="poster" className="poster" src={"/images/eventPosters/"+eventDetails.img}></img>
      </div>
      <h1 className="heading-secondary">{eventDetails.name}</h1>
      <p>
        {eventDetails.desc}
      </p>
      <ul>
      
        <li><span><img alt="size" src="/images/teamSize.webp" className='iconImage'></img></span>{eventDetails['team-size']}.</li>
        <li><span><img alt="list" src="/images/task-list.webp" className='iconImage'></img></span>{eventDetails.eligibility}</li>
        <li><span><img alt="money" src="/images/money.webp" className='iconImage'></img></span>Entry Fee: <span>{eventDetails.price}</span></li>
      </ul>
      <br/>
      <h4 > Kindly download the EVENT-BROCHURE to know more about the rounds and the rules of this event.</h4>
      <i className='yellow'>20% off for IEEE Membership holders (Please note that you need to enter your membership id during the yepdesk registration and that the offer amount will be refunded after the event.)</i>
      {/* <h2 className="heading-secondary">Rules</h2>
      <ul>
        {
          eventDetails.rules.map((rule)=>{
            return <li>{rule}</li>
          })
        }
      </ul> */}
      <div className="contact">
          <div className="coordinators"><br/>
            <h2 style={{"textAlign":"center"}}>Student Coordinators</h2>
            <ul>
            {
          eventDetails.contacts.map((c)=>{
            return <li>{c}</li>
          })
        }
            </ul>
          </div>
        </div>
      <div className="buttons">
        <a href={"/documents/"+eventDetails.doc} rel="noreferrer" target="_blank" className="btn btn--white btn-animated">Download Brochure</a>
        <a href={eventDetails.yepdesk} className="btn btn--white btn-animated">Register</a>
      </div>
      <div className="perBanner">
        {bannerRender(parseInt(eventNum))}
      </div>
      {/* <div className="other-events">
        <h1>OUR OTHER EVENTS</h1>
        <Slider {...settings}>
          <div><img className="banner" alt="sponser" src={essenceBanner}/></div>
          <div><img className="banner" alt="sponser" src={essenceBanner}/></div>
        </Slider>
      </div> */}
    </section>
    </>
  )
}
