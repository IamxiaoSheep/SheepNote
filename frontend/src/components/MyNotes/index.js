import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

import "./what.css";
import {
  createNote,
  getAllNotes,
  deleteAllNotes,
  saveNotes,
} from "../../store/notes";

function MyNotes() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const history = useHistory();
  // const arr = [];

  //CHECK IF THE USER IS LOGGED IN
  const user = useSelector((state) => state.session.user);

  //LOGGED IN USER CHECK
  const [view, setView] = useState(false);

  //THIS IS WHERE THE ARRAY FOR THE VIEW IS
  const [inputList, setInputList] = useState("");
  const [id, setId] = useState(0);
  const userId = user?.id;
  const [title, setTitle] = useState(false);

  //THIS IS WHEN TO RENDER THE EDIT BOXES
  const [inputView, setInputView] = useState(false);
  //WHEN CREATING NEW DATA
  const [titleName, settitleName] = useState("");
  const [titleData, settitleData] = useState("");

  //WHEN EDITING THE DATA
  const [noteTitle, setnoteTitle] = useState("");
  const [noteData, setNoteData] = useState("");

  ///HOW WE READ FROM THE STORE
  const checkNotes = useSelector((state) => state.note);

  //SET THE CURRENT VIEW OF THE SELECTED BOX
  const theCurrentSelectedNoteBook = (e) => {
    // if (e.target.value.length !== 0) {
    //   setInputView(true);
    // }
    if (!e.target.value) {
      setInputView(true);
    }
    let title = e.target.getAttribute("data-id");
    let data = e.target.getAttribute("data-note");
    setnoteTitle(title);
    setNoteData(data);
    setId(e.target.getAttribute("data-key"));
    setInputList(`${title} ${data}`);
  };

  /// READ THE VALUES OF THE CURRENT USER DATABASE
  const currentNoteTitle = Object.values(checkNotes).map((el) => (
    <>
      <div
        className="button-7"
        value={el?.title}
        key={el?.id + 1}
        data-key={el?.id}
        data-id={el?.title}
        data-note={el?.notedata}
        onClick={theCurrentSelectedNoteBook}
      >
        {el?.title}
        <div></div>
        {el?.notedata}
        {/* <div data-note={el?.notedata}> {el?.notedata}</div> */}
      </div>
    </>
  ));
  //  (READ THUNK) RENDER AFTER FIRST TRY TO GET THE ACTUALY NOTES
  useEffect(() => {
    let s = dispatch(getAllNotes(noteId)).then((r) => {
      if (r.Error) {
        setView(false);
      }
    });
    console.log(s);
    // if (s === undefined) {
    //   console.log(`thats a lto of daamge`);
    //   setView(false);
    // }
  }, [dispatch]);

  //CHECK THE USER EXISTENCE
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  ///CHANING THE VALUE OF THE CURRENT INPUT
  const changetitle = (e) => {
    // console.log(e.target.value, `TOP`);
    setnoteTitle(e.target.value);
  };
  const changedata = (e) => {
    // console.log(e.target.value, `BOTTOM`);
    setNoteData(e.target.value);
  };

  // (UPDATE THUNK) SAVING THE NEW NOTE THE UPDATE THE CRUD THUNK
  const updatenote = async () => {
    await dispatch(saveNotes(noteTitle, noteData, id));
    dispatch(getAllNotes(noteId));
    setInputView(false);

    // dispatch(getAllNotes(noteId));

    // dispatch(getAllNotes(noteId));
  };

  //DELETEING NOTEBOOK
  const deletenotebook = () => {
    dispatch(deleteAllNotes(id));
    dispatch(getAllNotes(noteId));
    setInputList([]);
    setnoteTitle("");
    setNoteData("");
  };

  //CREATING NOTEBOOK
  const createnote = () => {
    setTitle(true);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    dispatch(createNote(titleName, titleData, noteId));
    settitleName("");
    settitleData("");
    setTitle(false);
    dispatch(getAllNotes(noteId));
  };
  const titlenameHandler = (e) => {
    settitleName(e.target.value);
  };
  const titledataHandler = (e) => {
    settitleData(e.target.value);
  };

  const cancelClick = (e) => {
    e.preventDefault();
    settitleName("");
    setTitle(false);
  };
  //OPEN THE NOTEBOOK
  const opennotebook = () => {
    history.push(`/note/${id}`);
  };

  //EDITING THE FORM

  const cancelEdit = () => {
    setInputView(false);
  };
  return (
    <>
      {!view ? (
        <p>Sorry Mate Page Doesn't Exist</p>
      ) : (
        <div className="onecontainer">
          <nav className="onemainnav">
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </nav>
          <div className="onemaininfonote">
            {/* THIS IS WHERE THE BUTTON RENDERS THE READ OF CRUD 1/4 */}
            {/* <ul className="thenotes">{currentNoteTitle}</ul> */}
            <ul className="thenotes">
              {currentNoteTitle}
              {/* {currentNoteData} */}
            </ul>
            <div className="readandedit">
              {/* THIS IS WHERE WE WILL UPDATE THE NOTEBOOK THE UPDATE OF CRUD 2/4 */}

              {inputView ? (
                <>
                  <textarea value={noteTitle} onChange={changetitle}></textarea>
                  <textarea value={noteData} onChange={changedata}></textarea>
                  <button onClick={updatenote}>Save!</button>
                  <button onClick={cancelEdit}>Cancel!</button>
                  <button onClick={deletenotebook}>Delete NoteBook!</button>
                </>
              ) : (
                <>
                  {title ? (
                    <></>
                  ) : (
                    <button onClick={createnote}>Create A Note!</button>
                  )}
                </>
              )}

              {title ? (
                <>
                  <div>
                    <section>
                      <form onSubmit={submitTitle}>
                        <input
                          type="text"
                          value={titleName}
                          onChange={titlenameHandler}
                          placeholder="Title"
                        ></input>
                        <button type="submit">Confirm!</button>
                        <button onClick={cancelClick}>Cancel!</button>
                      </form>
                    </section>
                    <div>
                      <section>
                        <form onSubmit={submitTitle}>
                          <input
                            type="text"
                            value={titleData}
                            onChange={titledataHandler}
                            placeholder="Data"
                          ></input>
                        </form>
                      </section>
                    </div>{" "}
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

export default MyNotes;
