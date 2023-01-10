import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function LoginInput({ login }) {
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="bg-gray-200 p-4 rounded-md">
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full"
          type="email"
          placeholder="Email"
          value={email}
          onChange={onEmailChange}
        />
      </div>
      <div className="mb-4">
        <input
          className="border p-2 rounded w-full"
          type="password"
          placeholder="Password"
          value={password}
          onChange={onPasswordChange}
        />
      </div>
      <button
        className="bg-blue-500 text-white rounded-md py-2 px-4 hover:bg-blue-600"
        type="button"
        onClick={() => login({ email, password })}
      >
        Login
      </button>
    </div>

  );
}

LoginInput.propTypes = {
  login: PropTypes.func.isRequired,
};

export default LoginInput;
