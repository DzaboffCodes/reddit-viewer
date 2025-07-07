import React from 'react'; 

const PostCard = ({ post }) => {

    // Destructure Post Object
    const { title, author, created_utc, thumbnail, subreddit_name_prefixed, ups, num_comments } = post;

    // Format the timestamp
    const date = new Date(created_utc * 1000);
    const formattedDate = date.toLocaleString();

    // Handle the thumbnail 
    const isValidThumbnail = post.thumbnail && post.thumbnail.startsWith('http');



    return (
        <article> 
            {/* Post Title */}
            <h2>{title}</h2>

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
        </article>
    );
};

export default PostCard;