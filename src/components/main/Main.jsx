// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Loader } from "../loader/Loader";
import { UserItem } from "../userItem/UserItem";
// ACTIONS
import { getUsersAction } from "../../store/actions/actions";
//SELECTORS
import {
  selectUsers,
  selectUsersError,
  selectUsersIsLoading,
} from "../../store/selectors/selectors";
// MUI
import { Grid } from "@mui/material";

export const Main = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const error = useSelector(selectUsersError);
  const isLoading = useSelector(selectUsersIsLoading);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <p>{error}</p>
      ) : (
        <Grid container spacing={2}>
          {users.map((item) => (
            <UserItem key={item.id} item={item} />
          ))}
        </Grid>
      )}
    </>
  );
};
