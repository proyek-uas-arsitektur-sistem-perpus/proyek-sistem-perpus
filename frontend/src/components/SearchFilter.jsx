// components/SearchFilter.jsx
import React, { useState } from 'react';
import axios from 'axios';
import './SearchFilter.css';

const SearchFilter = ({ filterOptions = [], onSearch }) => {
  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState(filterOptions.length > 0 ? filterOptions[0].value : 'title'); // Default filter if options are not passed
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.get('/api/searchController', {
        params: {
          [filterBy]: query, // Dynamically set the filter key
        },
      });
      setResults(response.data);
      if (onSearch) onSearch(response.data); // Return results to parent if needed
    } catch (error) {
      console.error('Error fetching search results:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="search-and-filter">
      <form className="filter-form" onSubmit={handleSearch}>
        <div className="search-group">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="search-input"
          />
          <button type="submit" className="search-button" disabled={loading}>
            <i className="fas fa-search"></i> {/* Font Awesome Icon */}
          </button>
          <select
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
            className="filter-select"
          >
            {filterOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </form>
      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id} className="result-item">
                <h3>{item.title}</h3>
                <p>{item.author && `Author: ${item.author}`}</p>
                <p>{item.category && `Category: ${item.category}`}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
