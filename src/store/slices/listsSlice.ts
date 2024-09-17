import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";

const name = 'lists';

const listsSlice = createSlice<
  List[],
  SliceCaseReducers<List[]>,
  typeof name,
  SliceSelectors<List[]>
>({
  name,
  initialState: [],
  reducers: {
    addList(state, action: PayloadAction<string>) {
      state.push({
        id: new Date().getTime(),
        title: action.payload,
        cards: [],
      });
    },
  },
});

export const { addList } = listsSlice.actions;

export default listsSlice;
