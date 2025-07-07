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
    }
})

export const { setPosts } = postSlice.actions;
export default postSlice.reducer;