import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const PostDetail = () => {
  const { subreddit, id } = useParams();
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        setIsLoading(true);
        const res = await fetch(`https://www.reddit.com/r/${subreddit}/comments/${id}.json`);
        const json = await res.json();

        const postData = json[0].data.children[0].data;
        const commentData = json[1].data.children.map(child => child.data);

        setPost(postData);
        setComments(commentData);
        setIsLoading(false);
      } catch (err) {
        setHasError(true);
        setIsLoading(false);
      }
    };

    fetchPostData();
  }, [subreddit, id]);

  if (isLoading) return <p>Loading post...</p>;
  if (hasError || !post) return <p>Oops! Couldn't load the post.</p>;

  return (
    <div className="post-detail">
      <h2>{post.title}</h2>
      <p>Posted by u/{post.author}</p>
      <p>{post.selftext}</p>
      <hr />
      <h3>Comments</h3>
      <ul>
        {comments.map((comment) => (
          <li key={comment.id}>
            <strong>u/{comment.author}</strong>: {comment.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default PostDetail;
