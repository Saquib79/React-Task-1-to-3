import React, { useState } from 'react';

function ShowHide() {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="show-hide">
      <button onClick={() => setIsVisible(!isVisible)}>
        Toggle Visibility
      </button>
      {isVisible && <p>This is a toggled element!</p>}
    </div>
  );
}

export default ShowHide;
