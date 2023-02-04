import { createSlice } from "@reduxjs/toolkit";

interface ProfileState {
  isLoggedIn: boolean;
}

const initialState: ProfileState = {
  isLoggedIn: false,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    logIn: (state) => {
      state.isLoggedIn = true;
    },
  },
});

export const { logIn } = profileSlice.actions;

export default profileSlice.reducer;
