import {
  useDispatch as useDefaultDispatch,
  useSelector as useDefaultSelector,
} from "react-redux";

import { combineSlices, configureStore } from "@reduxjs/toolkit";
import listsReducer from "./slices/listsSlice";
import cardsReducer from "./slices/cardsSlice";
import boardsReducer from "./slices/boardsSlice";
import modalReducer from "./slices/modalSlice";

const rootReducer = combineSlices(
  listsReducer,
  cardsReducer,
  boardsReducer,
  modalReducer
);

const store = configureStore({
  reducer: rootReducer,
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const useDispatch = useDefaultDispatch.withTypes<AppDispatch>();
export const useSelector = useDefaultSelector.withTypes<RootState>();

export default store;
