import  { useState } from 'react';
import './SearchFilter.css';

const SearchFilter = () => {
  // State untuk kata kunci pencarian
  const [searchText, setSearchText] = useState('');
  // State untuk filter kategori
  const [category, setCategory] = useState('');
  // State untuk filter ketersediaan
  const [availability, setAvailability] = useState('');

  // Data statis untuk simulasi hasil pencarian
  const data = [
    { id: 1, name: 'Buku A', category: 'Fiksi', available: true },
    { id: 2, name: 'Buku B', category: 'Non-Fiksi', available: false },
    { id: 3, name: 'Buku C', category: 'Fiksi', available: true },
    { id: 4, name: 'Buku D', category: 'Edukasi', available: false },
    { id: 5, name: 'Buku E', category: 'Edukasi', available: true },
  ];

  // Filter data berdasarkan pencarian dan filter
  const filteredData = data.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchText.toLowerCase());
    const matchesCategory = category ? item.category === category : true;
    const matchesAvailability =
      availability === 'available'
        ? item.available
        : availability === 'unavailable'
        ? !item.available
        : true;

    return matchesSearch && matchesCategory && matchesAvailability;
  });

  return (
    <div className="search-filter-page">
      <h1>Search and Filter</h1>

      <div className="search-filter">
        {/* Input pencarian */}
        <input
          type="text"
          placeholder="Masukkan kata kunci..."
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />

        {/* Dropdown filter kategori */}
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="">Pilih Kategori</option>
          <option value="Fiksi">Fiksi</option>
          <option value="Non-Fiksi">Non-Fiksi</option>
          <option value="Edukasi">Edukasi</option>
        </select>

        {/* Dropdown filter ketersediaan */}
        <select value={availability} onChange={(e) => setAvailability(e.target.value)}>
          <option value="">Status Ketersediaan</option>
          <option value="available">Tersedia</option>
          <option value="unavailable">Tidak Tersedia</option>
        </select>
      </div>

      {/* Tampilkan hasil filter */}
      <div className="search-results">
        <h2>Hasil Pencarian:</h2>
        {filteredData.length > 0 ? (
          <ul>
            {filteredData.map((item) => (
              <li key={item.id}>
                {item.name} - {item.category} ({item.available ? 'Tersedia' : 'Tidak Tersedia'})
              </li>
            ))}
          </ul>
        ) : (
          <p>Tidak ada hasil ditemukan.</p>
        )}
      </div>
    </div>
  );
};

export default SearchFilter;
