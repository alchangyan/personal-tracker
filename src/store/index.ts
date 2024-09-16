import { combineSlices, configureStore } from "@reduxjs/toolkit";
import listsReducer from "./slices/listsSlice";
import cardsReducer from "./slices/cardsSlice";

const rootReducer = combineSlices(listsReducer, cardsReducer);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
