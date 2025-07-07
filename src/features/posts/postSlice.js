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
        }
    }
})

export const { setPosts, setLoading } = postSlice.actions;
export default postSlice.reducer;