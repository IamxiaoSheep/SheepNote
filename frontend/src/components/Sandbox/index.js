// frontend/src/components/LoginFormPage/index.js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
import logo from "../../imgs/SheepNote-logos.jpeg";
// import "./LoginForm.css";
import "./Sandbox.css";
import {
  getAllNotebooks,
  saveNotebooks,
  deleteNotebooks,
  createNotebooks,
} from "../../store/notebooks";

function Sandbox() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const history = useHistory();

  //CHECK IF THE USER IS LOGGED IN
  const user = useSelector((state) => state.session.user);

  //LOGGED IN USER CHECK
  const [view, setView] = useState(false);

  //THIS IS WHERE THE ARRAY FOR THE VIEW IS
  const [inputList, setInputList] = useState([]);
  const [id, setId] = useState(0);
  const userId = user?.id;
  const [title, setTitle] = useState(false);
  const [titleName, settitleName] = useState("");
  const [open, setOpen] = useState("false");

  //ERRORS

  const [errors, setErrors] = useState([]);

  //TEXTBOXZ SOW
  const [inputView, setInputView] = useState(false);
  ///HOW WE READ FROM THE STORE
  const checkNotes = useSelector((state) => state.notebook);

  //SET THE CURRENT VIEW OF THE SELECTED BOX
  const theCurrentSelectedNoteBook = (e) => {
    setTitle(false);
    settitleName("");
    setErrors([]);
    if (e.target.value.length !== 0) {
      setInputView(true);
    }

    setId(e.target.getAttribute("data-id"));
    setInputList([e.target.value]);
  };

  /// READ THE VALUES OF THE CURRENT USER DATABASE
  const currentNoteBooks = Object.values(checkNotes).map((el) => (
    <button
      className="button-7"
      // className="textarea"
      value={el?.notetitle}
      data-id={el?.id}
      onClick={theCurrentSelectedNoteBook}
    >
      {el?.notetitle}
    </button>
  ));

  //  (READ THUNK) RENDER AFTER FIRST TRY TO GET THE ACTUALY NOTES
  useEffect(() => {
    dispatch(getAllNotebooks(id));
  }, [dispatch, setInputView, setErrors]);

  //CHECK THE USER EXISTENCE
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  ///CHANING THE VALUE OF THE CURRENT INPUT
  const changeValue = (e) => {
    console.log(e.target.value.length);
    const error = [];
    setErrors([]);

    if (e.target.value.length === 50) {
      error.push("Character Limit Reached");
      return setErrors(error);
    }
    setInputList(e.target.value);
  };

  /// (UPDATE THUNK) SAVING THE NEW NOTE THE UPDATE THE CRUD THUNK
  const updatenotebook = async () => {
    await dispatch(saveNotebooks(id, inputList));
    setInputView(false);
  };

  //DELETEING NOTEBOOK
  const deletenotebook = async () => {
    await dispatch(deleteNotebooks(id));
    setInputList([]);
    setId(0);
    setInputView(false);
  };

  //CREATING NOTEBOOK
  const createnotebook = () => {
    setErrors([]);
    setTitle(true);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    // console.log(titleName.length === 0, `*****`);
    // if (e.target.value === undefined) {
    //   dispatch(createNotebooks("Untitled", userId));
    //   dispatch(getAllNotebooks(id));
    // }

    if (titleName.length === 0) {
      dispatch(createNotebooks("Untitled", userId));
      dispatch(getAllNotebooks(id));
      settitleName("");
      setErrors([]);
      setTitle(false);
      return;
    }

    dispatch(createNotebooks(titleName, userId));
    dispatch(getAllNotebooks(id));
    settitleName("");
    setErrors([]);
  };
  const titlenameHandler = (e) => {
    console.log(e.target.value.length, `****`);
    const error = [];
    setErrors([]);

    if (e.target.value.length === 50) {
      error.push("Character Limit Reached");
      return setErrors(error);
    }
    // setErrors([]);
    settitleName(e.target.value);
  };

  const cancelClick = (e) => {
    e.preventDefault();
    settitleName("");
    setTitle(false);
  };
  //OPEN THE NOTEBOOK
  const opennotebook = () => {
    if (id === 0) {
      return;
    }
    history.push(`/note/${id}`);
  };

  ///WHAT IS THE VALUE

  const closearea = () => {
    setErrors([]);
    setInputView(false);
  };

  return (
    <>
      {!view ? (
        <p>Not allowed to see this page</p>
      ) : (
        <div className="onecontainer">
          <nav className="onemainnav"></nav>

          <div className="onemaininfo">
            <div className="allthelinks">
              <div className="name">Welcome, {user?.username}!</div>
              <img className="namelogo" src={logo} />
              <div>
                <NavLink className="toHome" to="/home">
                  Home
                </NavLink>
              </div>
              <div>
                <NavLink className="toNotebooks" to="/mynotebooks">
                  My Notebooks
                </NavLink>
              </div>
            </div>
            {/* THIS IS WHERE THE BUTTON RENDERS THE READ OF CRUD 1/4 */}
            <ul className="thenotes">{currentNoteBooks}</ul>
            <div className="readandedit">
              {/* THIS IS WHERE WE WILL UPDATE THE NOTEBOOK THE UPDATE OF CRUD 2/4 */}
              {inputView ? (
                <>
                  {errors.length > 0 ? errors : <></>}
                  <textarea
                    className="textarea"
                    value={inputList}
                    onChange={changeValue}
                  ></textarea>
                  <button onClick={updatenotebook}>Save!</button>
                  <button className="arrow" onClick={deletenotebook}>
                    Delete NoteBook!
                  </button>
                  <button className="arrow" onClick={opennotebook}>
                    Open Notebook!
                  </button>
                  <button onClick={closearea}>Cancel</button>
                </>
              ) : (
                <>
                  {title ? (
                    <></>
                  ) : (
                    <button className="arrow" onClick={createnotebook}>
                      Create A NoteBook!
                    </button>
                  )}
                </>
              )}
              {title ? (
                <>
                  {errors.length > 0 ? errors : <></>}
                  <div>
                    <section>
                      <form onSubmit={submitTitle}>
                        <input
                          type="text"
                          value={titleName}
                          onChange={titlenameHandler}
                          placeholder="Title"
                          className="textarea"
                        ></input>
                        <button type="submit">Confirm!</button>
                        <button onClick={cancelClick}>Cancel!</button>
                      </form>
                    </section>
                  </div>
                </>
              ) : (
                <></>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sandbox;
