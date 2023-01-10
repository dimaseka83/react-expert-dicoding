import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { postedAt } from '../utils';

function ThreadCommentItem({
  id, owner, createdAt, content,
  upVotesBy, downVotesBy, upVote, downVote, authUser,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteComment = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteComment = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div className="flex flex-col bg-white rounded-lg p-4">
      <div className="flex justify-between mb-2">
        <div className="flex items-center">
          <img src={owner.avatar} alt={owner.name} className="w-10 h-10 rounded-full mr-3" />
          <span className="text-lg font-medium">{owner.name}</span>
        </div>
        <div className="text-sm text-gray-600">
          {postedAt(createdAt)}
        </div>
      </div>
      <div className="text-gray-700">
        {content}
      </div>
      <div className="flex justify-between mt-2">
        {
        upVote && (
          <div className="flex items-center">
            <button type="button" onClick={onUpVoteComment} className="text-blue-500 hover:text-blue-600">
              <AiFillLike className="w-4 h-4 mr-1" style={{ color: isUpVoted ? 'blue' : 'black' }} />
            </button>
            <span className="text-sm text-gray-600">{upVotesBy.length}</span>
          </div>
        )
      }
        {
        downVote && (
          <div className="flex items-center">
            <button type="button" onClick={onDownVoteComment} className="text-red-500 hover:text-red-600">
              <AiFillDislike className="w-4 h-4 mr-1" style={{ color: isDownVoted ? 'red' : 'black' }} />
            </button>
            <span className="text-sm text-gray-600">{downVotesBy.length}</span>
          </div>
        )
      }
      </div>
    </div>

  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const commentItemShape = {
  id: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  createdAt: PropTypes.number.isRequired,
  content: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadCommentItem.propTypes = {
  ...commentItemShape,
};

ThreadCommentItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { commentItemShape };

export default ThreadCommentItem;
