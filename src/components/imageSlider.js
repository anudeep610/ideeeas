import React from "react";
import "./css/imageSlider.css";
import Slider from "react-slick";
import sponserImg from "../images/codingninjas.png";

export default function ImageSlider() {
    var settings = {
        arrows:false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed:1000
      };
  return (
    <div className="sponsers">
    <Slider {...settings}>
      <div><img className="image" alt="sponser" src={sponserImg}/></div>
      <div><img className="image" alt="sponser" src={sponserImg}/></div>
    </Slider>
    </div>
  );
}
