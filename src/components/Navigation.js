import React from 'react';
import PropTypes from 'prop-types';
import { BsFillChatQuoteFill } from 'react-icons/bs';
import { MdLeaderboard } from 'react-icons/md';
import { Link } from 'react-router-dom';

function Navigation({ authUser, signOut }) {
  const { id, name, avatar } = authUser;

  return (
    <div className="navigation">
      <Link to="/" className="navigation__logo">
        <h1>Readable</h1>
      </Link>
      <div className="navigation__menu">
        <Link to="/leaderboard" className="navigation__menu__item">
          <MdLeaderboard />
          <span>Leaderboard</span>
        </Link>
        <Link to="/add" className="navigation__menu__item">
          <BsFillChatQuoteFill />
          <span>New Post</span>
        </Link>
        <div className="navigation__menu__item">
          <img
            src={avatar}
            alt={id}
            title={name}
          />
          <span>{name}</span>
        </div>
        <button type="button" className="navigation__menu__item" onClick={signOut}>
          <span>Sign Out</span>
        </button>
      </div>
    </div>
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
