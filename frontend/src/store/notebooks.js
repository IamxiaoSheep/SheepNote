import { csrfFetch } from "./csrf";

const GET_ALL_THE_NOTEBOOKS = "notebooks/all_notebook";
const CREATE_A_NOTEBOOK = "notebooks/create_notebook";
const UPDATE_A_NOTEBOOK = "notebooks/update_notebook";
const DELETE_A_NOTEBOOK = "notebooks/delete_notebook";

// READING WORKING
const getNotebooks = (notebooks) => {
  return {
    type: GET_ALL_THE_NOTEBOOKS,
    notebooks,
  };
};
//CREATE WORKING
const addNotebook = (notebooks) => {
  return {
    type: CREATE_A_NOTEBOOK,
    notebooks,
  };
};
//UPDATE WORKING
const updateNotebook = (notebooks) => {
  return {
    type: UPDATE_A_NOTEBOOK,
    notebooks,
  };
};
//DELETE WORKING
const deleteNotebook = (notebooks) => {
  return {
    type: DELETE_A_NOTEBOOK,
    notebooks,
  };
};

// READ THUNK
export const getAllNotebooks = () => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook");
  const data = await response.json();
  dispatch(getNotebooks(data));
  return response;
};

//UPDATE THUNK
export const saveNotebooks = (id, input) => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook", {
    method: "PUT",
    body: JSON.stringify({ id, input }),
  });
  const data = await response.json();
  if (data.length === 0) {
    return [`No length`];
  }
  dispatch(updateNotebook(data));
  return response;
};

//DELETE THUNK
export const deleteNotebooks = (id) => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  if (data.length === 0) {
    console.log(`Come here`);
    return;
  }
  dispatch(deleteNotebook(data));
  return response;
};

//CREATE THUNK
export const createNotebooks = (titleName, id) => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook", {
    method: "POST",
    body: JSON.stringify({ titleName, id }),
  });
  const notebooks = await response.json();
  dispatch(addNotebook(notebooks));
  return notebooks;
};

const initialState = { notebooks: null };

const notebookReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case GET_ALL_THE_NOTEBOOKS:
      newState = {};
      action.notebooks.forEach((notebook) => {
        newState[notebook.id] = notebook;
      });
      return newState;
    case CREATE_A_NOTEBOOK:
      return { ...state, notebooks: action.notebooks };
    case UPDATE_A_NOTEBOOK:
      newState = { ...state };
      newState[action.notebooks.id] = action.notebooks;
      return newState;
    case DELETE_A_NOTEBOOK:
      newState = { ...state };
      delete newState[action.notebooks];
      return newState;
    default:
      return state;
  }
};

export default notebookReducer;
