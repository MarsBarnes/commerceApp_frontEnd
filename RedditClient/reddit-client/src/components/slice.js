import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import { store } from "../app/store";

const initialState = {
  searchText: "art",
  currentFilters: [],
  loading: true,
  tileData: [],
  commentData: {},
  loadingComments: true,
};

export const fetchData = createAsyncThunk(
  "slice/fetchBySearchQuery",
  async (anUnusedVariable, thunkAPI) => {
    // console.log("yeeyee");
    const res = await fetch(
      `https://www.reddit.com/r/${thunkAPI.getState().searchText}.json`
    );
    console.log(thunkAPI.getState());
    if (res.ok) {
      return res.json();
    } else {
      throw new Error(res.status);
    }
  }
);

export const fetchComments = createAsyncThunk(
  "slice/fecthComments",
  async (i, thunkAPI) => {
    const article = thunkAPI.getState().tileData[i];
    console.log(`fetch comments article: ${article.data.id}`);
    const res = await fetch(
      // get article title
      // `https://api.reddit.com/r/${thunkAPI.getState().searchText}/comments/${
      //   thunkAPI.getState().tileData[i].data.id
      // }`
      `https://www.reddit.com${article.data.permalink.replace(/\/$/, "")}.json`
    );
    console.log(thunkAPI.getState());
    if (res.ok) {
      // console.log("wooohooo");
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
      // console.log(action.payload);
      state.searchText = action.payload;
      // console.log("search action reached");
      // console.log(action);
      // console.log(state.searchText);
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
        // console.log(action);
        state.tileData = action.payload.data.children;
      })
      .addCase(fetchData.rejected, (state, action) => {
        state.loading = false;
        console.log(action);
        state.tileData = action.payload;
      })
      .addCase(fetchComments.pending, (state) => {
        state.loadingComments = true;
      })
      .addCase(fetchComments.fulfilled, (state, action) => {
        state.loadingComments = false;
        let commentsObject = action.payload[1].data.children;
        console.log("commentsObject:", commentsObject);

        // Create an array of objects with index and comment data
        let commentsArray = commentsObject.map((item, index) => ({
          parentID: item.data.parent_id,
          data: item.data.body,
        }));
        const articleId = action.payload[0].data.children[0].data.id;
        console.log("article Id for comments", articleId);
        state.commentData[articleId] = commentsArray;
        console.log("commentData:", state.commentData);
      })
      .addCase(fetchComments.rejected, (state, action) => {
        state.loadingComments = false;
        state.commentData = action.payload;
      });
  },
});

export default slice;

export const selectLoading = (state) => state.loading;
export const selectSearchText = (state) => state.searchText;
export const selectTileData = (state) => state.tileData;
export const selectCommentData = (state) => state.commentData;

export const { search } = slice.actions;
