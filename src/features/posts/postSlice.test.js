// The goal of the test is to ensure that postSlice has the correct initial state when the app starts. 

import postSlice, {setPosts, setLoading, setError} from './postSlice';
import { fetchPosts } from './postSlice'; 

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
    });

    it ('should update the error status when setError is true', () => {
        const error = true; 

        const action = setError(error);

        const newState = postSlice(undefined, action);

        expect(newState.hasError).toEqual(error);
    })
});

// ...existing code...

describe('fetchPosts thunk', () => {
    it('should dispatch loading, setPosts, and stop loading on success', async () => {
        const dispatch = jest.fn();
        const getState = () => {};

        // Mocked Reddit API Response
        const mockData = {
            data: {
                children: [
                    { data: { id: '1', title: "Test Post 1" } },
                    { data: { id: '2', title: "Test Post 2" } },
                ],
            },
        };

        // Mock Fetch 
        global.fetch = jest.fn(() =>
            Promise.resolve({
                ok: true,
                json: () => Promise.resolve(mockData),
            })
        );

        await fetchPosts()(dispatch, getState, undefined);

        expect(dispatch).toHaveBeenCalledWith(setLoading(true));
        expect(dispatch).toHaveBeenCalledWith(setPosts([
            { id: '1', title: "Test Post 1" },
            { id: '2', title: "Test Post 2" },
        ]));
        expect(dispatch).toHaveBeenCalledWith(setLoading(false));
    });
});
