import React from 'react';
import "./css/sponsers.css";

export default function sponsers() {
  return (
    <div className="sponsers-box">
        <h2 className="hr heading-tertiary">Our sponsers</h2>
        <div className="sponsers-img">
            <img className="sponser__logo" src="images/sit.png" alt="sponser 1" />
            <img className="sponser__logo" src="images/sit.png" alt="sponser 2" />
            <img className="sponser__logo" src="images/sit.png" alt="sponser 3" />
            <img className="sponser__logo" src="images/sit.png" alt="sponser 4" />
        </div>
    </div>
  )
}
