import React from 'react';
import "./css/timeline.css";
export default function timeline() {
  return (
    <div className="container" >
  <div className="Timeline" data-aos="fade-up">
    <ul>
      <li id="trademark-border" >
        <div className="Timeline-content" >
          <h1>02-06-2022</h1>
          <h3 className='cnario-date'>IdEEEas 2k22 Curtain Raiser</h3>
          <p>The Registration Starts. The Individual or the team can register themselves to one or more events <a href='#events'>here</a>.</p>
        </div>
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>19-06-2022</h1>
          <h3 className='cnario-date'>Last Day for Abstract Submissions</h3>
          <p>The abstract submission for the events Presentario, Aavishkar, Trademark and Ideathon will be closed after the above date. ON-SPOT REGISTRATION for other events is available. </p>
        </div>
       
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>21-06-2022</h1>
          <h3 className='cnario-date'>Announcement of Selected Teams</h3>
          <p>Announcement of the shortlisted teams after scrutinizing their abstracts.</p>
        </div>
      </li>
      <li id="trademark-border">
        <div className="Timeline-content">
          <h1>23-06-2022</h1>
          <h3 className='cnario-date'>IdEEEas 2k22 is here!</h3>
          <p>The most awaited IDEEEAS 2k22 is here. Hope you have a wonderful learning, Best wishes from Team IEEE SIT SB.</p>
        </div>
      </li>
  

    </ul>
  </div>
</div>
  )
}
