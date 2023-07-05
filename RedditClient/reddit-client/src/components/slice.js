import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchText: "art",
  currentFilters: [],
  loading: true,
  tileData: [],
};

export const fetchData = createAsyncThunk(
  "slice/fetchBySearchQuery",
  async (anUnusedVariable, thunkAPI) => {
    console.log("yeeyee");
    const res = await fetch(`https://www.reddit.com/r/${thunkAPI.getState().searchText}.json`);
    console.log(thunkAPI.getState());
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  }
);

export const slice = createSlice({
  name: "slice",
  initialState,
  reducers: {
    search: (state, action) => {
      // slice.searchText = action.payload
      console.log('search action reached')
      console.log(action);
      console.log(state.searchText);
    },
    addFilter: (state, action) => {},
    removeFilter: (state, action) => {},
    maximize: (state, action) => {},
    minimize: (state, action) => {},
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchData.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchData.fulfilled, (state, action) => {
        state.loading = false;
        console.log(action);
        state.tileData = action.payload;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        console.log(action)
        state.tileData = action.payload;
      });
  },
});

export default slice;

export const selectLoading = (state) => state.loading;

export const { search } = slice.actions;

