import React from 'react';
import Button from './button';
import "./css/callForVol.css";
import "./css/home.css"
import cfv from "../images/cfv.webp"
export default function callforVol() {
    return(
        <div id="section-cfv">

        <section className='cfv'>
            <div>
                <img alt="cfv" src={cfv} id="cfv-img"></img>
            </div>
            <div>
                <h1 id="c-head">Call for Volunteers</h1>
                <p>
                IdEEEas-2k22, the flagship event of IEEE SIT-SB, is looking for volunteers.
"Volunteerism is the voice of the people put into action.  These actions shape and mold the present into a future of which we can all be proud.” – Helen Dyer
It is an excellent place to study, compete, and enhance network. This is an opportunity to polish your abilities.
                </p>
                <br></br>
                <div className='cfv-buttons'>
                <Button dest=" https://bit.ly/IdEEEas_Call_For_Volunteers" text="Register Here" className="bookNow"></Button>
                <Button dest=" https://bit.ly/IdEEEas_Call_For_Volunteers" text="Download Brochure" className="bookNow"></Button>
            
                </div>
               
            </div>
        </section>
            


        </div>
    );}