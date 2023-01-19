import React from 'react';
import PropTypes from 'prop-types';
import ThreadCommentItem, { commentItemShape } from './ThreadCommentItem';

function ListComment({ comments, upVote, downVote }) {
  return (
    <div className="">
      <h3 className="text-xl font-medium mb-4">
        Comments
        (
        {comments.length}
        )
      </h3>
      <div className="">
        {comments.map((comment) => (
          <ThreadCommentItem
            key={comment.id}
            className=""
            {...comment}
            upVote={upVote}
            downVote={downVote}
          />
        ))}
      </div>
    </div>
  );
}

ListComment.propTypes = {
  comments: PropTypes.arrayOf(PropTypes.shape(commentItemShape)).isRequired,
  upVote: PropTypes.func.isRequired,
  downVote: PropTypes.func.isRequired,
};

export default ListComment;
