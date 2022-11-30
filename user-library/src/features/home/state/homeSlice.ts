import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/users";

export interface HomeState {
  users: User[];
}

const initialState: HomeState = {
  users: [],
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.users = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setUsers } = homeSlice.actions;

export default homeSlice.reducer;