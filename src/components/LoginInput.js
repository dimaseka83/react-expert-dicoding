import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="login-input">
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="button" onClick={() => login(email, password)}>
        Login
      </button>
    </div>
  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
