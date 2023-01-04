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
    <div className="comment-item">
      <div className="comment-item__header">
        <div className="comment-item__header__owner">
          <img src={owner.avatar} alt={owner.name} />
          <span>{owner.name}</span>
        </div>
        <div className="comment-item__header__posted-at">
          {postedAt(createdAt)}
        </div>
      </div>
      <div className="comment-item__content">
        {content}
      </div>
      <div className="comment-item__footer">
        {
                        upVote && (
                        <div className="comment-item__footer__up-vote">
                          <button type="button" onClick={onUpVoteComment}>
                            <AiFillLike style={{ color: isUpVoted ? 'blue' : 'black' }} />
                          </button>
                          <span>{upVotesBy.length}</span>
                        </div>
                        )
                    }
        {
                        downVote && (
                        <div className="comment-item__footer__down-vote">
                          <button type="button" onClick={onDownVoteComment}>
                            <AiFillDislike style={{ color: isDownVoted ? 'red' : 'black' }} />
                          </button>
                          <span>{downVotesBy.length}</span>
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
