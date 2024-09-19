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
  initialState: [
    {
      id: 1,
      title: 'Test'
    }
  ],
  reducers: {
    addCard(state, action: PayloadAction<{ title: string }>) {
      state.push({
        id: new Date().getTime(),
        title: action.payload.title,
      });
    },
    getArrayById(state, action) {
      return state.filter(({id}) => action.payload.includes(id))
    }
  },
});

export const { addCard, getArrayById } = cardsSlice.actions;

export default cardsSlice;
