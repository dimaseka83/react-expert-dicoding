import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ThreadInput from '../components/ThreadInput';
import { asyncAddThread } from '../states/thread/action';

function AddPageThread() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onAddThread = ({ title, body, category = '' }) => {
    dispatch(asyncAddThread({ title, body, category }));
    navigate('/');
  };

  return (
    <div className="p-4">
      <h2 className="text-xl font-medium mb-4">Add Thread</h2>
      <ThreadInput addThread={onAddThread} className="mt-4" />
    </div>
  );
}

export default AddPageThread;
