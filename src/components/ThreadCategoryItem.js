import React from 'react';
import PropTypes from 'prop-types';

function ThreadCategoryItem({ onCategory, category }) {
  return (
    <div className="thread-category-item">
      <button type="button" onClick={onCategory}>
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
