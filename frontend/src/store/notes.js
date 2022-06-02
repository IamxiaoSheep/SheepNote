import { csrfFetch } from "./csrf";

const GET_ALL_THE_NOTE = "notes/all_notebook";
const CREATE_A_NOTE = "notes/create_notebook";
const UPDATE_A_NOTE = "notes/update_notebook";
const DELETE_A_NOTE = "notes/delete_notebook";

// READING WORKING
const getNote = (notes) => {
  return {
    type: GET_ALL_THE_NOTE,
    notes,
  };
};
// @TODO CREATE NOTE
const addNote = (notes) => {
  return {
    type: CREATE_A_NOTE,
    notes,
  };
};
// @TODO CREATE NOTE
const updatNote = (notes) => {
  return {
    type: UPDATE_A_NOTE,
    notes,
  };
};

//CREATE THUNK
export const createNote =
  (titleName, titleData, noteId) => async (dispatch) => {
    const response = await csrfFetch(`/api/profile/notebook/${noteId}`, {
      method: "POST",
      body: JSON.stringify({ titleName, titleData, noteId }),
    });

    const notes = await response.json();
    dispatch(addNote(notes));
    return notes;
  };

// READ THUNK
export const getAllNotes = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/notebook/${id}`);
  const data = await response.json();
  dispatch(getNote(data));
  console.log(data);
  return response;
};
// DELETE THUNK
export const deleteAllNotes = (id) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/notebook/${id}`);
  const data = await response.json();
  dispatch(getNote(data));

  return response;
};

// SAVE THUNK
export const saveNotes = (id, inputList, noteid) => async (dispatch) => {
  const response = await csrfFetch(`/api/profile/notebook/${noteid}`, {
    method: "PUT",
    body: JSON.stringify({ id, inputList, noteid }),
  });
  const data = await response.json();
  dispatch(updatNote(data));
  return response;
};

const initialState = { notes: null };

const noteReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_THE_NOTE:
      newState = {};
      action.notes.forEach((notes) => {
        newState[notes.id] = notes;
      });
      return newState;
    case CREATE_A_NOTE:
      return { ...state, notes: action.notes };
    case UPDATE_A_NOTE:
      newState = { ...state };
      newState[action.notes.id] = action.notes;
      return newState;
    case DELETE_A_NOTE:
      newState = { ...state };
      delete newState[action.notes];
      return newState;
    default:
      return state;
  }
};

export default noteReducer;
