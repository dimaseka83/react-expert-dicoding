import React from 'react';
import PropTypes from 'prop-types';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  return (
    <nav className="bg-gray-800 text-white flex items-center justify-between px-4 py-3">
      <Link to="/" className="navigation__logo text-2xl font-medium">
        <h1>Readable</h1>
      </Link>
      <div className="flex items-center">
        <Link to="/leaderboard" className="mr-4 text-lg">
          <MdLeaderboard />
          <span>Leaderboard</span>
        </Link>
        <Link to="/add" className="mr-4 text-lg">
          <BsFillChatQuoteFill />
          <span>New Post</span>
        </Link>
        <div className="relative">
          <img
            src={avatar}
            alt={id}
            title={name}
            className="w-8 h-8 rounded-full"
          />
          <span className="text-sm font-medium ml-2">{name}</span>
        </div>
        <button type="button" className="ml-4 text-lg" onClick={signOut}>
          <span>Sign Out</span>
        </button>
      </div>
    </nav>
  );
}

const authUserShape = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

Navigation.propTypes = {
  authUser: PropTypes.shape(authUserShape).isRequired,
  signOut: PropTypes.func.isRequired,
};

export default Navigation;
