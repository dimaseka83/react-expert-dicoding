import React from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import RegisterInput from '../components/RegisterInput';
import { asyncRegisterUser } from '../states/users/action';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onRegister = ({ name, email, password }) => {
    dispatch(asyncRegisterUser({ name, email, password }));
    navigate('/');
  };

  return (
    <div className="bg-gray-100 rounded-lg p-4 flex flex-col">
      <h1 className="text-2xl font-medium mb-4">Register</h1>
      <RegisterInput className="mb-4" register={onRegister} />
      <Link to="/" className="text-indigo-500 hover:text-indigo-600">Login</Link>
    </div>
  );
}

export default RegisterPage;
