import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  isLoading: boolean;
  userId: string;
  error: null | string;
  displayName: string;
  email: string;
}

const initialState: ProfileState = {
  isLoading: false,
  userId: "",
  error: null,
  displayName: "",
  email: "",
};

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    startLogin: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{
        userId: string;
        displayName: string;
        email: string;
      }>
    ) => {
      state.isLoading = false;
      state.userId = action.payload.userId;
      state.error = null;
      state.displayName = action.payload.displayName;
      state.email = action.payload.email;
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
    updateDisplayName: (state, action: PayloadAction<string>) => {
      state.displayName = action.payload;
    },
  },
});

export const {
  startLogin,
  loginFailure,
  loginSuccess,
  logOut,
  updateDisplayName,
} = profileSlice.actions;

export default profileSlice.reducer;
