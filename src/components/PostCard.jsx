import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const fallbackImg = '/fallback.png';

const PostCard = ({ post }) => {
    const { id, title, author, created_utc, thumbnail, subreddit, subreddit_name_prefixed, ups, num_comments } = post;
    const subredditUrl = subreddit || (subreddit_name_prefixed ? subreddit_name_prefixed.replace('r/', '') : '');
    const date = new Date(created_utc * 1000);
    const formattedDate = date.toLocaleString();

    // Use state to handle fallback if image fails to load
    const [imgSrc, setImgSrc] = useState(
        thumbnail && thumbnail.startsWith('http') ? thumbnail : fallbackImg
    );

    return (
        <article> 
            <Link to={`/post/${subredditUrl}/${id}`} style={{ display: 'flex', alignItems: 'flex-start', textDecoration: 'none' }}>
                <img 
                    src={imgSrc}
                    alt="Post thumbnail" 
                    className='post-thumbnail'
                    onError={() => setImgSrc(fallbackImg)}
                />
                <div style={{ flex: 1 }}>
                    <h2 className='post-title'>{title}</h2>
                    <p>
                    Posted by <strong>{author}</strong> in <em>{subreddit_name_prefixed}</em> on {formattedDate}
                    </p>
                    <p>
                    👍 {ups} upvotes • 💬 {num_comments} comments
                    </p>
                </div>
            </Link>
        </article>
    );
};

export default PostCard;