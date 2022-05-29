// frontend/src/components/Navigation/index.js
import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import ProfileButton from "./ProfileButton";
import "./Navigation.css";

function Navigation({ isLoaded }) {
  const sessionUser = useSelector((state) => state.session.user);

  let sessionLinks;
  // if (sessionUser) {
  //   sessionLinks = <ProfileButton user={sessionUser} />;
  // } else {
  //   sessionLinks = (
  //     <>
  //       <NavLink to="/login">Log In</NavLink>

  //       <NavLink to="/signup">Sign Up</NavLink>
  //     </>
  //   );
  // }

  return (
    <div className="notloggedinnav">
      <NavLink exact to="/">
        Home
      </NavLink>
      {sessionUser ? (
        <ProfileButton user={sessionUser} />
      ) : (
        <>
          <NavLink to="/login">Log In</NavLink>

          <NavLink to="/signup">Sign Up</NavLink>
        </>
      )}
      {/* {isLoaded && sessionLinks} */}
    </div>
  );
}

export default Navigation;
