// frontend/src/components/LoginFormPage/index.js
import React, { useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Link, Redirect } from "react-router-dom";
import "./LoginForm.css";
import logo from "../../imgs/SheepNote-logos.jpeg";
function LoginFormPage() {
  const dispatch = useDispatch();
  const sessionUser = useSelector((state) => state.session.user);
  const [credential, setCredential] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);

  if (sessionUser) return <Redirect to="/" />;

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors([]);
    return dispatch(sessionActions.login({ credential, password })).catch(
      async (res) => {
        const data = await res.json();
        if (data && data.errors) setErrors(data.errors);
      }
    );
  };

  return (
    // <div className="login">
    //   <div className="loginbox">
    //     <img src={logo} className="avatar" alt="sheep"></img>
    //     <form
    //       typer="submit"
    //       onSubmit={handleSubmit}
    //       className="input-group margin-bottom-sm"
    //     >
    //       <ul>
    //         {errors.map((error, idx) => (
    //           <li key={idx}>{error}</li>
    //         ))}
    //       </ul>
    //       <label>
    //         Username or Email
    //         <input
    //           type="text"
    //           value={credential}
    //           onChange={(e) => setCredential(e.target.value)}
    //           required
    //         />
    //       </label>
    //       <label>
    //         Password
    //         <input
    //           type="password"
    //           value={password}
    //           onChange={(e) => setPassword(e.target.value)}
    //           required
    //         />
    //       </label>
    //       <button className="btn btn-primary btn-block btn-large" type="submit">
    //         Log In
    //       </button>
    //     </form>
    //   </div>
    // </div>
    <div class="loginbox">
      <div class="center">
        <img src={logo} className="avatar" alt="sheep"></img>
        <form onSubmit={handleSubmit}>
          <ul>
            {errors.map((error, idx) => (
              <li key={idx}>{error}</li>
            ))}
          </ul>
          <label>
            <input
              type="text"
              value={credential}
              onChange={(e) => setCredential(e.target.value)}
              placeholder="Username or Email"
              required
            />
          </label>
          <label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </label>
          <button className="login" type="submit">
            Log In
          </button>
        </form>
        <div class="signuppart">
          <h4>Don't have an acount?!</h4>
          <div>
            <a href="/signup">Create account</a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginFormPage;
