import React, { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../store/store";
import { getUsers } from "./state/homeActions";

function HomeScreen() {
  const dispatch = useAppDispatch();
  const users = useAppSelector((state) => state.homeSlice.users);
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div>
      {users?.map((user) => {
        return <p>{user.name?.first + " " + user?.name?.last}</p>;
      })}
    </div>
  );
}

export default HomeScreen;
