import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
  posts: [],
  post: null,           // Selected post details
  comments: [],         // Comments for the selected post
  isLoading: false,
  hasError: false,
};

// Thunk to fetch a list of posts (for Home page)
export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (subreddit = '', thunkAPI) => {
    try {
      const url = subreddit
        ? `https://www.reddit.com/r/${subreddit}.json`
        : `https://www.reddit.com/.json`;
      const response = await fetch(url);
      const json = await response.json();
      return json.data.children.map(child => child.data);
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

// Thunk to fetch post details and comments (for PostDetail page)
export const fetchPostAndComments = createAsyncThunk(
  'posts/fetchPostAndComments',
  async ({ subreddit, postId }, thunkAPI) => {
    try {
      const url = `https://www.reddit.com/r/${subreddit}/comments/${postId}.json`;
      const response = await fetch(url);
      const json = await response.json();
      console.log('Reddit API response:', json); // <-- Add this line
      const post = json[0].data.children[0]?.data;
      const comments = json[1].data.children
        .filter(child => child.kind === 't1')
        .map(child => child.data);
      return { post, comments };
    } catch (error) {
      return thunkAPI.rejectWithValue();
    }
  }
);

const postSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch posts
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.posts = action.payload;
        state.hasError = false;
      })
      .addCase(fetchPosts.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      })
      // Fetch post and comments
      .addCase(fetchPostAndComments.pending, (state) => {
        state.isLoading = true;
        state.hasError = false;
        state.post = null;
        state.comments = [];
      })
      .addCase(fetchPostAndComments.fulfilled, (state, action) => {
        state.isLoading = false;
        state.post = action.payload.post;
        state.comments = action.payload.comments;
        state.hasError = false;
      })
      .addCase(fetchPostAndComments.rejected, (state) => {
        state.isLoading = false;
        state.hasError = true;
      });
  },
});

export default postSlice.reducer;