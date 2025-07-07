import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../features/posts/postSlice.js";
import PostCard from "../components/PostCard";

const Home = () => {
  // Set up local state
  const [searchTerm, setSearchTerm] = useState('');

  // Set up Redux
  const dispatch = useDispatch();
  const { posts, isLoading, hasError } = useSelector((state) => state.posts);

  // Fetch posts on initial load
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  // Submit handler for search
  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(fetchPosts(searchTerm));
  };

  return (
    <div>
      <h1>Reddit Viewer</h1>

      <form onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search Reddit..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button type="submit">Search</button>
      </form>

      {isLoading && <p>Loading...</p>}
      {hasError && <p>Oops! Something went wrong.</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Home;
