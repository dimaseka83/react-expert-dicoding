import React from 'react';
import PropTypes from 'prop-types';
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
import { sanitize } from 'dompurify';
import { postedAt } from '../utils';

function ThreadDetail({
  id,
  authUser,
  title,
  createdAt,
  body,
  owner,
  category,
  upVotesBy,
  downVotesBy,
  upVoteThread,
  downVoteThread,
}) {
  const isUpVoted = upVotesBy.includes(authUser);
  const isDownVoted = downVotesBy.includes(authUser);

  return (
    <div className="bg-white p-4">
      <div className="flex">
        <div className="text-lg font-medium">{title}</div>
      </div>
      <div className="mt-4">
        <header>
          <div className="flex">
            <img className="w-8 h-8 rounded-full" src={owner.avatar} alt={owner.name} />
          </div>
        </header>

        <div className="mt-4 flex">
          <div className="text-lg font-medium">{owner.name}</div>
          <div className="ml-2 text-sm font-medium">{postedAt(createdAt)}</div>
        </div>

        <div className="mt-2 text-sm font-medium">{category}</div>
        <article className="mt-4 text-sm">
          <p className="" dangerouslySetInnerHTML={{ __html: sanitize(body) }} />
        </article>
        <div className="mt-4 flex">
          <div className="mr-2">
            <button
              type="button"
              className="text-blue-500 hover:text-blue-600"
              onClick={() => upVoteThread(id)}
            >
              <AiFillLike className="w-4 h-4 mr-1" style={{ color: isUpVoted ? 'blue' : 'black' }} />
            </button>
            <span className="text-sm font-medium">{upVotesBy.length}</span>
          </div>
          <div className="">
            <button
              type="button"
              className="text-red-500 hover:text-red-600"
              onClick={() => downVoteThread(id)}
            >
              <AiFillDislike className="w-4 h-4 mr-1" style={{ color: isDownVoted ? 'red' : 'black' }} />
            </button>
            <span className="text-sm font-medium">{downVotesBy.length}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

const ownerShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

ThreadDetail.propTypes = {
  id: PropTypes.string.isRequired,
  authUser: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};

export default ThreadDetail;
