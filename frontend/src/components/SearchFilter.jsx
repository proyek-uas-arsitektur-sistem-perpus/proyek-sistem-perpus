import React, { useState } from "react";

const SearchFilter = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(searchTerm);
  };

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Cari buku..."
        value={searchTerm}
        onChange={handleSearchChange}
        className="search-input"
      />
      <button onClick={handleSearchClick} className="btn-search">
        Cari
      </button>
    </div>
  );
};

export default SearchFilter;
