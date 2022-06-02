import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";

import { createNote } from "../../store/notes";

function MyNotes() {
  const { noteId } = useParams();
  const dispatch = useDispatch();

  //CHECK IF THE USER IS LOGGED IN
  const user = useSelector((state) => state.session.user);
  //LOGGED IN USER CHECK
  const [view, setView] = useState(false);
  useEffect(() => {
    if (user) {
      setView(true);
    }
  }, [user]);

  //CREATING A NOTE
  const createanote = () => {
    dispatch(createNote(noteId));
  };
  return (
    <>
      {!view ? (
        <p>Not allowed to see this page</p>
      ) : (
        <button onClick={createanote}>Create A Note!</button>
      )}
    </>
  );
}
export default MyNotes;
