import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const fallbackImg = '/fallback.png';

const PostCard = ({ post }) => {
    const { id, title, author, created_utc, thumbnail, subreddit, subreddit_name_prefixed, ups, num_comments } = post;
    const subredditUrl = subreddit || (subreddit_name_prefixed ? subreddit_name_prefixed.replace('r/', '') : '');
    const date = new Date(created_utc * 1000);
    const formattedDate = date.toLocaleString();
    const [imgSrc, setImgSrc] = useState(
        thumbnail && thumbnail.startsWith('http') ? thumbnail : fallbackImg
    );

    return (
        <article className="reddit-post-card">
            <Link to={`/post/${subredditUrl}/${id}`} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div className="post-meta">
                    <span className="post-subreddit">{subreddit_name_prefixed}</span>
                    <span className="post-timestamp">{formattedDate}</span>
                </div>
                <h2 className="post-title" style={{ textAlign: 'center' }}>{title}</h2>
                <div className="post-thumbnail-wrapper">
                    <img
                        src={imgSrc}
                        alt="Post thumbnail"
                        className="post-thumbnail-large"
                        onError={() => setImgSrc(fallbackImg)}
                    />
                </div>
                <div className="post-stats-centered">
                    <span>👍 {ups} upvotes</span>
                    <span>• 💬 {num_comments} comments</span>
                </div>
            </Link>
        </article>
    );
};

export default PostCard;