import React from 'react';
import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>{count}</h1>
      <botton onClick={() => {
        setCount{ count + 1 };
      }}>Increase</botton>
    </div>
  );
};

export default Counter;