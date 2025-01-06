// React Component for Search and Filter Service
import React, { useState } from 'react';
import axios from 'axios';
import './SearchFilter.css';

const SearchFilter = () => {
  const [query, setQuery] = useState('');
  const [filterBy, setFilterBy] = useState('title'); // Default filter by title
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
            <option value="title">Title</option>
            <option value="author">Author</option>
            <option value="category">Category</option>
          </select>
        </div>
      </form>
      <div className="results">
        {results.length > 0 ? (
          <ul>
            {results.map((book) => (
              <li key={book.id} className="result-item">
                <h3>{book.title}</h3>
                <p>Author: {book.author}</p>
                <p>Category: {book.category}</p>
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