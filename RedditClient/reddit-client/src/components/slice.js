import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
    searchText: 'asd',
    currentFilters: [],
    loading: false,
    tileData: [],
}

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    search: (state, action) => {
        console.log(action);
        console.log(state.searchText);
    },
    addFilter: (state, action) => {},
    removeFilter: (state, action) => {},
    maximize: (state, action) => {},
    minimize: (state, action) => {},
  },
});

export default slice

export const selectLoading = (state) => state.loading;

export const { search } = slice.actions;
