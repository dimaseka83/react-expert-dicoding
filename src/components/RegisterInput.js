import React from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function RegisterInput({ register }) {
  const [name, onNameChange] = useInput('');
  const [email, onEmailChange] = useInput('');
  const [password, onPasswordChange] = useInput('');

  return (
    <div className="p-4">
      <input
        type="text"
        className="w-full rounded-lg p-2 text-gray-800 border border-gray-400 mb-4"
        placeholder="Name"
        value={name}
        onChange={onNameChange}
      />
      <input
        type="email"
        className="w-full rounded-lg p-2 text-gray-800 border border-gray-400 mb-4"
        placeholder="Email"
        value={email}
        onChange={onEmailChange}
      />
      <input
        type="password"
        className="w-full rounded-lg p-2 text-gray-800 border border-gray-400 mb-4"
        placeholder="Password"
        value={password}
        onChange={onPasswordChange}
      />
      <button type="button" className="bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg" onClick={() => register({ name, email, password })}>
        Register
      </button>
    </div>
  );
}

RegisterInput.propTypes = {
  register: PropTypes.func.isRequired,
};

export default RegisterInput;
