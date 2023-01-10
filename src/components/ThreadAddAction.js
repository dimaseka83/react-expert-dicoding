import React from 'react';
import { Link } from 'react-router-dom';

function ThreadAddAction() {
  return (
    <div className="p-2">
      <Link to="/add" className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600">Add Thread</Link>
    </div>
  );
}

export default ThreadAddAction;
