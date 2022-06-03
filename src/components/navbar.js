import React from 'react';
import "./css/navbar.css";
import ReactTooltip from 'react-tooltip';

import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <nav className="nav vertical">
            <ul>
                <li data-tip="Home">
                    <a href="/">
                        <i className="material-icons"  >home</i>
                    </a>
                </li>
                <li data-tip="AboutUs">
                    <a href="#aboutUs">
                        <i className="material-icons" >info</i>
                    </a>
                </li>

                <li  data-tip="Events">
                    <a href="#events">
                        <i className="material-icons" >apps</i>
                    </a>
                </li>
                <li data-tip="Schedule">
                    <a href="#schedule">
                        <i className="material-icons" >schedule</i>
                    </a>
                </li>
                <li data-tip="Contact Us">
                    <Link to="/contact">
                        <i className="material-icons" >contact_support</i>
                    </Link>
                </li>
                {/* <li>
                    <a href="/">

                        <i className="material-icons" >info</i>
                    </a>
                </li> */}
                        <ReactTooltip type="dark" place="right" />

            </ul>
        </nav>


    )
}
