// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// COMPONENTS
import { Loader } from "../loader/Loader";
import { UserItem } from "../userItem/UserItem";
import { Error } from "../error/Error";
// ACTIONS
import { getUsersAction } from "../../store/actions/actions";
//SELECTORS
import {
  selectUsers,
  selectUsersError,
  selectUsersIsLoading,
} from "../../store/selectors/selectors";
// STYLES
import { useStyle } from "./style";
// MUI
import { Grid } from "@mui/material";

export const Main = () => {
  const classes = useStyle();
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
        <Error error={error} />
      ) : (
        <>
          <h2 className={classes.usersTitle}>USERS:</h2>
          <Grid container spacing={2}>
            {users.map((item) => (
              <UserItem key={item.id} item={item} />
            ))}
          </Grid>
        </>
      )}
    </>
  );
};
