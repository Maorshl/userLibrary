import { Paths } from "../constants/path";
import { User } from "../models/users";
import Axios from "../utils/networkManager";

export const get10UsersApi = async () => {
  const response = await Axios.get<{ results?: User[] }>(Paths.users);
  return response?.data?.results;
};
