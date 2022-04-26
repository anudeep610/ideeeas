import React from "react";
import "./css/home.css"
import ieee from "../images/IEEE.png";
import ieeeBlr from "../images/bang.png";
import wie from "../images/WIE.png";
import sit from "../images/sit.png";
import emb from "../images/emb.png";
import Card from "../components/card";
import Footer from "../components/footer";
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
          <img className="header__logo" src={ieee} alt="logo"></img>
          <img className="header__logo" src={ieeeBlr} alt="logo"></img>
          <img className="header__logo" src={wie} alt="logo"></img>
          <img className="header__logo" src={sit} alt="logo"></img>
          <img className="header__logo" src={emb} alt="logo"></img>
        </div>
        
        <div className="navbar">
          <Navbar/>
        </div>

        <div className="header__text-box">
          <h1 className="heading-primary">
            <span className="heading-primary--main">IDEEEAS 2022</span>
            <span className="heading-primary--sub">Lorem ipsum dolor sit</span>
          </h1>
          <Button text="Explore More!!!" dest="#events" />
        </div>
      </header>
      <main>
        <section className="section-about">
          <About/>
        </section>
        <section className="section-sponsers">
            <Sponsers/>
        </section>
        <section className="section-events" id="events">
          <h1 className="heading-secondary">Events</h1>
          <div className="section-events__cards-container">
            {details.details.map((d) => {
              return (
                <Card
                  img={d.img}
                  h1={d.h1}
                  h2={d.h2}
                  h3={d.h3}
                  h4={d.h4}
                  h5={d.h5}
                  price={d.price}
                  name={d.name}
                  id={d.id}
                />
              );
            })}
          </div>
        </section>
        <section className="section-timeline">
            <h1 className="heading-secondary">Schedule</h1>
              <Timeline/>
        </section>
        <section className="section-testimonials">
          <h1 className="heading-secondary">Testimonials</h1>
          <Swiper/>
        </section>
      </main>
      <hr />
      <Footer />
    </>
  );
}
