import React from 'react';
import { useParams } from 'react-router-dom';
import details from "./events.json";
import "./css/event.css";

export default function EventPage(props) {
  const {eventNum}=useParams();
  const eventDetails=details.details[parseInt(eventNum)-1];

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
     
    </section>
    </>
  )
}
