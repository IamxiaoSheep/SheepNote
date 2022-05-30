import React from "react";
import { useSelector } from "react-redux";
import { NavLink, Redirect, Switch, Route } from "react-router-dom";
import "./Splash.css";
import logo from "../../imgs/SheepNote-logos.jpeg";

const SplashHomePage = () => {
  // const presentUser = useSelector((state) => state.session.user);
  // if (!presentUser) return <Redirect to="/lobby" />;
  return (
    <div className="mainbody">
      <div className="blockWelcome">
        <div>
          Save 40% on Personal And get your plans off the ground. Ends 6/5.
        </div>
        <img className="Logo" src={logo} alt="Logo" />
      </div>

      <div className="blockB">Block B</div>
      <div className="blockC">Block C</div>
      <div className="blockD">Block D</div>
    </div>
  );
};

export default SplashHomePage;
