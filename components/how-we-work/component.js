import React from "react";
import Image from 'next/image';
import Carousel from "react-multi-carousel";
import Image1 from '../../assets/images/Group-304.svg';
import Image2 from '../../assets/images/Group-284.svg';
import Image3 from '../../assets/images/Group-281.svg';
import Image4 from '../../assets/images/fly.png';
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1200, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 600, min: 0 },
    items: 1,
  },
};

const HowWeWork = () => {
  return (
    <div className="how-we-work">
      <div className="how-we-work-header">
        <h1>Zo gaan wij te werk.</h1>
      </div>
      <Carousel responsive={responsive}>
        <div className="work-item">
          <div className="work-item-image">
            <span>1.</span>
            <Image alt="gesprek en advies" src={Image1} width="196px" height="196px" />
          </div>
          <div className="work-item-header">
            <h2>Gesprek & Advies</h2>
          </div>
          <div className="work-item-content">
            <p>Deel uw idee/plan in een gesprek en ontvang een gratis advies. Bent u er klaar voor? Klik hier</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-item-image">
            <span>2.</span>
            <Image alt="planning en begroting" src={Image2} width="196px" height="196px" />
          </div>
          <div className="work-item-header">
            <h2>Planning & Begroting</h2>
          </div>
          <div className="work-item-content">
            <p>U krijgt een plan met projectdetails en duidelijke tarieven.</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-item-image">
            <span>3.</span>
            <Image alt="idee en verwachting" src={Image3} width="196px" height="196px" />
          </div>
          <div className="work-item-header">
            <h2>Idee & Verwachting</h2>
          </div>
          <div className="work-item-content">
            <p>Samen verzamelen we ideeën en stellen we verwachtingen scherp.</p>
          </div>
        </div>
        <div className="work-item">
          <div className="work-item-image">
            <span>4.</span>
            <Image alt="start en feedback" src={Image4} width="196px" height="196px" />
          </div>
          <div className="work-item-header">
            <h2>Start & Feedback</h2>
          </div>
          <div className="work-item-content">
            <p>Programmeren, testen & leveren doen we dankzij succes-stappen. Gratis offerte aanvragen? Klik hier.</p>
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export { HowWeWork };
