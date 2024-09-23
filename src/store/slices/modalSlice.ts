import {
  createSlice,
  SliceCaseReducers,
  SliceSelectors,
} from "@reduxjs/toolkit";

const name = "modal";

const modalSlice = createSlice<
  RootState['modal'],
  SliceCaseReducers<RootState['modal']>,
  typeof name,
  SliceSelectors<RootState['modal']>
>({
  name,
  initialState: {
    open: false,
  },
  reducers: {
    openModal(state) {
      state.open = true;
    },
    closeModal(state) {
      state.open = false;
    },
    toggleModal(state) {
      state.open = !state.open;
    },
  },
});

export const { openModal, closeModal, toggleModal } = modalSlice.actions;

export default modalSlice;
