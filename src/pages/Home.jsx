import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from "../features/posts/postSlice.js";
import PostCard from "../components/PostCard";

const Home = () => {
  const dispatch = useDispatch();
  const { posts, isLoading, hasError, filter } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPosts(filter));
  }, [dispatch, filter]);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {hasError && <p>Oops! Something went wrong.</p>}
      {posts.map((post) => (
        <PostCard key={post.id} post={post}/>
      ))}
    </div>
  );
};

export default Home;
