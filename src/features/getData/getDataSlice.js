import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  searchedData: [],
  search: "",
};

export const getData = createAsyncThunk(
  "data/getData",
  async (current, { rejectWithValue, dispatch }) => {
    const res = await axios.get(
      `https://jsonplaceholder.typicode.com/posts?_start=${current}${
        current > 0 ? "0" : " "
      }&_limit=10`
    );
    dispatch(setData(res.data));
  }
);

export const getDataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    setData: (state, action) => {
      state.data = action.payload;
    },
    sortData: (state) => {
      state.data = state.data.sort((a, b) =>
        a.title !== b.title ? (a.title < b.title ? -1 : 1) : 0
      );
    },
    sortDataById: (state, action) => {
      state.data = state.data.sort((a, b) =>
        action.payload.status ? b.id - a.id : a.id - b.id
      );
    },
    handleSearch: (state, action) => {
      state.search = action.payload;
    },
  },
});

export const { handleSearch } = getDataSlice.actions;
export const { sortData } = getDataSlice.actions;
export const { sortDataById } = getDataSlice.actions;
export const { setData } = getDataSlice.actions;
export default getDataSlice.reducer;
