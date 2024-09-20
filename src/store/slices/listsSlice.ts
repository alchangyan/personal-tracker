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
      action: PayloadAction<{ id: List["id"], cardId: Card["id"] }>
    ) {
      console.log(state[0]);

      const indexOfList = state.findIndex(({ id }) => action.payload.id === id);
      console.log(indexOfList);

      state[indexOfList].cards.push(action.payload.cardId);
    },
    addList(state, action: PayloadAction<string>) {
      console.log(state);

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
