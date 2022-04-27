import React from 'react';
import "./css/navbar.css";
// import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <nav class="nav vertical">
            <ul>
                <li>
                    <a href="/">
                        <i class="material-icons" >home</i>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i class="material-icons">person</i>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i class="material-icons">search</i>
                    </a>
                </li>
                <li>
                    <a href="/">
                        <i class="material-icons">face</i>
                    </a>
                </li>
                <li>
                    <a href="/">

                        <i class="material-icons" >info</i>
                    </a>
                </li>
            </ul>
        </nav>


    )
}
