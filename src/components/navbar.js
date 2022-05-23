import React from 'react';
import "./css/navbar.css";
import ReactTooltip from 'react-tooltip';

// import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <nav class="nav vertical">
            <ul>
                <li data-tip="Home">
                    <a href="/">
                        <i class="material-icons"  >home</i>
                    </a>
                </li>
                <li data-tip="AboutUs">
                    <a href="#aboutUs">
                        <i class="material-icons" >info</i>
                    </a>
                </li>
                <li data-tip="Schedule">
                    <a href="#schedule">
                        <i class="material-icons" >schedule</i>
                    </a>
                </li>
                <li  data-tip="Events">
                    <a href="#events">
                        <i class="material-icons" >apps</i>
                    </a>
                </li>
                {/* <li>
                    <a href="/">

                        <i class="material-icons" >info</i>
                    </a>
                </li> */}
                        <ReactTooltip type="dark" place="right" />

            </ul>
        </nav>


    )
}
