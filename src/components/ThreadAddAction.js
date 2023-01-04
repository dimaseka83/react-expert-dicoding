import React from 'react';
import { Link } from 'react-router-dom';

function ThreadAddAction() {
  return (
    <div className="thread-add-action">
      <Link to="/add">Add Thread</Link>
    </div>
  );
}

export default ThreadAddAction;
