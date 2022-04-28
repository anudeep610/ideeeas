import React from "react";
import { Link } from "react-router-dom";
import "./css/button.css";

export default function button(props) {
        if(props.dest==="#events")
                return <a href={props.dest} className="btn btn--white btn--animated">{props.text}</a>
        else
                return <Link to={"/"+props.num} target="_blank" className="btn btn--white btn--animated bookNow">{props.text}</Link>
}
