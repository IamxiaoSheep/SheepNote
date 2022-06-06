// frontend/src/components/LoginFormPage/index.js
import React, { useEffect, useState } from "react";
import * as sessionActions from "../../store/session";
import { useDispatch, useSelector } from "react-redux";
import { NavLink, Redirect, useHistory, useParams } from "react-router-dom";
// import logo from "../../imgs/SheepNote-logos.jpeg";
// import "./LoginForm.css";
import logo from "../../imgs/SheepNote-logos2.jpeg";
import "./Sandbox.css";
import {
  getAllNotebooks,
  saveNotebooks,
  deleteNotebooks,
  createNotebooks,
} from "../../store/notebooks";
import {
  createNote,
  getAllNotes,
  deleteAllNotes,
  saveNotes,
} from "../../store/notes";

import notallowed from "../../imgs/unauthorized.gif";

function Sandbox() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const history = useHistory();

  //CHECK IF THE USER IS LOGGED IN
  const user = useSelector((state) => state.session.user);

  //LOGGED IN USER CHECK
  const [view, setView] = useState(false);
  //LOTOUT
  const logout = (e) => {
    e.preventDefault();
    dispatch(sessionActions.logout());
    history.push(`/`);
  };
  //THIS IS WHERE THE ARRAY FOR THE VIEW IS
  const [inputList, setInputList] = useState([]);
  const [id, setId] = useState(0);
  const userId = user?.id;
  const [title, setTitle] = useState(false);
  const [titleName, settitleName] = useState("");
  const [open, setOpen] = useState("false");
  const [titleconfirm, setTitleConfirm] = useState(false);

  //ERRORS

  const [errors, setErrors] = useState([]);

  //TEXTBOXZ SOW
  const [inputView, setInputView] = useState(false);
  ///HOW WE READ FROM THE STORE
  const checkNotes = useSelector((state) => state.notebook);

  //HOW WE READ FROM STORE FOR NOTES
  const smallnotes = useSelector((state) => state.note);
  const smallnotesCollection = Object.values(smallnotes).map((el) => (
    <>
      <div
        className="button-7"
        value={el?.title}
        key={el?.id + 1}
        data-key={el?.id}
        data-id={el?.title}
        data-note={el?.notedata}
      >
        {el?.title}
        <div></div>
        {el?.notedata}
        {/* <div data-note={el?.notedata}> {el?.notedata}</div> */}
      </div>
    </>
  ));

  //SET THE CURRENT VIEW OF THE SELECTED BOX
  const theCurrentSelectedNoteBook = (e) => {
    setTitle(false);
    settitleName("");
    setErrors([]);
    dispatch(getAllNotes(id));
    if (e.target.value.length !== 0) {
      setInputView(true);
    }

    setId(e.target.getAttribute("data-id"));
    setInputList([e.target.value]);
    setTitleConfirm(false);
  };

  /// READ THE VALUES OF THE CURRENT USER DATABASE
  const currentNoteBooks = Object.values(checkNotes).map((el) => (
    <button
      className="button-7"
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
    dispatch(getAllNotes(id));
  }, [dispatch, setInputView, setErrors, id]);

  //CHECK THE USER EXISTENCE
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  ///CHANING THE VALUE OF THE CURRENT INPUT
  const changeValue = (e) => {
    const error = [];
    setErrors([]);

    if (e.target.value.length === 20) {
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
    setTitleConfirm(true);
  };

  const submitTitle = (e) => {
    e.preventDefault();

    if (titleName.length === 0) {
      dispatch(createNotebooks("Untitled", userId));
      dispatch(getAllNotebooks(id));
      settitleName("");
      setErrors([]);
      setTitle(false);
      setTitleConfirm(false);
      return;
    }

    dispatch(createNotebooks(titleName, userId));
    dispatch(getAllNotebooks(id));
    settitleName("");
    setErrors([]);
    setTitleConfirm(false);
    setTitle(false);
  };
  const titlenameHandler = (e) => {
    const error = [];
    setErrors([]);

    if (e.target.value.length === 20) {
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
    setTitleConfirm(false);
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
    <div className="thenotespage">
      {!view ? (
        <div className="areyoulost">
          <p>Are you lost? </p>
          <div>
            <NavLink to="/">
              <img className="notallowed" src={notallowed} />
            </NavLink>
          </div>
        </div>
      ) : (
        <div className="onecontainer">
          <div className="navbarforhome">
            <nav className="onemainnav"></nav>
            <div className="allthelinks">
              <div className="name">Welcome, {user?.username}!</div>
              <img className="namelogo" src={logo} />
              <div>
                <NavLink className="toHome" to="/home">
                  Home
                </NavLink>
              </div>
              {/* <div>
                <NavLink className="toNotebooks" to="/mynotebooks">
                  My Notebooks
                </NavLink>
              </div> */}
              <div>
                <NavLink className="toNotebooks" to="/" onClick={logout}>
                  Logout!
                </NavLink>
              </div>
              <div class="sheepanimationtwo">
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
                <img src={logo} />
              </div>
            </div>
          </div>

          <div className="onemaininfo">
            {/* THIS IS WHERE THE BUTTON RENDERS THE READ OF CRUD 1/4 */}
            <div className="containerfornotes">
              <p className="text">Where is our head today?!</p>
              <div className="thenotes">{currentNoteBooks}</div>
              <div className="preview">{smallnotesCollection}</div>
            </div>
            <div className="readandedit">
              {/* THIS IS WHERE WE WILL UPDATE THE NOTEBOOK THE UPDATE OF CRUD 2/4 */}
              {inputView ? (
                <>
                  {errors.length > 0 ? (
                    <div className="errornotebookone">{errors}</div>
                  ) : (
                    <></>
                  )}
                  <div className="savedeleteopen">
                    <textarea
                      className="textarea"
                      value={inputList}
                      onChange={changeValue}
                    ></textarea>
                    <button className="arrow" onClick={updatenotebook}>
                      Save!
                    </button>
                    <button className="arrow" onClick={deletenotebook}>
                      Delete NoteBook!
                    </button>
                    <button className="arrow" onClick={opennotebook}>
                      Open Notebook!
                    </button>
                    <button className="arrow" onClick={closearea}>
                      Cancel
                    </button>
                  </div>
                </>
              ) : (
                <>
                  {title ? (
                    <></>
                  ) : (
                    <button
                      className="arrow createnotebook"
                      onClick={createnotebook}
                    >
                      Create A NoteBook!
                    </button>
                  )}
                </>
              )}
              {titleconfirm ? (
                <>
                  {errors.length > 0 ? (
                    <div className="errornotebooktwo">{errors}</div>
                  ) : (
                    <></>
                  )}
                  <div>
                    <section className="NOTEBOOKCONFIRM">
                      <form className="notebookform" onSubmit={submitTitle}>
                        <input
                          type="text"
                          value={titleName}
                          onChange={titlenameHandler}
                          placeholder="What's going on today?"
                          className="textarea"
                        ></input>
                        <button type="submit" className="confirm arrow">
                          Confirm!
                        </button>
                        <button className="cancel arrow" onClick={cancelClick}>
                          Cancel!
                        </button>
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
    </div>
  );
}

export default Sandbox;
