// CORE
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ACTIONS
import { getUsersAction } from "./store/actions/actions";
// SELECTORS
import { usersSelector } from "./store/selectors/selectors";

export const App = () => {
  const dispatch = useDispatch();
  const dataUsers = useSelector(usersSelector);

  useEffect(() => {
    dispatch(getUsersAction());
  }, [dispatch]);

  return (
    <div>
      <h1>SAGA</h1>

      {dataUsers.map((item) => (
        <div key={item.address.zipcode}>
          <h2>{item.name}</h2>
        </div>
      ))}
    </div>
  );
};
