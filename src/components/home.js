import React from "react";
import "./css/home.css"
import ieee from "../images/IEEE.webp";
import ieeeBlr from "../images/bang.webp";
import wie from "../images/WIE.webp";
import essence from "../images/sponsors/image2.webp"
import sit from "../images/sit.webp";
import emb from "../images/emb.webp";
import photonics from "../images/photonics.webp";
import spax from "../images/sponsors/SPAX.webp";
import Card from "../components/card";
import Button from "../components/button";
import details from "../components/events.json";
import Navbar from "../components/navbar";
import About from "../components/about";
import Footer from "../components/footer";
import Timeline from "../components/timeline";
import Slider from "../components/slider"

export default function Home() {
  return (
    <>
      <header className="header">
        <div className="header__logo-box">
          <div className="logo-box-child">
            <img className="header__logo" src={sit} alt="logo"></img>
            <img className="header__logo" src={ieeeBlr} alt="logo"></img>
            <img className="header__logo" src={photonics} alt="logo"></img>
            <img className="header__logo" src={emb} alt="logo"></img>
          </div>
          <div className="logo-box-child">
            <img className="header__logo" src={wie} alt="logo"></img>
            <img className="header__logo" src={spax} alt="logo"></img>
            <img className="header__logo" src={ieee} alt="logo"></img>
          </div> 
        </div>
        <div className="navbar">
          <Navbar/>
        </div>
      <div className="heading-primary" >
        <div className="heading-primary--main" id="head-main"><span className="skyblue">I</span>D<span className="skyblue">EEE</span>AS</div><div className="heading-primary--main" id="head-main"> 2K22</div>
        <div className="heading-primary--sub">ORGANIZED BY <a rel="noreferrer" className="skyblue" href="https://www.instagram.com/ieeesitsb/" target="_blank" id="sitsb">IEEE SIT SB</a> & SPONSORED BY</div>
        <img alt="essence" src={essence} id="essence-spon"></img>
        {/* <Button dest="events" text="Events" id="but1"></Button> */}
      </div>

        

      </header>
      
      <main>
      

        <section className="section-about" id="aboutUs">

        <Slider/>
          <About/>
          
        </section>
        {/* <section className="section-sponsers">
            <Sponsers/>
        </section> */}
        
        
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
                  key={d.id}
                />
              );
            })}
          </div>
        </section>
        <section className="section-timeline" id="schedule">
          
            <h1 className="heading-secondary">IDEEEAS 2k22 Schedule</h1>
              <Timeline/>
              <br></br>
              <Button dest="#events" text="EXPLORE EVENTS"/>
        </section>
        {/* <section className="section-testimonials">
          <h1 className="heading-secondary">Testimonials</h1>
          <Swiper/>
        </section> */}
        {/* <ContactUs/> */}
      </main>
      
      <Footer/>
    </>
  );
}
