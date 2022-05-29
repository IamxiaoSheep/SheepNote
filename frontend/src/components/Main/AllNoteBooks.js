import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// import * as notesActions from "../../store/notebooks";
import * as notebook from "../../store/notebooks";
const AllNotebooks = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(notebook.getAllNotebooks());
    console.log(`right after the dispatch`);
  }, [dispatch]);

  const checkNotes = useSelector((state) => state.notebook);

  // console.log(Object.values(checkNotes), `Without dispatch`);
  console.log(checkNotes, `regular`);
  const mp = checkNotes.map((el) => {
    return <li key={el.id}>{el.username}</li>;
  });
  // useEffect(() => {
  //   console.log(Object.keys(checkNotes), `where the fuck is this?`);
  // }, []);
  return (
    <section>
      <h2>Test User</h2>
      {/* <p>
        {checkNotes.map((el) => {
          return el.username;
        })}
      </p> */}
      <ul>{mp}</ul>
    </section>
  );
};

export default AllNotebooks;
