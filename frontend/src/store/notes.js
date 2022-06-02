import { csrfFetch } from "./csrf";

const GET_ALL_THE_NOTE = "notes/all_notebook";
const CREATE_A_NOTE = "notes/create_notebook";
const UPDATE_A_NOTE = "notes/update_notebook";
const DELETE_A_NOTE = "notes/delete_notebook";

// @TODO CREATE NOTE
const addNote = (notes) => {
  return {
    type: CREATE_A_NOTE,
    notes,
  };
};

//CREATE THUNK
export const createNote = (noteId, notedata, title) => async (dispatch) => {
  const notebookId = noteId;
  const response = await csrfFetch(`/api/profile/notebook/${notebookId}`, {
    method: "POST",
    body: JSON.stringify({ notebookId, notedata, title }),
  });
  const notebooks = await response.json();
  dispatch(addNote(notebooks));
  // return notebooks;
};

const initialState = { notebooks: null };

const noteReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_THE_NOTE:
      newState = {};
      action.notebooks.forEach((notebook) => {
        newState[notebook.id] = notebook;
      });
      return newState;
    case CREATE_A_NOTE:
      return { ...state, notebooks: action.notebooks };
    case UPDATE_A_NOTE:
      newState = { ...state };
      newState[action.notebooks.id] = action.notebooks;
      return newState;
    case DELETE_A_NOTE:
      newState = { ...state };
      delete newState[action.notebooks];
      return newState;
    default:
      return state;
  }
};

export default noteReducer;
