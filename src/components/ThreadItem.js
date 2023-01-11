import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike, AiOutlineComment } from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { postedAt } from '../utils';

function ThreadItem({
  id,
  title,
  body,
  createdAt,
  category,
  upVotesBy,
  downVotesBy,
  totalComments,
  authUser,
  upVote,
  downVote,
  user,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  const onUpVoteThread = (event) => {
    event.stopPropagation();
    upVote(id);
  };

  const onDownVoteThread = (event) => {
    event.stopPropagation();
    downVote(id);
  };

  return (
    <div className="bg-white rounded-lg p-4">
      <div className="mb-4">
        <Link className="font-medium text-lg" to={`/threads/${id}`}>{title}</Link>
      </div>
      <div className="flex items-center mb-4">
        <div className="w-12 h-12 rounded-full overflow-hidden">
          <img className="w-full h-full object-cover" src={user.avatar} alt={user.name} />
        </div>
        <div className="ml-4">
          <p className="text-base font-medium">{user.name}</p>
          <p className="text-sm text-gray-600">{postedAt(createdAt)}</p>
        </div>
      </div>
      <div className="mb-4">
        <span className="bg-blue-100 text-blue-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
          #
          {category}
        </span>
      </div>
      <div className="mb-4">
        <p className="text-sm text-gray-600" dangerouslySetInnerHTML={{ __html: `${body.substring(0, 100)}...` }} />
      </div>
      <div className="flex justify-between">
        {
          upVote && (
          <div className="flex items-center">
            <AiFillLike style={{ color: isUpVoted ? 'blue' : 'black' }} onClick={onUpVoteThread} className="w-6 h-6 mr-2" />
            <p className="text-sm text-gray-600">{upVotesBy.length}</p>
          </div>
          )
        }
        {
          downVote && (
          <div className="flex items-center">
            <AiFillDislike style={{ color: isDownVoted ? 'blue' : 'black' }} onClick={onDownVoteThread} className="w-6 h-6 mr-2" />
            <p className="text-sm text-gray-600">{downVotesBy.length}</p>
          </div>
          )
        }
        <div className="flex items-center">
          <AiOutlineComment className="w-6 h-6 mr-2" />
          <p className="text-sm text-gray-600">{totalComments}</p>
        </div>
      </div>
    </div>
  );
}

const userShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

const threadItemShape = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  totalComments: PropTypes.number.isRequired,
  user: PropTypes.shape(userShape).isRequired,
  authUser: PropTypes.string.isRequired,
};

ThreadItem.propTypes = {
  ...threadItemShape,
};

ThreadItem.defaultProps = {
  upVote: null,
  downVote: null,
};

export { threadItemShape };

export default ThreadItem;
