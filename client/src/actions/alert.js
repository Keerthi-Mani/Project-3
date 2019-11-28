import uuid from "uuid";
import { SET_ALERT, REMOVE_ALERT } from "./types";

//dispatch more than one action using thunk middleware
export const setAlert = (msg, alertType) => dispatch => {
  // UUID -> universal id
  const id = uuid.v4();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id }
  });
};
