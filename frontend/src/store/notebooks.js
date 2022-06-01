import { csrfFetch } from "./csrf";

const GET_ALL_THE_NOTEBOOKS = "notebooks/all_notebook";
const CREATE_A_NOTEBOOK = "notebooks/create_notebook";
const UPDATE_A_NOTEBOOK = "notebokos/update-_notebook";

// WORKING THE READ
const getNotebooks = (notebooks) => {
  return {
    type: GET_ALL_THE_NOTEBOOKS,
    notebooks,
  };
};
//NOT WORKING YET THE CREATE
const addNotebook = (notebooks) => {
  return {
    type: CREATE_A_NOTEBOOK,
    notebooks,
  };
};
//
const updateNotebook = (notebooks) => {
  return {
    type: UPDATE_A_NOTEBOOK,
    notebooks,
  };
};

// Thunks GET THE NOTEBOOK TITLE THE READ OF CRUD
export const getAllNotebooks = () => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook");
  const data = await response.json();
  dispatch(getNotebooks(data));
  return response;
};

//UPDATE!!!  SAVE THE NOTEBOOK TITLE
export const saveNotebooks = (id, input) => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook", {
    method: "PUT",
    body: JSON.stringify({ id, input }),
  });
  const data = await response.json();
  dispatch(updateNotebook(data));
  return response;
};

//UPDATE!!!  SAVE THE NOTEBOOK TITLE
export const deleteNotebooks = (id) => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook", {
    method: "DELETE",
    body: JSON.stringify({ id }),
  });
  const data = await response.json();
  dispatch(updateNotebook(data));
  return response;
};
// export const createANotebook = (info) => async (dispatch) => {
//   const { userId, notetitle } = info;
//   const data = { userId, notetitle };
//   console.log(info);
//   const response = await csrfFetch("/api/profile/notebook", {
//     method: "POST",
//     body: JSON.stringify(data),
//   });
//   console.log(response);
//   const notebooks = await response.json();
//   console.log(notebooks);
//   dispatch(addNote(notebooks));
//   return response;
// };

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
      console.log(action.notebooks, `<----Reducer`);
      newState = { ...state };
      newState[action.notebooks.id] = action.notebooks;
      return newState;

    default:
      return state;
  }
};

export default notebookReducer;
