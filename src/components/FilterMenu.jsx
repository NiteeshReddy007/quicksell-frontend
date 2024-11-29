import React from 'react';
import '../styles/FilterMenu.css';

function FilterMenu({ groupBy, setGroupBy, sortBy, setSortBy }) {
  return (
    <div className="filter-menu">
      <div>
        <label>Group By:</label>
        <select value={groupBy} onChange={(e) => setGroupBy(e.target.value)}>
          <option value="status">Status</option>
          <option value="user">User</option>
          <option value="priority">Priority</option>
        </select>
      </div>
      <div>
        <label>Sort By:</label>
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="priority">Priority</option>
          <option value="title">Title</option>
        </select>
      </div>
    </div>
  );
}

export default FilterMenu;
