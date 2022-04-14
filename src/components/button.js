import React from 'react';
import "./css/button.css";

export default function button(props) {
return (
                <a href={props.dest} className="btn btn--white btn--animated">
                        {props.text}
                </a>
        )
}
