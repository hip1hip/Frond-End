import React from 'react';
import { useState } from 'react';

function Button(props) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>현재 카운터: {count} </h1>
      <button onClick={(evt) => {
        setCount(count + 1);

      }}>{props.tilte}Count Up</button>
      <button onClick={() => {
        setCount(count - 1);
      }}>Count Doun</button>
    </div>
  );
}

export default Button;