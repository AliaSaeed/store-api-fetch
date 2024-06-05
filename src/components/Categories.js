import React from 'react';
import './styles.css';

const Categories = ({ categories, onSelectCategory }) => {
  return (
    <div className="categories">
      {categories.map(category => (
        <button key={category} onClick={() => onSelectCategory(category)}>
          {category}
        </button>
      ))}
    </div>
  );
};

export default Categories;
