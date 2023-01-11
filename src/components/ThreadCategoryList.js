import React from 'react';
import PropTypes from 'prop-types';
import ThreadCategoryItem from './ThreadCategoryItem';

function ThreadCategoryList({ categories, onCategory }) {
  return (
    <div className="bg-gray-100 rounded-lg p-4">
      <h2 className="text-lg font-medium mb-4">Categories Popular</h2>
      <div className="flex flex-wrap">
        {categories.map((category) => (
          <ThreadCategoryItem
            key={category}
            category={category}
            className="w-1/3 p-2 mb-4"
            onCategory={onCategory}
          />
        ))}
      </div>
    </div>
  );
}

ThreadCategoryList.propTypes = {
  categories: PropTypes.arrayOf(PropTypes.string).isRequired,
  onCategory: PropTypes.func.isRequired,
};

export default ThreadCategoryList;
