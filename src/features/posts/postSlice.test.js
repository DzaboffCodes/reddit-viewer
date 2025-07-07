// The goal of the test is to ensure that postSlice has the correct initial state when the app starts. 

import postSlice, {setLoading} from './postSlice';

describe ('postSlice', () => {
    it ("should return the initial state", () => {
        const initialState = postSlice(undefined, { type: undefined });

        expect(initialState).toEqual({
            posts: [],
            isLoading: false,
            hasError: false,
        });
    });

    it ("should update posts when setPosts is dispatched", () => {
        const mockData = [
            {id: 1, title: 'First Post'},
            {id: 2, title: 'Second Post'},
        ];

        const action = {
            type: 'posts/setPosts',
            payload: mockData,
        };

        const newState = postSlice(undefined, action);

        expect(newState.posts).toEqual(mockData);
    });

    it ("should update loading status when setLoading is true", () => {
        const loading = true;

        const action = setLoading(loading);

        const newState = postSlice(undefined, action);

        expect(newState.isLoading).toEqual(loading);
    })
});


