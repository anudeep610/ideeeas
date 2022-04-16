import "./css/card.css";
import React from "react";
import Button from "./button"; 

export default function Card(props) {
  const imgStr="images/"+props.img;
  return (
    <div className="card">
      <div className="front">
        <div className="card__picture">
          <img src={imgStr} alt="event"></img>
        </div>
        <h4 className="card__heading">
          {/* <span class="card__heading-span">
                    {" "}
                    {props.name}
                  </span> */}
        </h4>
        <div className="card__details">
          <ul>
            <li key="1">{props.h1}</li>
            <li key="2">{props.h2}</li>
            <li key="3">{props.h3}</li>
            <li key="4">{props.h4}</li>
            <li key="5">{props.h5}</li>
          </ul>
        </div>
      </div>
      <div className="back">
        <div className="card__cta">
          <div className="card__price-box">
            <p className="card__price-only">Only</p>
            <p className="card__price-value">Rs. {props.price}</p>
          </div>
          <Button text="Book now" dest={props.name}/>
        </div>
      </div>
    </div>
  );
}