import React from 'react';
import "./css/timeline.css";

export default function timeline() {
  return (
    <div class="container">
  <div class="Timeline" >
    <ul>
      <li id="cnario-border">
        <div class="Timeline-content" >
          <h1>12-05-2022</h1>
          <h3 className='cnario-date'>Registration Starts for IdEEEas 2k22</h3>
          <p>The Individual or the team can register themselves to one or more events <a href='#events'>here</a>.</p>
        </div>
        {/* <div className='cnario-date'>
          12-05-2022
        </div> */}
      </li>
      <li id="ideathon-border">
        <div class="Timeline-content">
          <h1>12-05-2022</h1>
          <h3 className='ideathon-date'>Last Day for Abstract Submissions</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora ab la.</p>
        </div>
       
      </li>
      <li id="trademark-border">
        <div class="Timeline-content">
          <h1>15-04-2022</h1>
          <h3 className='trademark-date'>Announcement of Selected Teams</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur tempora a.</p>
        </div>
      </li>
      <li id="webify-border">
        <div class="Timeline-content">
          <h1>23-06-2022</h1>
          <h3 className='webify-date'>IdEEEas 2k22 is here!</h3>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.e.</p>
        </div>
       
      </li>
    </ul>
  </div>
</div>
  )
}
