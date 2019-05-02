// import /* we need our action types here*/ "../actions";

import {
  FETCH_CHARACTER_START,
  FETCH_CHARACTER_SUCCESS,
  FETCH_CHARACTER_FAILURE
}
  from '../actions';


const initialState = {
  characters: []
  isLoading: true,
  error: null,
  // Array characters, Boolean fetching, null error.
  
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {

    case FETCH_CHARACTER_FETCHING:
      return {
        ...state,
        isLoading: true,
        error: ''
      }
    
    case FETCH_CHARACTER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        error: '',
        CharacteroftheDay: action.payload
      }
    
    case FETCH_CHARACTER_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: '',
        CharacteroftheDay: action.payload
      }



    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
