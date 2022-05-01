import React from "react";
import "./css/home.css"
import ieee from "../images/IEEE.png";
import ieeeBlr from "../images/bang.png";
import wie from "../images/WIE.png";
import sit from "../images/sit.png";
import emb from "../images/emb.png";
import Card from "../components/card";
import Button from "../components/button";
import details from "../components/events.json";
import Swiper from "../components/swiper";
import Navbar from "../components/navbar";
import About from "../components/about";
import Sponsers from "../components/sponsers";
import Timeline from "../components/timeline";

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
        <img className="header__logo" src={sit} alt="logo"></img>
        <img className="header__logo" src={ieeeBlr} alt="logo"></img>
        {/* <img className="header__logo" src={photonics} alt="logo"></img> */}
        <img className="header__logo" src={emb} alt="logo"></img>
        <img className="header__logo" src={wie} alt="logo"></img>
        <img className="header__logo" src={ieee} alt="logo"></img>

        </div>
        <div className="navbar">
          <Navbar/>
        </div>
      

        <div className="header__text-box" >
          <h1 className="heading-primary">
            <span className="heading-primary--main" id="head-main">
              <span className="skyblue">
                I
              </span>
                D
              <span className="skyblue">
                EEE
              </span>
                AS<br/>2k22
            </span>
            <span className="heading-primary--sub skyblue">ORGANIZED BY IEEE SIT SB</span>
          </h1>
          <Button text="Explore Events" dest="#events"  />
        </div>
      </header>
      <main>

        <section className="section-about">

          <About/>

        </section>
        {/* <section className="section-sponsers">
            <Sponsers/>
        </section> */}
        
        <section className="section-timeline">
          
            <h1 className="heading-secondary">IDEEEAS 2k22 Schedule</h1>
              <Timeline/>
        </section>
        <section className="section-events" id="events">
          <h1 className="heading-secondary">our EVENTS</h1>
          <div className="section-events__cards-container">
            {details.details.map((d) => {
              return (
                <Card
                  img={d.img}
                  h1={d.h1}
                  price={d.price}
                  name={d.name}
                  intro={d.intro}
                  id={d.id}
                  id1={d.id1}
                />
              );
            })}
          </div>
        </section>
        
        <section className="section-testimonials">
          <h1 className="heading-secondary">Testimonials</h1>
          <Swiper/>
        </section>
      </main>
      <hr />
    </>
  );
}
