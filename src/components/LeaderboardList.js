import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="leaderboard-list">
      <header>
        <div className="leaderboard-list__header__user">User</div>
        <div className="leaderboard-list__header__score">Score</div>
      </header>
      <div className="leaderboard-list__items">
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem
            key={leaderboard.id}
            {...leaderboard}
          />
        ))}
      </div>
    </div>
  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
