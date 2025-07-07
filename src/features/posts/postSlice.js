import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';


const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
};

export const fetchPosts = createAsyncThunk(
  'posts/fetchPosts',
  async (searchTerm = '', thunkAPI) => {
    const { dispatch } = thunkAPI;
    try {
      dispatch(setLoading(true));
      let url = '';

      if (searchTerm) {
        url = `https://www.reddit.com/search.json?q=${encodeURIComponent(searchTerm)}`;
      } else {
        url = 'https://www.reddit.com/r/popular.json';
      }

      const response = await fetch(url);
      const json = await response.json();
      const posts = json.data.children.map(child => child.data);

      dispatch(setPosts(posts));
      dispatch(setLoading(false));
    } catch (error) {
      dispatch(setError(true));
      dispatch(setLoading(false));
    }
  }
);


const postSlice = createSlice ({
    name: 'posts',
    initialState,
    reducers: { 
        setPosts(state, action) {
            state.posts = action.payload;
        },
        setLoading(state, action) {
            state.isLoading = action.payload;
        },
        setError(state, action) {
            state.hasError = action.payload;
        },
    }
});

export const { setPosts, setLoading, setError} = postSlice.actions;
export default postSlice.reducer;