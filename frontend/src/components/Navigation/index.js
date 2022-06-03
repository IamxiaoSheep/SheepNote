// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";
import logo from "../../imgs/SheepNote-logos.jpeg";
import * as sessionActions from "../../store/session";
function Navigation({ isLoaded }) {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);

  const logins = () => {
    return dispatch(
      sessionActions.login({
        credential: "Demo-lition",
        password: "password",
      })
    );
  };

  return (
    <>
      {sessionUser ? (
        <>
          <div className="navbar">
            <NavLink className="logo" to="/home">
              SheepNote
              <img src={logo} alt="sheep" />
            </NavLink>
            <ul className="nav">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <ProfileButton user={sessionUser} />
              </li>
              <li>
                <NavLink to="/mynotebooks">My Notes</NavLink>
              </li>
            </ul>
          </div>
        </>
      ) : (
        <>
          <div className="navbar">
            <NavLink className="logo" to="/home">
              SheepNote
              <img src={logo} alt="sheep" />
            </NavLink>
            <ul className="nav">
              <li>
                <NavLink to="/home">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/login" onClick={logins}>
                  Demo User
                </NavLink>
              </li>
              <li>
                <NavLink to="/signup">Signup</NavLink>
              </li>
            </ul>
          </div>
        </>
      )}
    </>
  );
}

export default Navigation;
