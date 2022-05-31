import { csrfFetch } from "./csrf";

const GET_ALL_THE_NOTEBOOKS = "notebooks/all_notes";

// Action
const getNotebooks = (notebooks) => {
  return {
    type: GET_ALL_THE_NOTEBOOKS,
    notebooks,
  };
};

// Thunks
export const getAllNotebooks = () => async (dispatch) => {
  const response = await csrfFetch("/api/profile/notebook");
  const data = await response.json();
  dispatch(getNotebooks(data));
  return response;
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
    default:
      return state;
  }
};

export default notebookReducer;
