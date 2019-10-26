import {
  FETCH_SMURF_START,
  FETCH_SMURF_SUCCESS,
  FETCH_SMURF_ERROR,
  ADD_SMURF
} from "../actions/smurfs";

const initialState = {
  smurfs: [],
  isLoading: false,
  error: null
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SMURF_START:
      return {
        ...state,
        isLoading: true,
        error: null
      };
    case FETCH_SMURF_SUCCESS:
      return {
        ...state,
        smurfs: action.payload,
        isLoading: false
      };
    case FETCH_SMURF_ERROR:
      return {
        ...state,
        error: action.payload,
        isLoading: false
      };
    case ADD_SMURF:
      return {
        ...state,
        smurfs: [
          ...state.smurfs,
          {
            name: action.payload.name,
            age: action.payload.age,
            height: action.payload.height,
            id: Date.now()
          }
        ]
      };
    default:
      return state;
  }
}
