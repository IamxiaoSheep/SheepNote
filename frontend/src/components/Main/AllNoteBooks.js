import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./sandbox.css";

// import * as notesActions from "../../store/notebooks";
import * as notebook from "../../store/notebooks";
const AllNotebooks = () => {
  const dispatch = useDispatch();
  const checkNotes = useSelector((state) => state.notebook);
  const session = useSelector((state) => state.session.user);

  useEffect(() => {
    dispatch(notebook.getAllNotebooks());
  }, [dispatch]);

  const cap = Object.values(checkNotes).map((el, index) => (
    <li key={index + el?.id}>{el?.notetitle}</li>
  ));
  return <section>{session ? <ul>{cap}</ul> : <h2>Nothing here</h2>}</section>;
};

export default AllNotebooks;
