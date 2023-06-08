//Styles
import "./HeroSection.css";
//Components
import NumberTransition from "./NumberTransition";
//Hooks
import React, { useEffect, useState } from "react";

const HeroSection = (props) => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    setAnimate(true);
  }, []);
  return (
    <div className="hero-container ">
      <div className="container hero-width">
        <img className="white-shadow" src={props.whiteShadow} />
        <div className="row hero-inner-container">
          <div
            className={`col-md-7 hero-section__left ${
              animate ? "slide-in-left" : ""
            }`}
          >
            <h1 className="hero-left__h1">
              <div className="hero-left__circle"></div>
              Discover <br /> Properties in <br /> London
            </h1>
            <p className="hero-left__p">
              Find a variety of properties in London <br /> that meet your needs
              and budget.
            </p>
            <div className="number-transition-container">
              <NumberTransition
                startingNumber={8300}
                endingNumber={9000}
                numberLabel="Houses Sold"
              />
              <NumberTransition
                startingNumber={1200}
                endingNumber={1600}
                numberLabel="Available Houses"
              />
              <NumberTransition
                startingNumber={6}
                endingNumber={22}
                numberLabel="Awards Won"
              />
            </div>
          </div>
          <div
            className={`col-md-5 hero-section__right ${
              animate ? "animate" : ""
            }`}
          >
            <img
              className="hero-right__img-one"
              src={props.heroRightImg}
              alt="Hero Right Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
