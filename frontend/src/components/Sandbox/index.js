// frontend/src/components/LoginFormPage/index.js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

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
  const [valid, setValid] = useState(0);

  ///HOW WE READ FROM THE STORE
  const checkNotes = useSelector((state) => state.notebook);

  //SET THE CURRENT VIEW OF THE SELECTED BOX
  const theCurrentSelectedNoteBook = (e) => {
    setId(e.target.getAttribute("data-id"));
    setInputList([e.target.value]);
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
  }, [dispatch]);

  //CHECK THE USER EXISTENCE
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  ///CHANING THE VALUE OF THE CURRENT INPUT
  const changeValue = (e) => {
    setInputList(e.target.value);
  };

  /// (UPDATE THUNK) SAVING THE NEW NOTE THE UPDATE THE CRUD THUNK
  const updatenotebook = async () => {
    const response = await dispatch(saveNotebooks(id, inputList));
    console.log(response);
  };

  //DELETEING NOTEBOOK
  const deletenotebook = async () => {
    await dispatch(deleteNotebooks(id));
    setInputList([]);
  };

  //CREATING NOTEBOOK
  const createnotebook = () => {
    setTitle(true);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    if (titleName.length === 0) {
      return;
    }
    console.log(`Step 1`);
    dispatch(createNotebooks(titleName, userId));
    dispatch(getAllNotebooks(id));
    settitleName("");
  };
  const titlenameHandler = (e) => {
    settitleName(e.target.value);
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
  return (
    <>
      {!view ? (
        <p>Not allowed to see this page</p>
      ) : (
        <div className="onecontainer">
          <nav className="onemainnav">
            <div>
              <ul>
                <li></li>
              </ul>
            </div>
          </nav>
          <div className="onemaininfo">
            {/* THIS IS WHERE THE BUTTON RENDERS THE READ OF CRUD 1/4 */}
            <ul className="thenotes">{currentNoteBooks}</ul>
            <div className="readandedit">
              {/* THIS IS WHERE WE WILL UPDATE THE NOTEBOOK THE UPDATE OF CRUD 2/4 */}
              <textarea value={inputList} onChange={changeValue}></textarea>
              <button onClick={updatenotebook}>Save!</button>
              <button onClick={deletenotebook}>Delete NoteBook!</button>
              <button onClick={opennotebook}>Open Notebook!</button>
              {/* {setValid(checkNotes?.userId)} */}
              {title ? (
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
                </div>
              ) : (
                <button onClick={createnotebook}>Create A NoteBook!</button>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Sandbox;
