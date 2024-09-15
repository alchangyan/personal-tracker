import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";

const listsSlice = createSlice<
  any[],
  SliceCaseReducers<any>,
  string,
  SliceSelectors<any>,
  "todos"
>({
  name: "todos",
  initialState: [],
  reducers: {
    addList(state, action: PayloadAction<{ title: string }>) {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
      });
    },
  },
});

export const { addList } = listsSlice.actions;
export default listsSlice.reducer;
