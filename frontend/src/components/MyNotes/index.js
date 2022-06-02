// import { useParams } from "react-router-dom";
// import React, { useEffect, useState } from "react";

// import { useDispatch, useSelector } from "react-redux";

// import { createNote, getAllNotes } from "../../store/notes";

// function MyNotes() {
//   const { noteId } = useParams();
//   const dispatch = useDispatch();

//   //CHECK IF THE USER IS LOGGED IN
//   const user = useSelector((state) => state.session.user);

//   //THIS IS WHERE THE ARRAY FOR THE VIEW IS
//   const [inputList, setInputList] = useState([]);
//   const [id, setId] = useState(0);
//   const userId = user?.id;
//   const [title, setTitle] = useState(false);
//   const [titleName, settitleName] = useState("");
//   const [open, setOpen] = useState("false");
//   const [notedata, setNoteData] = useState("");
//   //CHECK IF THE NOTE EXSITS

//   //LOGGED IN USER CHECK
//   const [view, setView] = useState(false);
//   useEffect(() => {
//     if (user) {
//       setView(true);
//     }
//   }, [user]);

//   //SET THE CURRENT VIEW OF THE SELECTED BOX
//   const theCurrentSelectedNoteBook = (e) => {
//     setId(e.target.getAttribute("data-id"));
//     setInputList([e.target.value]);
//   };
//   //NOTEDATA HANDLER
//   const notedataHandler = (e) => {
//     setNoteData(e.target.value);
//   };
//   ///HOW WE READ FROM THE STORE
//   const checkNotes = useSelector((state) => state.note);

//   //  (READ THUNK) RENDER AFTER FIRST TRY TO GET THE ACTUALY NOTES
//   useEffect(() => {
//     dispatch(getAllNotes(noteId));
//   }, [dispatch]);
//   /// READ THE VALUES OF THE CURRENT USER DATABASE
//   const currentNotes = Object.values(checkNotes).map((el) => (
//     <textarea
//       // className="button-7"
//       type="text"
//       value={el?.notedata}
//       data-id={el?.id}
//       onClick={theCurrentSelectedNoteBook}
//       onChange={notedataHandler}
//     >
//       {el?.notedata}
//     </textarea>
//   ));
//   //CREATING A NOTE
//   const createanote = () => {
//     dispatch(createNote(noteId));
//   };
//   return (
//     <>
//       {!view ? (
//         <p>Not allowed to see this page</p>
//       ) : (
//         <>
//           <p>Here</p>
//           {currentNotes}
//           <textarea></textarea>
//           <button onClick={createanote}>Create A Note!</button>
//         </>
//       )}
//     </>
//   );
// }
// export default MyNotes;
// frontend/src/components/LoginFormPage/index.js
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Redirect, useHistory, useParams } from "react-router-dom";

// import "./LoginForm.css";
import { createNote, getAllNotes, deleteAllNotes } from "../../store/notes";

function MyNotes() {
  const dispatch = useDispatch();
  const { noteId } = useParams();
  const history = useHistory();
  const arr = [];

  //CHECK IF THE USER IS LOGGED IN
  const user = useSelector((state) => state.session.user);

  //LOGGED IN USER CHECK
  const [view, setView] = useState(false);

  //THIS IS WHERE THE ARRAY FOR THE VIEW IS
  const [inputList, setInputList] = useState("");
  const [id, setId] = useState(0);
  const userId = user?.id;
  const [title, setTitle] = useState(false);
  const [titleName, settitleName] = useState("");
  const [open, setOpen] = useState("false");

  ///HOW WE READ FROM THE STORE
  const checkNotes = useSelector((state) => state.note);

  //SET THE CURRENT VIEW OF THE SELECTED BOX
  const theCurrentSelectedNoteBook = (e) => {
    let title = e.target.getAttribute("data-id");
    let data = e.target.getAttribute("data-note");
    setId(e.target.getAttribute("data-id"));
    setInputList(`${title} ${data}`);
  };

  /// READ THE VALUES OF THE CURRENT USER DATABASE
  const currentNoteTitle = Object.values(checkNotes).map((el) => (
    <>
      <div
        className="button-7"
        value={el?.title}
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
  /// READ THE VALUES OF THE CURRENT USER DATABASE
  // const currentNoteData = Object.values(checkNotes).map((el) => (
  //   <textarea
  //     className="button-7"
  //     value={el?.notedata}
  //     data-id={el?.id}
  //     onClick={theCurrentSelectedNoteBook}
  //   >
  //     {el?.title}
  //   </textarea>
  // ));

  //  (READ THUNK) RENDER AFTER FIRST TRY TO GET THE ACTUALY NOTES
  useEffect(() => {
    dispatch(getAllNotes(noteId));
  }, [dispatch]);

  //CHECK THE USER EXISTENCE
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  ///CHANING THE VALUE OF THE CURRENT INPUT
  const changeValue = (e) => {
    console.log(e.target.value, ` what the fuck is this shit??`);
    setInputList(e.target.value);
  };

  /// (UPDATE THUNK) SAVING THE NEW NOTE THE UPDATE THE CRUD THUNK
  // const updatenotebook = () => {
  //   dispatch(saveNotebooks(id, inputList));
  // };

  //DELETEING NOTEBOOK
  const deletenotebook = () => {
    dispatch(deleteAllNotes(id));
    setInputList([]);
  };

  //CREATING NOTEBOOK
  const createnotebook = () => {
    setTitle(true);
  };

  const submitTitle = (e) => {
    e.preventDefault();
    dispatch(createNote(titleName, userId));
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
            {/* <ul className="thenotes">{currentNoteTitle}</ul> */}
            <ul className="thenotes">
              {currentNoteTitle}
              {/* {currentNoteData} */}
            </ul>
            <div className="readandedit">
              {/* THIS IS WHERE WE WILL UPDATE THE NOTEBOOK THE UPDATE OF CRUD 2/4 */}
              <textarea value={inputList} onChange={changeValue}></textarea>
              {/* <button onClick={updatenotebook}>Save!</button> */}
              <button onClick={deletenotebook}>Delete NoteBook!</button>
              <button onClick={opennotebook}>Open Notebook!</button>
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

export default MyNotes;
