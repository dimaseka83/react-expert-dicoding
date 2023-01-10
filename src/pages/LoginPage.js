import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginInput from '../components/LoginInput';
import { asyncSetAuthUser } from '../states/authUser/action';

function LoginPage() {
  const dispatch = useDispatch();

  const onLogin = ({ email, password }) => {
    dispatch(asyncSetAuthUser({ email, password }));
  };

  return (
    <div className="bg-white rounded-lg p-8 mx-auto max-w-sm flex flex-col items-center">
      <h1 className="text-2xl font-medium text-center mb-4">Login</h1>
      <LoginInput login={onLogin} className="mb-4" />
      <Link className="text-blue-500 underline text-center" to="/register">Dont have an account? Register here</Link>
    </div>

  );
}

export default LoginPage;
