import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/users";

export interface HomeState {
  users: User[];
  isModalOpen: boolean;
  userToEdit: User;
  userToEditIndex: number;
}

const initialState: HomeState = {
  users: [],
  isModalOpen: false,
  userToEdit: {},
  userToEditIndex: 0,
};

export const homeSlice = createSlice({
  name: "homeSlice",
  initialState,
  reducers: {
    setUsers: (state, action: PayloadAction<User[]>) => {
      state.users = action.payload;
    },
    toggleModal: (state) => {
      const lastState = state.isModalOpen;
      state.isModalOpen = !lastState;
    },
    setUserToEdit: (state, action: PayloadAction<User>) => {
      state.userToEdit = action.payload;
    },
    setUserToEditIndex: (state, action: PayloadAction<number>) => {
      state.userToEditIndex = action.payload;
    },
    saveEditedUser: (state, action: PayloadAction<User>) => {
      state.users[state.userToEditIndex] = action.payload;
    },
  },
});

export const {
  setUsers,
  toggleModal,
  setUserToEdit,
  setUserToEditIndex,
  saveEditedUser,
} = homeSlice.actions;

export default homeSlice.reducer;
