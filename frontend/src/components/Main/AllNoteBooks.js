import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import * as notesActions from "../../store/notebooks";
import * as notebook from "../../store/notebooks";
const AllNotebooks = () => {
  const dispatch = useDispatch();
  const checkNotes = useSelector((state) => state.notebook);

  useEffect(() => {
    dispatch(notebook.getAllNotebooks());
  }, [dispatch]);

  const cap = Object.values(checkNotes).map((el, index) => (
    <li key={index + el?.id}>{el?.notedata}</li>
  ));
  return (
    <section>
      <h2>Test User</h2>
      <ul>{cap}</ul>
    </section>
  );
};

export default AllNotebooks;
