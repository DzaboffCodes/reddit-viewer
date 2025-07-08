import React from 'react';
import ReactMarkdown from 'react-markdown';

const Comment = ({ comment }) => {
  const { author, body } = comment;

  return (
    <div className="comment">
      <p className="comment-author">{author}</p>
      <div className="comment-body">
        <ReactMarkdown>{body}</ReactMarkdown>
      </div>
    </div>
  );
};

export default Comment;
