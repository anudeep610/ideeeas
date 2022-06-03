import React from 'react';
import "./css/about.css";


export default function about() {
  return (
    <div data-aos="fade-up">
        <h1 className="heading-secondary" style={{marginTop:"10rem"}}>WHO ARE WE?</h1>
    
    <div className="section-about-box"  >
        <div className="about-image-box">
            <img src="images/team.webp" alt="team pic" />
        </div>
        <div className="about-text-box">
            <h1 className="heading-secondary1">Team <span className='yellow'>IEEE  SIT SB</span></h1>
            <p className="about-para">
                IEEE SIT SB was established in the year 2002 under the leadership of Professor Basavarajaiah and is now mentored by Dr K V Suresh, Professor Dept of ECE and Dr N R Sunitha, Professor Dept of CSE.
Our current branch councelors are Dr K Vishwanath, Professor Dept of ETE and Veena Karjagi, Associate Professor Dept of ECE.
IEEE SIT Student Branch has won a lot of laurels to college at state and national level.
This is the only student branch from Banglore section to get published in IEEE India council newsletter , 2019. With organising various events, technical workshops and technical colloquiums , IEEE WIE is encouraging the women community to learn and involve in the recent technologies.<br/>
           </p>
        </div>
    </div>
     <div className="section-about-box" >
     <div className="about-text-box">
         <h1 className="heading-secondary1"> IDEEEAS'<span className='yellow'> Heritage</span></h1>
         <p className="about-para">
             IdEEEas is the flagship event of IEEE SIT SB. IdEEEas was first conducted in the year 2009. It is a national level technical  symposium – An arena for students and professional to flaunt their technical skills, share knowledge and network with people with different domain.
             We had a great record of 1011 participants in IdEEEas 2k19 and of 958 in IdEEEas 2k21. You can refer to the events-sections below to know more about IdEEEas 2k22.

         </p>
     </div>
     <div className="about-image-box" style={{margin:"3rem"}}>
         <img src="images/heritage.webp" alt="team pic" />
     </div>
    
 </div>
 <br></br><br></br>
 </div>
  )
}
