import React from 'react';
import "./css/slider.css";
import essence from "../images/essence1.webp"
import spax from "../images/sponsors/SPAX.webp"
import icafe from "../images/sponsors/icafe.webp"
import cninjas from "../images/sponsors/codingninjas.webp"
import electronest from "../images/sponsors/electroNest.webp";
import canara from "../images/sponsors/canara.webp";
import glossy from "../images/sponsors/glossy.webp";

const colors = [essence,spax,icafe,cninjas,electronest,canara,glossy];
const links = ["https://www.instagram.com/essence_thebakelab/","https://students.ieee.org/spax/","https://instagram.com/icafe2.2?igshid=YmMyMTA2M2Y=","https://www.codingninjas.com/"]
const titles = ["Our Title Sponsor","Our King Sponsor","Our Lord Sponsor", "Our Knight Sponsor","Our Knight Sponsor","Our Sponsor","Our Knight Sponsor"]
const ids=["essence","spax","icafe","cninjas","electronest","glossy"]
const delay = 3000;

export default function Slider() {
  const [index, setIndex] = React.useState(0);
  const timeoutRef = React.useRef(null);

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  React.useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === colors.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    );

    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
	  <>
	  <center><h1 className='heading-secondary' style={{"marginTop":"15vh"}}>IdEEEas 2k22 Sponsors</h1></center>
    <div className="slideshow">
    <div
      className="slideshowSlider"
      style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
    >
      {colors.map((pic, index) => (
        <a key={index} rel="noreferrer" className="slide" href={links[index] }  target="_blank">
          <h1 className='title'>{titles[index]}</h1>
          <img alt="slide" key={index} src={pic} className="slide-img" id={ids[index]}></img>
        </a>
      ))}
    </div>

      <div className="slideshowDots">
        {colors.map((_, idx) => (
          <div
            key={idx}
            className={`slideshowDot${index === idx ? " active" : ""}`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
    </div>
	</>
  );
}

