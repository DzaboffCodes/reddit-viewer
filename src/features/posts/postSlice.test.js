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


describe('fetchPosts thunk with search term', () => {
  it('should fetch posts based on a search term and dispatch the correct actions', async () => {
    const dispatch = jest.fn();
    const getState = () => {};

    const searchTerm = 'cake recipes';
    const encodedTerm = encodeURIComponent(searchTerm);

    const mockData = {
      data: {
        children: [
          { data: { id: '1', title: 'Cake Recipe 1' } },
          { data: { id: '2', title: 'Cake Recipe 2' } },
        ],
      },
    };

    global.fetch = jest.fn(() =>
      Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockData),
      })
    );

    await fetchPosts(searchTerm)(dispatch, getState);

    expect(fetch).toHaveBeenCalledWith(`https://www.reddit.com/search.json?q=${encodedTerm}`);
    expect(dispatch).toHaveBeenCalledWith(setLoading(true));
    expect(dispatch).toHaveBeenCalledWith(setPosts([
      { id: '1', title: 'Cake Recipe 1' },
      { id: '2', title: 'Cake Recipe 2' },
    ]));
    expect(dispatch).toHaveBeenCalledWith(setLoading(false));
  });
});

