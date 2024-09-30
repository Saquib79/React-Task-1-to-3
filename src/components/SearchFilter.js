import React, { useState } from 'react';

const data = ['Apple', 'Banana', 'Cherry', 'Date', 'Elderberry'];

function SearchFilter() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredData = data.filter(item =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="search-filter">
      <input
        type="text"
        placeholder="Search..."
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default SearchFilter;
