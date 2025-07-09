import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPostAndComments } from '../features/posts/postSlice';

const fallbackImg = `${import.meta.env.BASE_URL}fallback.png`;

const PostDetail = () => {
  const { subreddit, postId } = useParams();
  const dispatch = useDispatch();
  const { post, comments, isLoading, hasError } = useSelector((state) => state.posts);

  // Handle fallback for thumbnail
  const [imgSrc, setImgSrc] = useState(
    post && post.thumbnail && post.thumbnail.startsWith('http')
      ? post.thumbnail
      : fallbackImg
  );

  useEffect(() => {
    if (subreddit && postId) {
      dispatch(fetchPostAndComments({ subreddit, postId }));
    }
  }, [dispatch, subreddit, postId]);

  // Update imgSrc if post changes
  useEffect(() => {
    setImgSrc(
      post && post.thumbnail && post.thumbnail.startsWith('http')
        ? post.thumbnail
        : fallbackImg
    );
  }, [post]);

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
    <article className="post-detail">
      <header>
        <div className="post-meta" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginBottom: '0.5rem' }}>
          <span className="post-subreddit">{`r/${post.subreddit}`}</span>
          <span className="post-timestamp">
            {new Date(post.created_utc * 1000).toLocaleString()}
          </span>
        </div>
        <h2 className="post-title" style={{ textAlign: 'center' }}>{post.title}</h2>
        <p style={{ textAlign: 'center', color: 'var(--color-secondary-text)' }}>
          Posted by <strong>{post.author}</strong>
        </p>
      </header>

      <div className="post-thumbnail-wrapper">
        <img
          src={imgSrc}
          alt="Post thumbnail"
          className="post-thumbnail-large"
          onError={() => setImgSrc(fallbackImg)}
        />
      </div>

      {post.selftext && <p className="post-content">{post.selftext}</p>}

      <footer>
        <div className="post-stats-centered">
          <span>👍 {post.ups} upvotes</span>
          <span>• 💬 {post.num_comments} comments</span>
        </div>
      </footer>

      <section className="comments-section">
        <h3>Comments</h3>
        {comments.length === 0 && <p>No comments yet.</p>}
        <ul>
          {comments.map((comment) => (
            <li key={comment.id} className="comment">
              <p className="comment-author"><strong>{comment.author}</strong></p>
              <p className="comment-body">{comment.body}</p>
            </li>
          ))}
        </ul>
      </section>
    </article>
  );
};

export default PostDetail;
