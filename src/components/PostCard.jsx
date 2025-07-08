import React from 'react'; 
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
    const { id, title, author, created_utc, thumbnail, subreddit, subreddit_name_prefixed, ups, num_comments } = post;
    // Prefer subreddit if available, else fallback to parsing subreddit_name_prefixed
    const subredditUrl = subreddit || (subreddit_name_prefixed ? subreddit_name_prefixed.replace('r/', '') : '');

    const date = new Date(created_utc * 1000);
    const formattedDate = date.toLocaleString();

    const isValidThumbnail = thumbnail && thumbnail.startsWith('http');

    return (
        <article> 
            <Link to={`/post/${subredditUrl}/${id}`}>
                <h2 className='post-title'>{title}</h2>
                <img 
                    src={isValidThumbnail ? thumbnail : '/fallback.png'}
                    alt="Post thumbnail" 
                    className='post-thumbnail'
                />
                <p>
                    Posted by <strong>{author}</strong> in <em>{subreddit_name_prefixed}</em> on {formattedDate}
                </p>
                <p>
                    👍 {ups} upvotes • 💬 {num_comments} comments
                </p>
            </Link>
        </article>
    );
};

export default PostCard;