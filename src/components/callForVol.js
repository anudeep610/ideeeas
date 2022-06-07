import React from 'react';
// import Button from './button';
import "./css/callForVol.css";
import "./css/home.css"
import cfv from "../images/cfv.webp"
export default function callforVol() {
    return(
        <div id="section-cfv" data-aos="fade-up">

        <section className='cfv'>
            <div>
                <img alt="cfv" src={cfv} id="cfv-img"></img>
            </div>
            <div>
                <h1 id="c-head">Call for Volunteers</h1>
                <p id="c-content">
                IdEEEas-2k22, the flagship event of IEEE SIT-SB, is looking for volunteers.

"Volunteerism is the voice of the people put into action.  These actions shape and mold the present into a future of which we can all be proud.” – Helen Dyer

A great opportunity to be an active volunteer of National level technical symposium. It is an excellent place to study, compete, and enhance network. This is a platform to polish your abilities. 

Come out from the usual crowd and explore the new change.

How can you participate? 
Sign up to volunteer with IEEE SIT SB's IdEEEas 2k22 and donate time in managing our event and networking. Please advise your friends of your wish to volunteer also. You can mentor in­person or
online.

Be a part of a great venture!.
                </p>
                <br></br>
                <div className='cfv-buttons'>
                <a href=" https://bit.ly/IdEEEas_Call_For_Volunteers" className="btn btn--white btn--animated">Register Now</a>
                <a href=" https://bit.ly/IdEEEas_Call_For_Volunteers" className="btn btn--white btn--animated">Download Brochure</a>
                </div>
               
            </div>
        </section>
            


        </div>
    );}