import React from 'react';
import PropTypes from 'prop-types';
import LeaderboardItem, { leaderboardItemShape } from './LeaderboardItem';

function LeaderboardList({ leaderboards }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <header className="flex justify-between">
        <div className="text-lg font-medium">User</div>
        <div className="text-lg font-medium">Score</div>
      </header>
      <div className="">
        {leaderboards.map((leaderboard) => (
          <LeaderboardItem key={leaderboard.id} className="border-b border-gray-200" {...leaderboard} />
        ))}
      </div>
    </div>

  );
}

LeaderboardList.propTypes = {
  leaderboards: PropTypes.arrayOf(PropTypes.shape(leaderboardItemShape)).isRequired,
};

export default LeaderboardList;
