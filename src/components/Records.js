import React from 'react';

const records = ['Record 1', 'Record 2', 'Record 3'];

function Records() {
  return (
    <div className="records">
      {records.map((record, index) => (
        <p key={index}>{record}</p>
      ))}
    </div>
  );
}

export default Records;
