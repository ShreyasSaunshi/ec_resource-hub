import React from "react";
import "./Aboutus.css"; // Make sure to import your CSS file
import tushar from "../../assets/img/tushar.jpg";
import snevin from "../../assets/img/snevin.png";
import saurabh from "../../assets/img/saurabh.jpg";
import sheyas from "../../assets/img/shreyas.jpg";


import Github from "../../assets/img/github.svg";
import Linkdin from "../../assets/img/linkdin.svg";

const aboutus = () => {
  return (
    <div className="ppage">
      <main id="main">
        <h1 className="h1">About Us!</h1>
        <div className="profilecard" tabIndex="0">
          <img className="profileimg" src={tushar} alt="Tushar Shenoy" />
          <div className="abttext">
            <h2 data-splitting="">Tushar Shenoy</h2>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/t-tushar-shenoy/">
                <img src={Linkdin} alt="" />
              </a>
              <a href="https://github.com/tusharshenoy">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="profilecard" tabIndex="0">
          <img className="profileimg" src={saurabh} alt="Sourabh Shenoy" />
          <div className="abttext">
            <h2 data-splitting="">Saurabh Shenoy</h2>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/sourabh-shenoy-4b8781232/">
                <img src={Linkdin} alt="" />
              </a>
              <a href="https://github.com/sourabhshenoy04">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="profilecard" tabIndex="0">
          <img className="profileimg" src={snevin} alt="Snevin" />
          <div className="abttext">
            <h2 data-splitting="">Snevin</h2>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/snevindsouza/">
                <img src={Linkdin} alt="" />
              </a>
              <a href="https://github.com/snevindsouza">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
        <div className="profilecard" tabIndex="0">
          <img className="profileimg" src={sheyas} alt="Shreyas Saunshi" />
          <div className="abttext">
            <h2 data-splitting="">Shreyas Saunshi</h2>
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/shreyassaunshi/">
                <img src={Linkdin} alt="" />
              </a>
              <a href="https://github.com/shreyassaunshi">
                <img src={Github} alt="" />
              </a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default aboutus;
