import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  isLoading: boolean;
  userId: string;
  error: null | string;
}

const initialState: ProfileState = {
  isLoading: false,
  userId: "",
  error: null,
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.userId = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.userId = "";
      state.error = action.payload;
    },
    logOut: (state) => {
      state.isLoading = false;
      state.userId = "";
      state.error = null;
    },
  },
});

export const { startLogin, loginFailure, loginSuccess, logOut } =
  profileSlice.actions;

export default profileSlice.reducer;
