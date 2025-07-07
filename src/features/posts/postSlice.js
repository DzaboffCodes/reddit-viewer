import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    posts: [],
    isLoading: false,
    hasError: false,
};

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