import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../features/posts/postSlice.js";
import PostCard from "../components/PostCard";
import SearchBar from "../components/SearchBar";
import FilterBar from "../components/FilterBar"

const Home = () => {
  // Set up Redux
  const dispatch = useDispatch();
  const { posts, isLoading, hasError } = useSelector((state) => state.posts);

  // Fetch posts on initial load
  useEffect(() => {
    dispatch(fetchPosts());
  }, [dispatch]);

  return (
    <div>
      <h1>Reddit Viewer</h1>

      <SearchBar /> 
      <FilterBar />

      {isLoading && <p>Loading...</p>}
      {hasError && <p>Oops! Something went wrong.</p>}

      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Home;
