import React from 'react';
import "./css/about.css";


export default function about() {
  return (
    <>
        <h1 className="heading-secondary" style={{marginBottom:"5rem"}}>WHO ARE WE?</h1>
    
    <div className="section-about-box">
        <div className="about-image-box">
            <img src="images/team.jpg" alt="team photo" />
        </div>
        <div className="about-text-box">
            <h1 className="heading-secondary1">Team <span className='yellow'>IEEE  SIT SB</span></h1>
            <p className="about-para">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam, expedita eius eum nobis voluptatum dolorem optio saepe sequi? Mollitia numquam officiis ad unde autem recusandae, quia molestias accusamus molestiae ducimus minus ab nam dicta distinctio, cupiditate quam nihil voluptas dignissimos. Nostrum quod explicabo, enim sint ab doloribus commodi fugit.
            </p>
        </div>
    </div>
     <div className="section-about-box">
     <div className="about-text-box">
         <h1 className="heading-secondary1"> IDEEEAS'<span className='yellow'> Heritage</span></h1>
         <p className="about-para">
             Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae aliquam, expedita eius eum nobis voluptatum dolorem optio saepe sequi? Mollitia numquam officiis ad unde autem recusandae, quia molestias accusamus molestiae ducimus minus ab nam dicta distinctio, cupiditate quam nihil voluptas dignissimos. Nostrum quod explicabo, enim sint ab doloribus commodi fugit.
         </p>
     </div>
     <div className="about-image-box">
         <img src="images/heritage.jpg" alt="team photo" />
     </div>
    
 </div>
 </>
  )
}