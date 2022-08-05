import { configureStore } from "@reduxjs/toolkit";
import getDataSlice from "../features/getData/getDataSlice";

export const store = configureStore({
  reducer: {
    data: getDataSlice,
  },
});
