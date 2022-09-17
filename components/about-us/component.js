import React from "react";
import { AboutUsItem } from "./about-us-item";
import Image from 'next/image';
import ImageWebApp from '../../assets/images/icon-webapp.png';
import ImageSoftware from '../../assets/images/icon-bestaandesoftware.png';
import ImageNabouwen from '../../assets/images/nabouwen.png';
import ImageMobile from '../../assets/images/icon-mobileappontwikkelen.png';
import ImageBlog from '../../assets/images/blog.jpg';

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-wrapper">
        <div className="about-us-header">
          <h1>Zo kunnen we je helpen.</h1>
          <p>
            De wereld verandert ontzettend snel. Daarom bouwen wij maatwerk
            software die naadloos aansluit op jouw wensen en doelen. Web
            applicaties, mobiele apps en software koppelingen waarmee jij jouw
            organisatie laat groeien. Juist in deze tijd. Op zoek naar een
            software bouwer die kritisch met je meedenkt? Dan ben je bij MG
            Software aan het juiste adres.
          </p>
          <Image src={ImageBlog} alt="blog" width="320px" height="220px" /> <br />
          <button className="about-button">Bekijk ons werk</button>
        </div>
        <div className="about-us-items">
          <AboutUsItem
            image={<Image alt="maatwerk software" src={ImageWebApp} width="64px" height="64px"/>}
            header="Maatwerk software"
            content="Ieder bedrijf is uniek en daar hoort unieke, op maat gemaakte software bij."
          />
          <AboutUsItem
            image={<Image alt="koppeling" src={ImageSoftware} width="64px" height="64px"/>}
            header="Bestaande software koppelen"
            content="Meerdere systemen die niet met elkaar samenwerken wordt door ons verleden tijd."
          />
          <AboutUsItem
            image={<Image alt="nabouwen" src={ImageNabouwen} width="64px" height="64px"/>}
            header="Software nabouwen"
            content="Jouw software, maar dan in een nieuw en future-proof jasje."
          />
          <AboutUsItem
            image={<Image alt="app" src={ImageMobile} width="64px" height="64px"/>}
            header="App laten maken"
            content="Een webapplicatie of een mobiele applicatie waarin processen soepel verlopen, die precies de functies heeft die jij zoekt en ook eens tijd"
          />
        </div>
      </div>
    </div>
  );
};

export { AboutUs };
