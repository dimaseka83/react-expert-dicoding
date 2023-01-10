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
    <div className="bg-gray-100 rounded-lg p-4">
      <textarea
        className="w-full rounded-lg p-2 text-gray-800 border border-gray-400"
        placeholder="Add a comment"
        contentEditable
        data-value={comment}
        onInput={handleAddComment}
      />
      <button
        type="button"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
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
