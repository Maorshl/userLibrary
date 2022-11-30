import { get10UsersApi } from "../../../apiController/usersApi";
import { AppThunk } from "../../../store/store";
import { setUsers } from "./homeSlice";

export const getUsers = (): AppThunk => async (dispatch) => {
  try {
    const users = await get10UsersApi();
    users && dispatch(setUsers(users));
  } catch (error) {
    console.log(error);
  }
};
