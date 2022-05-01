import "./css/card.css";
import React from "react";
import Button from "./button"; 

export default function Card(props) {
  const id= String(props.name);
  const id1=String(props.id1);
  const intro = String(props.intro);
  const id_back =String(props.name)+"-back";
  console.log(id_back)
  return (
    <div className="card" id={id1}>
      <div className="front" id={id}>
        <h4 className="card__heading">
          {/* <span class="card__heading-span">
                    {" "}
                    {props.name}
                  </span> */}
        </h4>
        <div className="card__details">
          {/* <ul>
            <li key="1">{props.h1}</li>
          </ul> */}
        </div>
      </div>
      <div className="back" id={id_back}>
        <div className="card__cta">
          <div className="card_desc">{intro}</div>
          <Button text="Register Now" dest={props.name} num={props.id} className="bookNow"/>
        </div>
      </div>
    </div>
  );
}