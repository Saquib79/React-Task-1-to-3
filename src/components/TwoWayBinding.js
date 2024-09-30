import React, { useState } from 'react';

function TwoWayBinding() {
  const [text, setText] = useState('');

  return (
    <div className="two-way-binding">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>You typed: {text}</p>
    </div>
  );
}

export default TwoWayBinding;
