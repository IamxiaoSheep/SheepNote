import "./Home.css";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import gif from "../../imgs/testcase.gif";
import logo from "../../imgs/SheepNote-logos2.jpeg";
import laptop from "../../imgs/laptop.jpeg";
import logotwo from "../../imgs/SheepNote-logos.jpeg";
function Home() {
  return (
    <div className="homepage">
      <section className="about-area" id="about">
        <div className="text-part">
          <div className="content">
            <h1 className="SheepNote">A simple website for all your notes!</h1>
            <img className="shakeimg" src={logotwo} />
            <div className="information">
              All your notes in one place. Sign up for free!
            </div>
          </div>
          <p>
            <img className="gif" src={gif} alt="loading..." />
          </p>
          <p>
            <img className="template" src={laptop} alt="loading..." />
          </p>
          <div class="sheepanimation">
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
            <img src={logo} />
          </div>
        </div>
      </section>

      <div className="sideinfo">
        <i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        <p> Work Smarter Not Harder!</p>

        <i class="fa fa-spinner fa-pulse fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        <p> Simple To Use!</p>

        <i class="fa fa-cog fa-spin fa-3x fa-fw"></i>
        <span class="sr-only">Loading...</span>
        <p> Grab A Note Below!</p>
      </div>
    </div>
  );
}

export default Home;
