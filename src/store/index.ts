import { combineSlices, configureStore } from "@reduxjs/toolkit";
import listsReducer from "./slices/listsSlice";
import cardsReducer from "./slices/cardsSlice";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineSlices(listsReducer, cardsReducer, modalReducer);

const store = configureStore({
  reducer: rootReducer,
});

export default store;
