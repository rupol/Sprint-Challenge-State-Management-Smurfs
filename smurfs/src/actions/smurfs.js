import axios from "axios";

export const FETCH_SMURF_START = "FETCH_SMURF_START";
export const FETCH_SMURF_SUCCESS = "FETCH_SMURF_SUCCESS";
export const FETCH_SMURF_ERROR = "FETCH_SMURF_ERROR";
export const ADD_SMURF = "ADD_SMURF";

export function fetchSmurfs() {
  return dispatch => {
    dispatch({ type: FETCH_SMURF_START });

    axios
      .get("http://localhost:3333/smurfs")
      .then(res => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: err.response });
      });
  };
}

export function addSmurf(smurf) {
  return dispatch => {
    axios
      .post("http://localhost:3333/smurfs", smurf)
      .then(res => {
        dispatch({ type: FETCH_SMURF_SUCCESS, payload: res.data });
      })
      .catch(err => {
        dispatch({ type: FETCH_SMURF_ERROR, payload: err.response });
      });
  };
}
