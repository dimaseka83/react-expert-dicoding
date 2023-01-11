import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ onCategory, category }) {
  return (
    <div className="p-2">
      <button
        type="button"
        className="px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600"
        onClick={() => { onCategory(category); }}
      >
        #
        {category}
      </button>
    </div>
  );
}

ThreadCategoryItem.propTypes = {
  onCategory: PropTypes.func.isRequired,
  category: PropTypes.string.isRequired,
};

export default ThreadCategoryItem;
