import React from "react";
import { useEffect } from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";
import "./Splash.css";
import { useState } from "react";
// import { NavLink, Link } from "react-router-dom";
import logo from "../../imgs/SheepNote-logos.jpeg";

const SplashHomePage = () => {
  // const presentUser = useSelector((state) => state.session.user);
  // if (!presentUser) return <Redirect to="/lobby" />;
  const [timePassed, setTimePassed] = useState(false);

  setTimeout(function () {
    setTimePassed(true);
  }, 2300);

  if (!timePassed) {
    return (
      <>
        <div className="container">
          <span className="title">S</span>
          <span className="title">H</span>
          <span className="title">E</span>
          <span className="title">E</span>
          <span className="title">P</span>
          <span className="title">N</span>
          <span className="title">O</span>
          <span className="title">T</span>
          <span className="title">E</span>
        </div>
      </>
    );
  } else {
    return <Redirect to="/home" />;
  }
};

export default SplashHomePage;
