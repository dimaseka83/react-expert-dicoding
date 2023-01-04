import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadComment({ addComment }) {
  const [comment, setComment] = useState('');

  const onAddComment = () => {
    addComment(comment);
    setComment('');
  };

  const handleAddComment = (event) => {
    setComment(event.target.innerText);
  };

  return (
    <div className="thread-comment">
      <textarea
        className="thread-comment-textarea"
        placeholder="Add a comment"
        contentEditable
        data-value={comment}
        onInput={handleAddComment}
      />
      <button
        type="button"
        className="thread-comment-button"
        onClick={onAddComment}
      >
        Add Comment
      </button>
    </div>
  );
}

ThreadComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadComment;
