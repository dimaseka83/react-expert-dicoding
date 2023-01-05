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
    <div className="thread-detail">
      <div className="thread-detail-header">
        <div className="thread-detail-header-title">{title}</div>
      </div>
      <div className="thread-detail-item">
        <header>
          <div className="thread-detail-item-header">
            <img src={owner.avatar} alt={owner.name} />
          </div>
        </header>

        <div className="thread-detail-owner-info">
          <div className="thread-detail-owner-name">{owner.name}</div>
          <div className="thread-detail-owner-category">{postedAt(createdAt)}</div>
        </div>

        <div className="thread-detail-category">{category}</div>
        <article className="thread-detail-body">
          <p className="thread-detail-body-text" dangerouslySetInnerHTML={{ __html: sanitize(body) }} />
        </article>
        <div className="thread-detail-votes">
          <div className="thread-detail-votes-up">
            <button
              type="button"
              className="thread-detail-votes-up-button"
              onClick={() => upVoteThread(id)}
            >
              {isUpVoted ? <AiFillLike style={{ color: 'blue' }} /> : <AiFillLike />}
            </button>
            <span className="thread-detail-votes-up-count">{upVotesBy.length}</span>
          </div>
          <div className="thread-detail-votes-down">
            <button
              type="button"
              className="thread-detail-votes-down-button"
              onClick={() => downVoteThread(id)}
            >
              {isDownVoted ? <AiFillDislike style={{ color: 'red' }} /> : <AiFillDislike />}
            </button>
            <span className="thread-detail-votes-down-count">{downVotesBy.length}</span>
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
  createdAt: PropTypes.number.isRequired,
  body: PropTypes.string.isRequired,
  owner: PropTypes.shape(ownerShape).isRequired,
  category: PropTypes.string.isRequired,
  upVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  downVotesBy: PropTypes.arrayOf(PropTypes.string).isRequired,
  upVoteThread: PropTypes.func.isRequired,
  downVoteThread: PropTypes.func.isRequired,
};

export default ThreadDetail;
