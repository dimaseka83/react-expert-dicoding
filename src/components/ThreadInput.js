import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onChangeTitle] = useInput('');
  const [category, onChangeCategory] = useInput('');
  const [body, setBody] = useState('');

  const onChangeBody = (e) => {
    setBody(e.target.innerText);
  };

  return (
    <form className="flex flex-col">
      <input
        className="p-2 border border-gray-400 rounded-lg"
        type="text"
        value={title}
        onChange={onChangeTitle}
        placeholder="title"
      />
      <input
        className="p-2 border border-gray-400 rounded-lg mt-2"
        type="text"
        value={category}
        onChange={onChangeCategory}
        placeholder="category"
      />
      <div
        className="p-2 border border-gray-400 rounded-lg h-24 mt-2"
        data-testid="input-body"
        contentEditable
        onInput={onChangeBody}
      />
      <button
        type="submit"
        className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4"
        onClick={() => addThread({ title, body, category })}
      >
        Add Thread
      </button>
    </form>

  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
