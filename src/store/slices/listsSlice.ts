import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";

const name = "lists";

const listsSlice = createSlice<
  List[],
  SliceCaseReducers<List[]>,
  typeof name,
  SliceSelectors<List[]>
>({
  name,
  initialState: [],
  reducers: {
    addCardToList(
      state,
      action: PayloadAction<{ listId: List["id"]; cardId: Card["id"] }>
    ) {
      const indexOfList = state.findIndex(({ id }) => action.payload.listId === id);

      state[indexOfList].cards.push(action.payload.cardId);
    },
    addList(state, action: PayloadAction<string>) {
      state.push({
        id: new Date().getTime(),
        title: action.payload,
        cards: [1],
      });
    },
  },
});

export const { addList, addCardToList } = listsSlice.actions;

export default listsSlice;
