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
    <div className="thread-item">
      <div className="thread-item__title">
        <Link to={`/threads/${id}`}>{title}</Link>
      </div>
      <div className="thread-item__detail">
        <div className="thread-item__header-left">
          <div className="thread-item__user-avatar">
            <img src={user.avatar} alt={user.name} />
          </div>
          <div className="thread-item__user-name">
            <p>{user.name}</p>
            <p>{postedAt(createdAt)}</p>
          </div>
          <div className="thread-item__category">
            <p>{category}</p>
          </div>
          <div className="thread-item__body">
            <p className="thread-item__body-text" dangerouslySetInnerHTML={{ __html: `${body.substring(0, 100)}...` }} />
          </div>
          <div className="thread-item__footer">
            {
                        upVote && (
                        <div className="thread-item__upvote">
                          <AiFillLike
                            style={{ color: isUpVoted ? 'blue' : 'black' }}
                            onClick={onUpVoteThread}
                          />
                          <p>{upVotesBy.length}</p>
                        </div>
                        )
                    }
            {
                        downVote && (
                        <div className="thread-item__downvote">
                          <AiFillDislike
                            style={{ color: isDownVoted ? 'blue' : 'black' }}
                            onClick={onDownVoteThread}
                          />
                          <p>{downVotesBy.length}</p>
                        </div>
                        )
                    }

            <div className="thread-item__comment">
              <AiOutlineComment />
              <p>{totalComments}</p>
            </div>
          </div>
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
