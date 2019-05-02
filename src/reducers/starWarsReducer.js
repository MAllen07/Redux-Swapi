// import /* we need our action types here*/ "../actions";

import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
} from "../actions";

const initialState = {
  characters: [],
  fetching: true,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CHARACTER_START:
      return { ...state, fetching: true };

    case FETCH_CHARACTER_SUCCESS:
      return { ...state, fetching: false, error: action.payload };

    case FETCH_CHARACTER_FAILURE:
      return { ...state, fetching: false, error: action.payload };

    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
