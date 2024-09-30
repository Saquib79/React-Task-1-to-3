import React, { useState } from 'react';

function DynamicList() {
  const [items, setItems] = useState([]);

  const addItem = () => {
    setItems([...items, `Item ${items.length + 1}`]);
  };

  return (
    <div className="dynamic-list">
      <button onClick={addItem}>Add Item</button>
      {items.map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  );
}

export default DynamicList;
