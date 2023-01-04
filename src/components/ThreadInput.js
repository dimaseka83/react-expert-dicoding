import React, { useState } from 'react';
import PropTypes from 'prop-types';
import useInput from '../hooks/useInput';

function ThreadInput({ addThread }) {
  const [title, onChangeTitle] = useInput('');
  const [body, setBody] = useState('');
  const [category, onChangeCategory] = useInput('');

  const onChangeBody = (e) => {
    setBody(e.target.innerText);
  };

  return (
    <div className="thread-input">
      <input type="text" value={title} onChange={onChangeTitle} />
      <div contentEditable="true" onInput={onChangeBody}>{body}</div>
      <input type="text" value={category} onChange={onChangeCategory} />
      <button type="submit" onClick={() => addThread({ title, body, category })}>Add Thread</button>
    </div>
  );
}

ThreadInput.propTypes = {
  addThread: PropTypes.func.isRequired,
};

export default ThreadInput;
