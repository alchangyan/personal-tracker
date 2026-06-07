import { fetchBoards } from "@/api/board";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchBoardsRequest = createAsyncThunk(
  "company/fetchBoards",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetchBoards();
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
  data: Board[];
  error: null | string;
  loading: boolean;
}

const initialState: BoardsState = {
  data: [],
  error: null,
  loading: false,
};

const name = "boards";

const boardsSlice = createSlice({
  name,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBoardsRequest.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchBoardsRequest.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchBoardsRequest.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});

export default boardsSlice;
