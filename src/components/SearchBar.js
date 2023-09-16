import React from 'react';

function SearchBar({
  handleSortOption,
  handleCategoryFilter,
  sortOrder,
}) {
  return (
    <div>
      <strong>Sort by:</strong>
      <label>
        <input
          type="radio"
          value="Alphabetically"
          name="alphabetically"
          checked={sortOrder === 'alphabetically' ? true : null}
          onClick={handleSortOption}
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="price"
          checked={sortOrder === 'price' ? true : null}
          onClick={handleSortOption}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleCategoryFilter}>
          <option value="All">All</option>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
