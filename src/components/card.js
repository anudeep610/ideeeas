import "./css/card.css";
import React from "react";
import Button from "./button"; 

export default function Card(props) {
  const imgStr="images/"+props.img;
  return (
    <div class="card">
      <div class="front">
        <div class="card__picture">
          <img src={imgStr} alt="event"></img>
        </div>
        <h4 class="card__heading">
          {/* <span class="card__heading-span">
                    {" "}
                    {props.name}
                  </span> */}
        </h4>
        <div class="card__details">
          <ul>
            <li>{props.h1}</li>
            <li>{props.h2}</li>
            <li>{props.h3}</li>
            <li>{props.h4}</li>
            <li>{props.h5}</li>
          </ul>
        </div>
      </div>
      <div class="back">
        <div class="card__cta">
          <div class="card__price-box">
            <p class="card__price-only">Only</p>
            <p class="card__price-value">Rs. {props.price}</p>
          </div>
          <Button text="Book now" dest/>
        </div>
      </div>
    </div>
  );
}