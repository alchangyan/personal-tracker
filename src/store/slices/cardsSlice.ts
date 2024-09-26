import {
  createSlice,
  PayloadAction,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";

const name = 'cards';

const cardsSlice = createSlice<
  Card[],
  SliceCaseReducers<Card[]>,
  typeof name,
  SliceSelectors<Card[]>
>({
  name,
  initialState: [],
  reducers: {
    addCard(state, action: PayloadAction<Card>) {
      state.push(action.payload);
    },
    getArrayById(state, action) {
      return state.filter(({id}) => action.payload.includes(id))
    }
  },
});

export const { addCard, getArrayById } = cardsSlice.actions;

export default cardsSlice;
