import React, { useState } from 'react';

function SumNumbers() {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');

  const handleNum1Change = (e) => {
    const value = e.target.value;
    setNum1(value); // Keep as string to allow typing negative numbers
  };

  const handleNum2Change = (e) => {
    const value = e.target.value;
    setNum2(value); // Keep as string to allow typing negative numbers
  };

  // Calculate the sum, converting to numbers
  const sum = Number(num1) + Number(num2);

  return (
    <div className="sum-numbers">
      <h2>Sum Calculator</h2>
      <p>Enter two numbers (negative values are allowed):</p>
      <input
        type="text" // Change type to text for manual entry
        value={num1}
        onChange={handleNum1Change}
        placeholder="First number"
      />
      <input
        type="text" // Change type to text for manual entry
        value={num2}
        onChange={handleNum2Change}
        placeholder="Second number"
      />
      <p>Sum: {sum}</p>
    </div>
  );
}

export default SumNumbers;
