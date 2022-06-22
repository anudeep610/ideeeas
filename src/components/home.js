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

        <div className="">
        <Slider {...settings} >
          <li className="flash-news green">Presentario now in hybrid mode</li>
          <br></br>
          <li className="flash-news purple">Deadline extended till 21st for the events Presentario, Aavishkar and Ideathon</li>
          <br></br>
          <li className="flash-news orange">Trademark theme is now released</li>
          <br></br>
        </Slider>

        </div>
        


      </header>

      <main>

        <section className="timings">
          <h1 className="heading-secondary">Event Timings</h1>
          <table className="timings-table" cellPadding="0" cellSpacing="0">
            <thead className="timings-table-head">
              <td className="table-heading">Events</td>
              <td className="table-heading">11:00 AM-11:30 AM</td>
              <td className="table-heading">11:00 AM-12:00 PM</td>
              <td className="table-heading">12:00 PM-12:30 PM</td>
              <td className="table-heading">12:30 PM-1:00 PM</td>
              <td className="table-heading">1:00 PM-1:30 PM</td>
              <td className="table-heading">1:30 PM-2:00 PM</td>
            </thead>
            <tbody>
              <tr>
                <td className="table-heading">Cnario</td>
                <td className="table-content">Batch 1</td>
                <td className="table-content">Batch 2</td>
                <td className="table-content">Batch 3</td>
                <td className="table-content">Batch 4</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>
              
              <tr>
                <td className="table-heading">Rectifier</td>
                <td className="table-content">Batch 1</td>
                <td className="table-content">Batch 2</td>
                <td className="table-content">Batch 3</td>
                <td className="table-content">Batch 4</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Webify</td>
                <td className="table-content">Batch 1</td>
                <td className="table-content">Batch 2</td>
                <td className="table-content">Batch 3</td>
                <td className="table-content">Batch 4</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Idol</td>
                <td className="table-content">Batch 1</td>
                <td className="table-content">Batch 2</td>
                <td className="table-content">Batch 3</td>
                <td className="table-content">Batch 4</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">2nd Round</td>
              </tr>

              <tr>
                <td className="table-heading">Blitz</td>
                <td className="table-content">Batch 1</td>
                <td className="table-content">Batch 2</td>
                <td className="table-content">Batch 3</td>
                <td className="table-content">Batch 4</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Photographia</td>
                <td className="table-content">Event Starts</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Presentario</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">Lunch</td>
                <td className="table-content">Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Ideathon</td>
                <td className="table-content">2 teams</td>
                <td className="table-content">2 teams</td>
                <td className="table-content">2 teams</td>
                <td className="table-content">2 teams</td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Robotics</td>
                <td className="table-content">Event Starts</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">Results & Lunch</td>
                <td className="table-content">Results & Lunch</td>
              </tr>

              <tr>
                <td className="table-heading">Avishkar</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">Lunch</td>
                <td className="table-content">Event Starts</td>
              </tr>

              <tr>
                <td className="table-heading">Trademark</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">submissions</td>
              </tr>
            </tbody>
          </table>
          <hr />
          <table className="timings-table" cellPadding="0" cellSpacing="0">
            <thead className="timings-table-head">
              <td className="table-heading">Events</td>
              <td className="table-heading">2:00 PM-2:30 PM</td>
              <td className="table-heading">2:30 PM-3:00 PM</td>
              <td className="table-heading">3:00 PM-3:30 PM</td>
              <td className="table-heading">3:30 PM-4:00 PM</td>
              <td className="table-heading">4:00 PM-4:30 PM</td>
              <td className="table-heading">4:30 PM-5:00 PM</td>
              <td className="table-heading">5:00 PM-5:30 PM</td>
            </thead>
            <tbody>
              <tr>
                <td className="table-heading">Cnario</td>
                <td className="table-content">2nd round</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">V</td>
                <td className="table-content"></td>
              </tr>
              
              <tr>
                <td className="table-heading">Rectifier</td>
                <td className="table-heading">Cnario</td>
                <td className="table-content">2nd round</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">A</td>
                <td className="table-content">T</td>
              </tr>

              <tr>
                <td className="table-heading">Webify</td>
                <td className="table-heading">Cnario</td>
                <td className="table-content">2nd round</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">L</td>
                <td className="table-content">H</td>
              </tr>

              <tr>
                <td className="table-heading">Idol</td>
                <td className="table-content">2nd Round</td>
                <td className="table-content">3rd Round</td>
                <td className="table-content">3rd Round</td>
                <td className="table-content">3rd Round</td>
                <td className="table-content"></td>
                <td className="table-content">E</td>
                <td className="table-content">E</td>
              </tr>

              <tr>
                <td className="table-heading">Blitz</td>
                <td className="table-content">2nd Round</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">D</td>
                <td className="table-content"></td>
              </tr>

              <tr>
                <td className="table-heading">Photographia</td>
                <td className="table-content">2nd Round</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">I</td>
                <td className="table-content">E</td>
              </tr>

              <tr>
                <td className="table-heading">Presentario</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">4 papers</td>
                <td className="table-content">2 papers</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">C</td>
                <td className="table-content">N</td>
              </tr>

              <tr>
                <td className="table-heading">Ideathon</td>
                <td className="table-content">4 Teams</td>
                <td className="table-content">4 Teams</td>
                <td className="table-content">2 Teams</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">T</td>
                <td className="table-content">D</td>
              </tr>

              <tr>
                <td className="table-heading">Robotics</td>
                <td className="table-content">Event Resumes</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">O</td>
                <td className="table-content"></td>
              </tr>

              <tr>
                <td className="table-heading">Avishkar</td>
                <td className="table-content">Event Continues</td>
                <td className="table-content"></td>
                <td className="table-content"></td>
                <td className="table-content">Event Ends</td>
                <td className="table-content"></td>
                <td className="table-content">R</td>
                <td className="table-content"></td>
              </tr>

              <tr>
                <td className="table-heading">Trademark</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content">-</td>
                <td className="table-content"></td>
                <td className="table-content">Y</td>
                <td className="table-content">-</td>
              </tr>
            </tbody>
          </table>

          <h1 className="heading-secondary">Results will be announced on the IEEE SIT SB instagram handle</h1>
        </section>

        <section className="section-about">

          <center className="news-slider" id="cash">WIN CASH PRIZES UPTO INR 45,000</center>
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
