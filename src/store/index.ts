import { configureStore } from "@reduxjs/toolkit";
import listReducer from "./slices/listsSlice";

const store = configureStore({
  reducer: {
    lists: listReducer,
  },
});

export default store;
