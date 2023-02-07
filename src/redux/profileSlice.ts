import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ProfileState {
  isLoading: boolean;
  userId: null | string;
  error: null | string;
}

const initialState: ProfileState = {
  isLoading: false,
  userId: null,
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
      state.userId = null;
      state.error = action.payload;
    },
  },
});

export const { startLogin, loginFailure, loginSuccess } = profileSlice.actions;

export default profileSlice.reducer;
