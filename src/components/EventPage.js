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
      <div className="video">
        <video src={"/videos/"+eventDetails.vid} autoPlay loop muted></video>
      </div>
      <h1 className="heading-secondary">{eventDetails.name}</h1>
      <p>
        {eventDetails.desc}
      </p>
      <h2 className="heading-tertiary">Rules</h2>
      <ul>
        {
          eventDetails.rules.map((rule)=>{
            return <li>{rule}</li>
          })
        }
      </ul>
      <div className="buttons">
        <a href={"/documents/"+eventDetails.doc} rel="noreferrer" target="_blank" className="btn btn--white btn-animated">Download Brochrure</a>
        <a href="/" className="btn btn--white btn-animated">Register</a>
      </div>
      <div className="contact">
          <div className="coordinators">
            <h3>Student Coordinators</h3>
            <ul>
              <li>lorem : 3284982304</li>
              <li>lorem : 3284982304</li>
              <li>lorem : 3284982304</li>
            </ul>
          </div>
        </div>
    </section>
    </>
  )
}
