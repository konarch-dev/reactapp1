import React from "react";
import hand_icon from "../Assets/hand_icon.png";
import arrow_icon from "../Assets/arrow.png";
import hero_img from "../Assets/hero_image.png";
import "./Hero.css";

const Hero = () => {
  return (
    <div>
      <div className="hero">
        <div className="hero-left">
          <h2>New Arrivals</h2>
          <div>
            <div className="hero-hand-icon">
              <p>new</p>
              <img src={hand_icon} alt=""></img>
            </div>
            <p>collection</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt=""></img>
          </div>
        </div>

        <div className="hero-right">
          <img src={hero_img} alt=""></img>
        </div>
      </div>
    </div>
  );
};
export default Hero;
