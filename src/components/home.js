import React from "react";
import "./css/home.css"
import ieee from "../images/IEEE.webp";
import ieeeBlr from "../images/bang.webp";
import wie from "../images/WIE.webp";
import essence from "../images/sponsors/essence_main.webp"
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
import SponserSlider from "../components/slider";
import CallforVol from "../components/callForVol";
import essence_logo from "../images/sponsors/image2.webp";
import Slider from "react-slick";

export default function Home() {

  const settings={
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    speed: 9000,
    autoplaySpeed: 0,
    cssEase: 'linear',
    arrows: false,
    pauseOnHover:false
  }

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
          <Navbar />
        </div>
        <div className="heading-primary" >
          <div className="heading-primary--main" id="head-main"><span className="skyblue">I</span>D<span className="skyblue">EEE</span>AS</div><div className="heading-primary--main" id="head-main"> 2K22</div>
          <div className="heading-primary--sub">ORGANIZED BY <a rel="noreferrer" className="skyblue" href="https://www.instagram.com/ieeesitsb/" target="_blank" id="sitsb">IEEE SIT SB</a> & SPONSORED BY</div>
          <img alt="essence" src={essence_logo} id="essence-spon"></img>
          {/* <Button dest="events" text="Events" id="but1"></Button> */}
        </div>

        <Slider {...settings}>
          <li className="flash-news">Presentario now in hybrid mode</li>
          <br></br>
          <li className="flash-news">Deadline extended till 21st for the events Presentario, Aavishkar and Ideathon</li>
          <br></br>
          <li className="flash-news">Trademark theme is now released</li>
          <br></br>
        </Slider>



      </header>

      <main>


        <section className="section-about">

          <center className="" id="cash">WIN CASH PRIZES UPTO INR 45,000</center>
          <SponserSlider />
          <div id="aboutUs">
            <About />
          </div>
          <div id="cfv">
            <CallforVol />
          </div>
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
        <a href="https://www.instagram.com/essence_thebakelab/" target="_blank" rel="noreferrer">
                <img alt="banner" src={essence} className='banner'></img>
            </a >
        <section className="section-timeline" id="schedule">

          <h1 className="heading-secondary">IDEEEAS 2k22 Schedule</h1>
          <Timeline />
          <br></br>
          <Button dest="#events" text="EXPLORE EVENTS" />
        </section>
        {/* <section className="section-testimonials">
          <h1 className="heading-secondary">Testimonials</h1>
          <Swiper/>
        </section> */}
        {/* <ContactUs/> */}
      </main>

      <Footer />
    </>
  );
}
