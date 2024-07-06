import React, { useEffect} from "react";
import { render } from "react-dom";
import Atropos from 'atropos/react';
import "../styles/app.css"
import atroposBackground from '../img/atropos-background.png';
import atroposMoon from '../img/atropos-moon.png';
import atroposMountain from '../img/atropos-mountain.png';
import atroposSmallMountain from '../img/atropos-small-mountain.png';
import atroposForest from '../img/atropos-forest.png';
import atroposNearForest from '../img/atropos-near-forest.png';

const Fullwidth = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fullWidth");
    elements.forEach((element) => {
      element.style.animation = "fallFromLeft 1s forwards";
    });
  }, []);

  return (
    <div className="fullWidth">
      <div id="app">
  <Atropos
    className="my-atropos"
    activeOffset={40}
    shadowScale={1.05}
    alwaysActive={true}
    onEnter={() => console.log('Enter')}
    onLeave={() => console.log('Leave')}
    onRotate={(x, y) => console.log('Rotate', x, y)}
  >
    <span className="my-atropos">
      <img className="atropos-header" src={atroposNearForest} style={{ zIndex: 6 }} data-atropos-offset="5" />
      <img className="atropos-header" src={atroposForest} style={{ zIndex: 5 }} data-atropos-offset="4" />
      <img className="atropos-header" src={atroposSmallMountain} style={{ zIndex: 4 }} data-atropos-offset="2" />
      <img className="atropos-header" src={atroposMoon} style={{ zIndex: 2 }} data-atropos-offset="-2" />
      <img className="atropos-header" src={atroposBackground} style={{ zIndex: 1 }} data-atropos-offset="-4" />
      <img className="atropos-header" src={atroposMountain} style={{ zIndex: 3 }} data-atropos-offset="0" />
    </span>
  </Atropos>
</div>
    </div>
  );
};
const Section = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".section");
    elements.forEach((element) => {
      element.style.animation = "fallFromBottom 1s forwards";
    });
  }, []);

  return (
    <div className="section">
  </div>
  );
};
const Sidebar = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".sidebar");
    elements.forEach((element) => {
      element.style.animation = "fallFromLeft 1s forwards";
    });
  }, []);

  return (
    <div className="sidebar">
      <p className="textResume">
        <p className="textHi">Hello and welcome to my online portfolio.</p>
        <br />
        <p className="mainPart">
        I am a Front-end developer from Novosibirsk, develops and illustrates web projects.
        I have worked on two different projects - a website for the Ncps College and my second pet project is this resume.
        In this online portfolio, I tried to show my maximum abilities in this field.
        </p>
      </p>
    </div>
  );
};
const Main = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".main");
    elements.forEach((element) => {
      element.style.animation = "fallFromRight 1s forwards";
    });
  }, []);

  return (
    <div className="main">
    </div>
  );
};
const Content = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".content");
    elements.forEach((element) => {
      element.style.animation = "fallFromBottom 1s forwards";
    });
  }, []);

  return (
    <div className="content">
    </div>
  );
};

render(<Fullwidth />, document.getElementById("full-width-element"));
render(<Section />, document.getElementById("section"));
render(<Sidebar />, document.getElementById("sidebar"));
render(<Main />, document.getElementById("main"));
render(<Content />, document.getElementById("content"));