// CONSTS
import { SET_USERS } from "../consts/consts";

const initialState = {
  users: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
      };
    default:
      return state;
  }
};
