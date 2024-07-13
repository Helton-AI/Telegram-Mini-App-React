import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import "immer";

export interface GlobalStates {
  address?: string;
}

const initialState: GlobalStates = {
  address: undefined,
};

export const login = createAsyncThunk<string>("global/login", async () => {
  if (window.ethereum) {
    try {
      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      return accounts[0];
    } catch (error) {
      console.error(error);
      throw error;
    }
  } else {
    throw "No MetaMask";
  }
});

export const globalSlice = createSlice({
  name: "global",
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(login.fulfilled, (state, action) => {
      state.address = action.payload;
    });
  },
});

export default globalSlice.reducer;
