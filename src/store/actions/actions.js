// CONSTS
import { GET_USERS, SET_USERS, SET_USERS_ERROR } from "../consts/consts";

export const getUsersAction = () => ({
  type: GET_USERS,
});

export const setUsersAction = (payload) => ({
  type: SET_USERS,
  payload,
});

export const setUsersActionError = (payload) => ({
  type: SET_USERS_ERROR,
  payload,
});
