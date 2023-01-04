import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem from './ThreadCategoryItem';

function ThreadCategoryList({ categories, onCategory }) {
  return (
    <div className="thread-category-list">
      <h2>Categories Popular</h2>
      <div className="thread-category-list-items">
        {categories.map((category) => (
          <ThreadCategoryItem
            key={category.id}
            {...category}
            onCategory={onCategory}
          />
        ))}
      </div>
    </div>
  );
}

ThreadCategoryList.propTypes = {
  categories: PropTypes.string.isRequired,
  onCategory: PropTypes.func.isRequired,
};

export default ThreadCategoryList;
