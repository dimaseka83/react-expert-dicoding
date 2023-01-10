import React from 'react';
import PropTypes from 'prop-types';

function LeaderboardItem({ user, score }) {
  return (
    <div className="flex items-center">
      <div className="flex items-center">
        <img className="h-10 w-10 rounded-full" src={user.avatar} alt={user.name} />
        <p className="ml-4 text-lg font-medium">{user.name}</p>
      </div>
      <p className="ml-auto text-lg font-medium">{score}</p>
    </div>

  );
}

const userShape = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

const leaderboardItemShape = {
  user: PropTypes.shape(userShape).isRequired,
  score: PropTypes.number.isRequired,
};

LeaderboardItem.propTypes = {
  ...leaderboardItemShape,
};

export { leaderboardItemShape };

export default LeaderboardItem;
