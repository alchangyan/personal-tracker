import { fetchLists } from "@/api/list";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchListsRequest = createAsyncThunk(
  "company/fetchLists",
  async (boardId: string, { rejectWithValue }) => {
    try {
      const response = await fetchLists(boardId);
      return response;
    } catch (error) {
      return rejectWithValue(
        error instanceof Error
          ? error.message
          : "Failed to fetch company details"
      );
    }
  }
);

interface BoardsState {
  data: List[];
  error: null | string;
  loading: boolean;
}

const initialState: BoardsState = {
  data: [],
  error: null,
  loading: false,
};

const name = "lists";

const listsSlice = createSlice({
  name,
  initialState,
  reducers: {
    resetLists: (state) => {
      state.data = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchListsRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchListsRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchListsRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export const { resetLists } = listsSlice.actions;

export default listsSlice;
