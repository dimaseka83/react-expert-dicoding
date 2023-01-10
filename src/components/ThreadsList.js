import React from 'react';
import PropTypes from 'prop-types';
import ThreadItem, { threadItemShape } from './ThreadItem';

function ThreadsList({ threads, upVote, downVote }) {
  return (
    <div className="bg-white rounded-lg overflow-x-scroll">
      {threads.map((thread) => (
        <ThreadItem
          key={thread.id}
          className="p-4 m-4 border-b border-gray-300 flex items-center"
          {...thread}
          upVote={upVote}
          downVote={downVote}
        />
      ))}
    </div>
  );
}

ThreadsList.propTypes = {
  threads: PropTypes.arrayOf(PropTypes.shape(threadItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ThreadsList;
