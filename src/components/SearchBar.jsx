import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchPostAndComments } from '../features/posts/postSlice';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(searchTerm));
  };

  return (
    <form onSubmit={handleSubmit} className="search-bar">
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search Reddit..."
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
