import { createSlice } from "@reduxjs/toolkit";
import { login } from "../global/slice";
import "immer";

export interface GlobalStates {
  errorMessage?: string;
}

const initialState: GlobalStates = {
  errorMessage: undefined,
};

export const errorSlice = createSlice({
  name: "error",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.rejected, (state, action) => {
      state.errorMessage = action.error.message;
    });
  },
});

export default errorSlice.reducer;
