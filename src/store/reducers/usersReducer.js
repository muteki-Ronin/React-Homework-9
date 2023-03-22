// CONSTS
import { SET_USERS, SET_USERS_ERROR } from "../consts/consts";

const initialState = {
  users: [],
  error: null,
  isLoading: true,
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USERS:
      return {
        ...state,
        users: [...action.payload],
        isLoading: false,
      };
    case SET_USERS_ERROR: {
      return { ...state, error: action.payload, isLoading: false };
    }
    default:
      return state;
  }
};
