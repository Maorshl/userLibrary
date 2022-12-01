import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { User } from "../../../models/users";

export interface HomeState {
  users: User[];
  isModalOpen: boolean;
  userToEdit?: User;
  userToEditIndex: number;
}

const initialState: HomeState = {
  users: [],
  isModalOpen: false,
  userToEdit: undefined,
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
    setUerToEditEmail: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.email = action.payload;
      }
    },
    setUerToEditFirstName: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.name.first = action.payload;
      }
    },
    setUerToEditLastName: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.name.last = action.payload;
      }
    },
    setUerToEditStreetName: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.location.street.name = action.payload;
      }
    },
    setUerToEditStreetNumber: (state, action: PayloadAction<number>) => {
      if (state.userToEdit) {
        state.userToEdit.location.street.number = action.payload;
      }
    },
    setUerToEditCountry: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.location.country = action.payload;
      }
    },
    setUerToEditCity: (state, action: PayloadAction<string>) => {
      if (state.userToEdit) {
        state.userToEdit.location.city = action.payload;
      }
    },
    saveEditUser: (state, action: PayloadAction<User>) => {
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
  setUerToEditEmail,
  setUerToEditFirstName,
  setUerToEditLastName,
  setUerToEditStreetName,
  setUerToEditStreetNumber,
  setUerToEditCountry,
  setUerToEditCity,
  saveEditUser,
} = homeSlice.actions;

export default homeSlice.reducer;
