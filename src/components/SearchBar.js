import React from "react";

function SearchBar({handleFilter, handleSort,sortBy}) {
  return (
    <div >
      <strong>Sort by:</strong>
      <label>
        <input
          onChange={handleSort}
          type="radio"
          value="Alphabetically"
          name="sort"
          checked={sortBy==="Alphabetically"}
          
        />
        Alphabetically
      </label>
      <label>
        <input
          type="radio"
          value="Price"
          name="sort"
          checked={sortBy==="Price"}
          onChange={handleSort}
        />
        Price
      </label>
      <br />
      <label>
        <strong>Filter:</strong>
        <select onChange={handleFilter}>
          <option value="Tech">Tech</option>
          <option value="Sportswear">Sportswear</option>
          <option value="Finance">Finance</option>
        </select>
      </label>
    </div>
  );
}

export default SearchBar;
