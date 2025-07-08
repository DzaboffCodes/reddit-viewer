import React from 'react'; 
import {Link} from 'react-router-dom';

const PostCard = ({ post }) => {

    // Destructure Post Object
    const { id, title, author, created_utc, thumbnail, subreddit_name_prefixed, ups, num_comments } = post;
    const subreddit = subreddit_name_prefixed.replace('r/', '');


    // Format the timestamp
    const date = new Date(created_utc * 1000);
    const formattedDate = date.toLocaleString();

    // Handle the thumbnail 
    const isValidThumbnail = post.thumbnail && post.thumbnail.startsWith('http');



    return (
        <article> 
            {/* Post Title */}
            <Link to={`/post/${subreddit}/${id}`}>
                <h2 className='post-title'>{title}</h2>

                {/* Show thumbnail if valid */}
            <img src={isValidThumbnail ? thumbnail : '/fallback.png'}
                    alt="Post thumbnail" 
                    className='post-thumbnail'
                    />

                {/* MetaData: author, subreddit, and date */}
                <p> 
                    Posted by <strong>{author}</strong> in <em>{subreddit_name_prefixed}</em> on {formattedDate}
                </p>

                {/* Stats: upvotes and comments */}
                <p> 
                    👍 {ups} upvotes • 💬 {num_comments} comments
                </p>
            </Link>
        </article>
    );
};

export default PostCard;