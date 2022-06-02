import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import SplashHomePage from "./components/SplashPage";
import NoteBook from "./components/Main/AllNoteBooks";
import Home from "./components/Home";
import MyNoteBook from "./components/MyNoteBooks";
import Sandbox from "./components/Sandbox";
import MyNotes from "./components/MyNotes";
// import { AllNoteBooks } from "./components/Main/AllNoteBooks";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <Switch>
      <Route exact from="/">
        <SplashHomePage />
      </Route>
      <Route path="/login">
        <Navigation isLoaded={isLoaded} />
        <LoginFormPage />
      </Route>
      <Route path="/signup">
        <SignupFormPage />
      </Route>
      <Route path="/profile/notebook">
        <NoteBook />
      </Route>
      <Route path="/home">
        <Navigation isLoaded={isLoaded} />
        <Home />
      </Route>
      <Route path="/mynotebooks">
        <Sandbox />
        {/* <MyNoteBook /> */}
      </Route>
      <Route path={`/note/:noteId`}>
        <MyNotes></MyNotes>
      </Route>
      <Route>Page Not Found</Route>
    </Switch>
  );
}

export default App;
