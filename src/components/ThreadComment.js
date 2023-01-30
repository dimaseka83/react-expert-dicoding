import React, { useState } from 'react';
import PropTypes from 'prop-types';

function ThreadComment({ addComment }) {
  const [content, setContent] = useState('');

  const onAddComment = () => {
    addComment(content);
    setContent('');
  };

  const handleAddComment = (event) => {
    setContent(event.target.innerText);
  };

  return (
    <form className="bg-gray-100 rounded-lg p-4">
      <div
        className="bg-white rounded-lg p-5 mb-5"
        data-placeholder="Add a comment..."
        contentEditable
        data-testid="input-content"
        data-value={content}
        onInput={handleAddComment}
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg"
        onClick={onAddComment}
      >
        Add Comment
      </button>
    </form>
  );
}

ThreadComment.propTypes = {
  addComment: PropTypes.func.isRequired,
};

export default ThreadComment;
