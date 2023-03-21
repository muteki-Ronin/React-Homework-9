// CONSTS
import { GET_USERS, SET_USERS } from "../consts/consts";

export const getUsersAction = () => ({
  type: GET_USERS,
});

export const setUsersAction = (payload) => ({
  type: SET_USERS,
  payload,
});
