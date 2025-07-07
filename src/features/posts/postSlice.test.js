// The goal of the test is to ensure that postSlice has the correct initial state when the app starts. 

import postReducer from './postSlice';

describe ('postSlice', () => {
    it ("should return the initial state", () => {
        const initialState = postReducer(undefined, { type: undefined });

        expect(initialState).toEqual({
            posts: [],
            isLoading: false,
            hasError: false,
        });
    });
});
