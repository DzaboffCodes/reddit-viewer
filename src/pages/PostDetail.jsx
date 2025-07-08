// src/pages/PostDetail.jsx
import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, fetchPostAndComments } from '../features/posts/postSlice';

const PostDetail = () => {
  const { subreddit, postId } = useParams();
  const dispatch = useDispatch();

  const { post, comments, isLoading, hasError } = useSelector((state) => state.posts);

  useEffect(() => {
    console.log('Params:', subreddit, postId); // <-- Add this line
    if (subreddit && postId) {
      dispatch(fetchPostAndComments({ subreddit, postId }));
    }
  }, [dispatch, subreddit, postId]);

  if (isLoading) {
    return <p>Loading post details...</p>;
  }

  if (hasError) {
    return <p>Oops! Something went wrong while loading post details.</p>;
  }

  if (!post) {
    return <p>No post found.</p>;
  }

  return (
    <article>
      <header>
        <h2>{post.title}</h2>
        <p>Posted by {post.author}</p>
      </header>

      {post.thumbnail && post.thumbnail.startsWith('http') && (
        <img src={post.thumbnail} alt="Post thumbnail" />
      )}

      {post.selftext && <p>{post.selftext}</p>}

      <footer>
        <p>Upvotes: {post.ups}</p>
        <button>Comments ({post.num_comments})</button>
      </footer>

      <section>
        <h3>Comments</h3>
        {comments.length === 0 && <p>No comments yet.</p>}
        <ul>
          {comments.map((comment) => (
            <li key={comment.id}>
              <p><strong>{comment.author}</strong></p>
              <p>{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PostDetail;

