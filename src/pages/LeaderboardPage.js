import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LeaderboardList from '../components/LeaderboardList';
import { asyncGetLeaderboards } from '../states/leaderboard/action';

function LeaderboardPage() {
  const { leaderboards = [], users = [] } = useSelector((states) => states);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncGetLeaderboards());
  }, [dispatch]);

  const leaderboardsList = leaderboards.map((leaderboard) => ({
    ...leaderboard,
    user: users.find((user) => user.id === users.id),
  }));

  return (
    <div className="container">
      <h1>Leaderboard</h1>
      <LeaderboardList leaderboards={leaderboardsList} />
    </div>
  );
}

export default LeaderboardPage;
